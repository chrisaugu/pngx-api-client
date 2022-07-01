// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import api from '../../../lib/api';
import { stocks } from "../../../utils/sample-data";

const QUERY = 'javascript';
const LANG = 'en';

export default async function handler(req, res) {
    // // api.get('/stocks')
    //     .then(r => {
    //         res.status(200).json(r)
    //     })
    //     .catch(e => {
    //         res.status(500).json({ statusCode: 500, message: e.message })
    //     })

    // fetch("https://www.pngx.com.pg/data/BSP.csv",{mode: 'cors'})
    // .then(response => response.text())
    // .then(data => parse_csv_to_json(data))
    // .then(data => {
    //     let quote = {};
    //     quote['date'] = data['Date'];
    //     quote['code'] = data['Short Name'];
    //     quote['short_name'] = data['Short Name'];
    //     quote['bid'] = Number(data['Bid']);
    //     quote['offer'] = Number(data['Offer']);
    //     quote['last'] = Number(data['Last']);
    //     quote['close'] = Number(data['Close']);
    //     quote['high'] = Number(data['High']);
    //     quote['low'] = Number(data['Low']);
    //     quote['open'] = Number(data['Open']);
    //     quote['chg_today'] = Number(data['Chg. Today']);
    //     quote['vol_today'] = Number(data['Vol. Today']);
    //     quote['num_trades'] = Number(data['Num. Trades']);
    // })
    // .then(data => res.status(200).json(data));

    res.status(200).json(stocks);

  // const response = await fetch(`http://localhost:5000/api/stocks`);
  
  // if (response.ok) {
  //   const r = await response.json();
  //   res.status(200).json(r);
  // }
  // else {
  //   res.status(500).json({ 
  //     statusCode: 500,
  //     message: `Fetch to the API failed with code: ${response.status}`
  //   });
  // }

  // if (req.method === 'POST') {
  //   // Process a POST request
  // } else {
  //   // Handle any other HTTP method
  // }
}

/*export default*/ async function getTweets(req, res) {
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

/**
 * Parses CSV format to JSON format for easy manipulation of data
 */
function parse_csv_to_json(body) {
    console.log("parsing csv to json");
    var i = [];
    // split the data into array by whitespaces
    // var o = body.split(/\r\n|\n/);

    // split the first row of that array only by comma (,) to get headers
    // var a = o[0].split(",");

    // loop through the other rows to obtain data
    for (var o = body.split(/\r\n|\n/), a = o[0].split(","), s = 1; s < o.length; s++) {
        // split each row by comma
        var l = o[s].split(",")
        // compare the splited row with the first/header row
        if (l.length == a.length) {
            // run through the header row
            // attaches splited row to the header row
            // then store it on variable d
            // create array by pushing the stored data to the variable i
            for(var d = {}, u = 0; u < a.length; u++) d[a[u]] = l[u]; i.push(d)
        }
    }
    // i[i.length -1]
    return i;
}
