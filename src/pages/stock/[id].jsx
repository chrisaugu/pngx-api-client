import React, { useEffect, useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head'

import {
    Page,
    Text,
    Grid,
    Card,
    Description,
    Tabs,
    Table,
    Link,
    Divider,
    useTheme,
    Pagination,
    Breadcrumbs,
    Collapse,
    Spacer,
    useMediaQuery
} from "@geist-ui/core";

import Axios from 'axios';

import Header from "../../components/Header";
import Graph from "../../components/Graph/Large";

// import api from "../../lib/api";
import Report from "../../components/Table/Report";
import { BSP as historical } from "../../utils/sample-data";

const Details = ({quotes, symbol}) =>  {
    const mqUpSM = useMediaQuery("sm", { match: "up" });
    const theme = useTheme();

    function getStockName(code) {
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

    return (
        <>
            <Head>
                <title>{symbol ? symbol : 'stock'} | PNGX Client</title>
            </Head>

            <div>

                <Card>
                    <Grid>
                        <Text h3 style={{ marginBottom: "0" }}>
                            {getStockName(symbol)}
                        </Text>
                        {/*{data.is_potentially_hazardous_asteroid && (
                        <Dot type="warning">Potentially Hazardous</Dot>
                      )}*/}
                    </Grid>

                    <Spacer h={1} />

                    <Grid.Container gap={mqUpSM ? 0 : 2}>
                        <Grid xs={24} sm={8} md={6}>
                            <Description
                                title={"Absolute Magnitude (H)"}
                                content={"data.absolute_magnitude_h"}
                            />
                        </Grid>

                        <Grid xs={24} sm={8} md={6}>
                            {/*<Description
                          title={"Estimated Diameter (Min)"}
                          content={`${formatNumber(
                            estimatedDiameter.estimated_diameter_min
                          )} ${preferences.estimated_diameter.unit}`}
                        />*/}
                        </Grid>

                        <Grid xs={24} sm={8} md={6}>
                            {/*<Description
                          title={"Estimated Diameter (Max)"}
                          content={`${formatNumber(
                            estimatedDiameter.estimated_diameter_max
                          )} ${preferences.estimated_diameter.unit}`}
                        />*/}
                        </Grid>
                    </Grid.Container>

                    <Card.Footer>
                        {mqUpSM && <Text span>NASA JPL URL:</Text>}
                        <Link href={'data.nasa_jpl_url'} rel="noopener" target="_blank" block>
                            {"data.nasa_jpl_url"}
                        </Link>
                    </Card.Footer>
                </Card>

                <Spacer h={5} />

                <Grid.Container gap={2} justify="center">
                    <Grid xs><Card shadow width="100%" height="50px" /></Grid>
                    <Grid xs={12}><Card shadow width="100%" height="50px" /></Grid>
                </Grid.Container>

                <Spacer h={3} />

                {/* Feed */}
                {/*{loadableFeed.state === "hasValue" && <TableReport data={feed} />}*/}

                {/* Loading */}
                {/*{(loadableFeed.state === "loading" ||
                    loadableAPOD.state === "loading") && <Loading>Loading</Loading>}*/}


                <Tabs initialValue="1">
                    <Tabs.Tab label={"Summary"} value={"1"}>
                        <Card>
                            <Graph
                                quotes={quotes}
                                symbol={symbol}/>
                        </Card>
                    </Tabs.Tab>
                    <Tabs.Tab label={"Historicals"} value={"2"}>

                        <Report data={quotes} />

                        <Pagination count={quotes.length} initialPage={0} limit={11} />

                    </Tabs.Tab>
                </Tabs>

                <Spacer h={2}/>

                <Collapse
                    shadow
                    title="Question A"
                    subtitle="answer">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </Collapse>

                <Spacer h={2}/>

                <Collapse
                    shadow
                    title="Question B"
                    subtitle="answer">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </Collapse>


            </div>
        </>
    )
}

export default Details;

export async function getServerSideProps({ params }) {
    // const res = await fetch('http://pngx-api.cleverapps.io/stocks')
    // const { data } = await Axios.get(`https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/historicals/${params.id}`);
    // const { historical, symbol } = await fetch(`https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/historicals/${params.id}?limit=12`).then(res => res.json());
    // const { historical, symbol } = await fetch(`http://localhost:5000/api/historicals/${params.id}?limit=12`).then(res => res.json());

    return {
        props: {
            quotes: historical,
            // symbol: symbol
            symbol: "BSP"
        }
    }
}