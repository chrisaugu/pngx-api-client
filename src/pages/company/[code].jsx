import React, { useEffect, useState } from 'react';

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

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Graph from "../../components/Charts/Large";
import Report from "../../components/Tables/Report";
import {useGetCompanyQuery} from "../../services/company";
import {getStockName} from "../../lib/utils";
import {useGetHistoricalsQuery} from "../../services/historical";
import {useParams} from "react-router-dom";
import {historicals, sampleUserData} from "../../lib/sample-data";


// export const getStaticProps = async () => {
//     const items = sampleUserData;
//     return { props: { items } }
// }

export async function getServerSideProps({ params }) {
    const { code } = params;

    if (!code) {
        return {
            notFound: true,
        };
    }
    else {
        return {
            props: {
                code: code,
            }
        }
    }
}

const CompanyDetails = ({code}) =>  {
    const mqUpSM = useMediaQuery("sm", { match: "up" });
    const theme = useTheme();

    const {data: company, isFetching, isLoading} = useGetCompanyQuery(code);
    const {data} = useGetHistoricalsQuery(code)

    return (
        <>
            <Layout title={code ? code : 'stock | Nuku - PNGX-API Client'}>
                <Card>
                    <Grid>
                        <Text h3 style={{ marginBottom: "0" }}>
                            {getStockName(code)}
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
                        {mqUpSM && <Text span>PNGX Company Profile URL:</Text>}
                        <Link href={company?.pngx_profile_url} rel="noopener" target="_blank" block>
                            { company?.pngx_profile_url }
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
                            {/*<Graph*/}
                            {/*    quotes={historicals}*/}
                            {/*    symbol={code}/>*/}
                        </Card>
                    </Tabs.Tab>
                    <Tabs.Tab label={"Historicals"} value={"2"}>
                        { data && (
                            <>
                                <Report data={data.historical}/>

                                <Pagination count={data.historical.length} initialPage={0} limit={11} />
                            </>
                        )}
                    </Tabs.Tab>
                </Tabs>

                <Spacer h={2}/>

                <Collapse
                    shadow
                    title="Question A"
                    subtitle="answer">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
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


            </Layout>
        </>
    )
}

export default CompanyDetails;