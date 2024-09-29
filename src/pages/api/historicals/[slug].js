import { historicals } from "@/lib/sample-data";
import { parse_csv_to_json } from "@/lib/utils";

export default async function handler(req, res) {
  const { slug } = req.query;

  // res.status(200).json(historicals[id]);

  // res.end(`Post: ${id}`)

  // const response = await fetch(`http://localhost:5000/api/historicals/${id}`);
  
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

    fetch(`https://www.pngx.com.pg/data/${slug}.csv`, {mode: 'cors'})
    .then(response => response.text())
    .then(data => parse_csv_to_json(data))
    // .then(data => {
    //     let stocks = [];
    //     for (let i = 0; i < data.length; i++) {
    //         let quote = {};
    //         quote['date'] = data['Date'];
    //         quote['code'] = data['Short Name'];
    //         quote['short_name'] = data['Short Name'];
    //         quote['bid'] = Number(data['Bid']);
    //         quote['offer'] = Number(data['Offer']);
    //         quote['last'] = Number(data['Last']);
    //         quote['close'] = Number(data['Close']);
    //         quote['high'] = Number(data['High']);
    //         quote['low'] = Number(data['Low']);
    //         quote['open'] = Number(data['Open']);
    //         quote['chg_today'] = Number(data['Chg. Today']);
    //         quote['vol_today'] = Number(data['Vol. Today']);
    //         quote['num_trades'] = Number(data['Num. Trades']);
    //     }
    // })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(e => {
        res.status(500).json({ statusCode: 500, message: e.message })
    })
}
