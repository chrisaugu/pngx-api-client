// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from '../../../lib/fetch';
import api from '../../../lib/api';
const QUERY = 'javascript';
const LANG = 'en';

export default async function handler(req, res) {
    // fetch("http://localhost:5000/api/stocks")
    // // api.get('/stocks')
    //     .then(r => {
    //         res.status(200).json(r)
    //     })
    //     .catch(e => {
    //         res.status(500).json({ statusCode: 500, message: e.message })
    //     })

  const response = await fetch(`http://localhost:5000/api/stocks`);
  
  if (response.ok) {
    const r = await response.json();
    res.status(200).json(r);
  }
  else {
    res.status(500).json({ 
      statusCode: 500,
      message: `Fetch to the API failed with code: ${response.status}`
    });
  }
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