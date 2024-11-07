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
            // then stores it on variable d
            // create array by pushing the stored data to the variable i
            for(var d = {}, u = 0; u < a.length; u++) d[a[u]] = l[u]; i.push(d)
        }
    }
    // i[i.length -1]
    return i;
}

let SYMBOLS = {
    "BSP": "BSP Financial Group Limited",
    "CCP": "Credit Corporation (PNG) Ltd",
    "CGA": "PNG Air Limited",
    "COY": "Coppermoly Limited",
    "CPL": "CPL Group",
    "KAM": "Kina Asset Management Limited",
    "KSL": "Kina Securities Limited",
    "NEM": "Newmont Mining Limited",
    "NCM": "Newcrest Mining Limited",
    "NGP": "NGIP Agmark Limited",
    "NIU": "Niuminco Group Limited",
    "SST": "Steamships Trading Company Limited",
    "STO": "Santos Limited"
}

export function getStockName(code) {
    return SYMBOLS[code];
}

export function getStocksSymbols() {
    return Object.keys(SYMBOLS)
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

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};