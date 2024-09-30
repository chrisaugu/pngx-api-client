import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from "@/lib/mongodb";
import { stocks } from "@/lib/sample-data";
import { parse_csv_to_json, prepareStockInfo } from "@/lib/utils";

export default async function handler(req, res) {
    let tickers = ['BSP','CCP','CGA','CPL','KAM','KSL','NEM','NGP','NIU','SST','STO'];

    Promise.all(tickers.map(ticker => fetch(`https://www.pngx.com.pg/data/${ticker}.csv`,{mode: 'cors'})))
        .then(responses => Promise.all(responses.map(res => res.text())))
        .then(responses => Promise.all(responses.map(res => parse_csv_to_json(res))))
        // .then(stocks => Promise.all(stocks.map(data => prepareStockInfo(data))))
        .then(data => {
            res.status(200).json(data)
        })
        .catch(e => {
            res.status(500).json({ statusCode: 500, message: e.message })
        })
}

async function getTweets(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).end();
    }

    if (!process.env.TWITTER_API_TOKEN) {
        return res.status(401).json({
            errors: [{ message: 'A Twitter API token is required to execute this request' }],
        });
    }

    const response = await fetch(
        `https://api.twitter.com/1.1/search/tweets.json?q=${QUERY}&lang=${LANG}&count=50`,
        {
            headers: {
                authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
            },
        }
    );

    if (response.ok) {
        const { statuses } = await response.json();
        // Cache the Twitter response for 3 seconds, to avoid hitting the Twitter API limits
        // of 450 requests every 15 minutes (with app auth)
        res.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate');
        res.status(200).json({ tweets: statuses.map(tweet => tweet.id_str) });
    } else {
        res.status(400).json({
            errors: [{ message: `Fetch to the Twitter API failed with code: ${response.status}` }],
        });
    }
}


export async function handlerx(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        res.json(movies);
    } catch (e) {
        console.error(e);
    }
}