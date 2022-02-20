import React, { useEffect, useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
    Page,
    Text,
    Grid,
    Card,
    Tabs,
    Table,
    Divider,
    useTheme,
    Pagination,
    Breadcrumbs
} from "@geist-ui/react";

import Axios from 'axios';

import Header from "../../components/Header";
import Graph from "../../components/graph";

// import api from "../../lib/api";
import Layout from "../../components/Layout";
import {sampleUserData} from "../../utils/sample-data";

const Details = ({ /*onThemeChange,*/ quotes, symbol/*, item, errors */}) =>  {
    const theme = useTheme();

    const changeHandler = val => {
        onThemeChange && onThemeChange(val)
    }

    const switchThemes = () => {
        onThemeChange && onThemeChange(last => (last === 'dark' ? 'light' : 'dark'))
    }

    const MyTable = ({stocks}) => {
        // <li key={user.id}>
        //     <Link href="/user/[id]" as={`/user/${user.id}`}>
        //         <a>{`User ${user.id}`}</a>
        //     </Link>
        // </li>
        let _quote = [];
        stocks.map((quote) => {
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

        return (
            <Table data={_quote}>
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

    // if (errors) {
    //     return (
    //         <Layout title="Error | Next.js + TypeScript Example">
    //             <p>
    //                 <span style={{ color: 'red' }}>Error:</span> {errors}
    //             </p>
    //         </Layout>
    //     )
    // }

    return (
        <>
            <Layout title={symbol ? symbol : 'stock'}>

                <Breadcrumbs>
                    <NextLink href="/">
                        <Breadcrumbs.Item nextLink>Home</Breadcrumbs.Item>
                    </NextLink>
                    <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
                </Breadcrumbs>

                <Grid.Container gap={2} justify="center">
                    <Grid xs><Card shadow width="100%" height="50px" /></Grid>
                    <Grid xs={12}><Card shadow width="100%" height="50px" /></Grid>
                </Grid.Container>

                <Tabs initialValue="1">
                    <Tabs.Tab label={"Summary"} value={"1"}>
                        <Card>
                            <Graph
                                quotes={quotes}
                                symbol={symbol}/>
                        </Card>
                    </Tabs.Tab>
                    <Tabs.Tab label={"Historicals"} value={"2"}>

                        <MyTable stocks={quotes} />

                        <Pagination count={quotes.length} initialPage={0} limit={11} />

                    </Tabs.Tab>
                </Tabs>
            </Layout>
        </>
    )
}

export default Details;

export async function getServerSideProps({ params }) {
    // const res = await fetch('http://pngx-api.cleverapps.io/stocks')
    // const { data } = await Axios.get(`https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/historicals/${params.id}`);
    const { historical, symbol } = await fetch(`http://localhost:5000/api/historicals/${params.id}?limit=12`).then(res => res.json());

    return {
        props: {
            quotes: historical,
            symbol: symbol
        }
    }
}