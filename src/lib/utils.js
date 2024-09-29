/**
 * Parses CSV format to JSON format for easy manipulation of data
 */
export function parse_csv_to_json(body) {
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

export function getStocksSymbols() {
    return [  
        "BSP",
        "CCP",
        "CGA",
        "COY",
        "CPL",
        "KAM",
        "KSL",
        "NCM",
        "NGP",
        "NIU",
        "SST",
        "STO"
    ]
}

export function getStockName(code) {
    let names = {
        "BSP": "BSP Financial Group Limited",
        "CCP": "Credit Corporation (PNG) Ltd",
        "CGA": "PNG Air Limited",
        "COY": "Coppermoly Limited",
        "CPL": "CPL Group",
        "KAM": "Kina Asset Management Limited",
        "KSL": "Kina Securities Limited",
        "NCM": "Newcrest Mining Limited",
        "NGP": "NGIP Agmark Limited",
        "NIU": "Niuminco Group Limited",
        "SST": "Steamships Trading Company Limited",
        "STO": "Santos Limited"
    }
    
    return names[code];
}

export function prepareStockInfo(data) {
    let quote = {};

    quote['date'] = data['Date'];
    quote['code'] = data['Short Name'];
    quote['short_name'] = data['Short Name'];
    quote['bid'] = Number(data['Bid']);
    quote['offer'] = Number(data['Offer']);
    quote['last'] = Number(data['Last']);
    quote['close'] = Number(data['Close']);
    quote['high'] = Number(data['High']);
    quote['low'] = Number(data['Low']);
    quote['open'] = Number(data['Open']);
    quote['chg_today'] = Number(data['Chg. Today']);
    quote['vol_today'] = Number(data['Vol. Today']);
    quote['num_trades'] = Number(data['Num. Trades']);

    return quote;
}