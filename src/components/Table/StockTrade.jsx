import React from 'react';
import { Table } from '@geist-ui/core';

const StockTrade = ({data}) => {
    let _quote = [];
    data.map((quote) => {
        _quote.push({
            date: new Date(quote.date).toDateString(),
            bid: quote.bid,
            offer: quote.offer,
            last: quote.last,
            close: quote.close,
            high: quote.high,
            low: quote.low,
            open: quote.open,
            chg_today: quote.chg_today,
            vol_today: quote.vol_today,
            num_trades: quote.num_trades
        });
    });
    _quote.reverse();

    const renderRepost = () => {
        return (
            <Table data={_quote} emptyText="No stocks info">
                <Table.Column prop="date" label="date" />
                <Table.Column prop="bid" label="bid" />
                <Table.Column prop="offer" label="offer" />
                <Table.Column prop="open" label="open" />
                <Table.Column prop="close" label="close" />
                <Table.Column prop="last" label="last" />
                <Table.Column prop="high" label="high" />
                <Table.Column prop="low" label="low" />
                <Table.Column prop="chg_today" label="% Change" />
                <Table.Column prop="vol_today" label="Volume" />
                <Table.Column prop="num_trades" label="# Trades" />
            </Table>
        )
    }

    return (<renderReport/>)
}

export default StockTrade;