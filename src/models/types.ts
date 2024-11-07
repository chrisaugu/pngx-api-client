
export type Stock = {
    date: Date;
    code: string;
    short_name: string;
    bid: number;
    offer: number;
    last: number;
    close: number;
    high: number;
    low: number;
    open: number;
    chg_today: number;
    vol_today: number;
    num_trades: number;
}

export type Company = {
    name: string;
    ticker: string;
    description: string;
    industry: string;
    sector: string;
    key_people: string[];
    date_listed: Date;
    established_date: Date;
    outstanding_shares: number;
    pngx_profile_url: string;
}