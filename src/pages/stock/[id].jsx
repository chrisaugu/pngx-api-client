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
// import Graph from "../../components/graph";

// import api from "../../lib/api";
import Layout from "../../components/Layout";
import {sampleUserData} from "../../utils/sample-data";

const Details = ({ /*onThemeChange,*/ quotes=[], symbol=""/*, item, errors */}) =>  {
    const theme = useTheme()

    const router = useRouter()
    const { id } = router.query;

    const changeHandler = val => {
        onThemeChange && onThemeChange(val)
    }

    const switchThemes = () => {
        onThemeChange && onThemeChange(last => (last === 'dark' ? 'light' : 'dark'))
    }

    const MyTable = () => {
        // <li key={user.id}>
        //     <Link href="/user/[id]" as={`/user/${user.id}`}>
        //         <a>{`User ${user.id}`}</a>
        //     </Link>
        // </li>
        // let _quote = [];
        // quotes.map((quote) => {
        //     _quote = {
        //         date: new Date(quote.date).toDateString(),
        //         bid: quote.bid,
        //         offer: quote.offer,
        //         last: quote.last,
        //         close: quote.close,
        //         high: quote.high,
        //         low: quote.low,
        //         open: quote.open,
        //         chg_today: quote.chg_today,
        //         vol_today: quote.vol_today,
        //         num_trades: quote.num_trades
        //     }
        // });

        let _quote = [
            {
                date: new Date("2021-12-17T00:00:00.000Z").toDateString(),
                bid: 0,
                offer: 12.3,
                last: 12.25,
                close: 12.25,
                high: 13.5,
                low: 12,
                open: 12.25,
                chg_today: 0,
                vol_today: 0,
                num_trades: 0
            },
        ]

        const [symbol, setSymbol] = useState();
        const [quotes, setQuotes] = useState();

        useEffect(() => {
            let componentMounted = true
            if (id != null) {
                fetch(`http://localhost:5000/api/historicals/${id}`)
                .then(stock => {
                    if(componentMounted)
                    {
                        setQuotes(stock.historical)
                        setSymbol(stock.symbol)
                    }
                })
            }
            return () => { componentMounted = false }
        }, [id])

        console.log(quotes)

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
                            {/*<Graph
                                quotes={quotes}
                                symbol={symbol}/>*/}
                        </Card>
                    </Tabs.Tab>
                    <Tabs.Tab label={"Historicals"} value={"2"}>

                        <MyTable/>

                        <Pagination count={quotes.length} initialPage={0} limit={11} />

                    </Tabs.Tab>
                </Tabs>
            </Layout>
        </>
    )
}

export default Details;

// export async function getStaticPaths() {
//     // const { data } = await Axios.get("https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api");
//     // const data = await api('/');

//     // const res = await fetch('http://localhost:5000/api/stocks');
//     // const { data } = await res.json();
    
//     // Get the paths we want to pre-render based on users
//     const paths = sampleUserData.map((user) => ({
//         params: { id: user.id.toString() },
//     }))

//     console.log(paths)

//     // console.log(data)

//     // const posts = data.slice(0, 10);
//     // const paths = data.map((post) => ({ 
//     //     params: { id: post.code } 
//     // }));
//     // const paths = {
//     //     params: { id: 'BSP' },
//     //     params: { id: 'COY' },
//     //     params: { id: 'STO' },
//     // }
    
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: true }
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps({ params }) {
//     console.log("params: "+params)

//     // Call an external API endpoint to get posts
//     // const res = await api(`/historicals/${params.id}`)
//     // const { data } = await Axios.get(`https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/historicals/${params.id}`);
//     const res = await fetch('http://localhost:5000/api/historicals/BSP')
//     // const res = await api.get('/historicals/BSP')
//     // const res = await fetch('http://pngx-api.cleverapps.io/stocks')
//     // const res = await fetch('https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/historicals/BSP')
//     // const res = await fetch(`http://localhost:5000/api/historicals/${params.id}`);
//     const json = await res.json();

//   return {
//     props: {
//         symbol: json.symbol,
//         quotes: json.historical
//     },
//   }
// }