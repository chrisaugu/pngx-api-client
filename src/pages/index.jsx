import React, { useState } from "react"
import Head from 'next/head'
import NextLink from 'next/link'
import {
    Button,
    Input,
    Spacer,
    Text,
    Link,
    Image,
    Display,
    Grid,
    Tag,
    Select,
    Card,
    Divider,
    Toggle,
    useTheme,
    Code,
    Snippet,
    Avatar,
    ButtonGroup,
    Description,
    Popover,
    Tabs,
    Pagination,
    AutoComplete,
    Loading,
    useToasts
} from '@geist-ui/core';
import {AtSign, ArrowUp} from "@geist-ui/icons";
import Axios from 'axios';
import _ from 'underscore';

import api from "../lib/api";
import Header from "../components/Header";
import Layout from "../components/Layout";
// import {ButtonExample, Button as MyButton} from "../components/Button";
import ToastMessage from "../components/Toast";
import StockList from "../components/StockList";
import Graph from "../components/Graph";

const Home = ({ quotes }) =>  {
    const { palette } = useTheme();
    const [stocks, setStocks] = useState(quotes);
    
    let isShown = false;

    let loadable = {
      state: 'hasValue'//'loading'
    }

    const showGraph = () => {
        return !isShown;
    }

    const StockOptions = () => {
        const options = [
            { label: 'London', value: 'london' },
            { label: 'Sydney', value: 'sydney' },
            { label: 'Shanghai', value: 'shanghai' },
        ]
        return <AutoComplete placeholder="Enter here" options={options} />
    }

    const sortData = (data) => {
      setStocks(_.sortBy(stocks, 'name'));
    }

    const fetchData = async (page) => {
      const res = await fetch(`https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/stocks?skip=${page}`)
      const { data } = await res.json();

      setStocks(data);
    }

    return (
        <>
          <Head>
            <title>PNGX Client</title>
          </Head>

            <div>

              {/*<div className="home">
                <Grid.Container>
                  <Grid xs={24} justify="center" alignItems="center">
                    <Text p size={22} className="title">
                      SECRET
                    </Text>
                  </Grid>
                  <Grid xs={24} justify="center" alignItems="center">
                    <Grid
                      xs={24}
                      md={17}
                      justify="center"
                      alignItems="center"
                      direction="column"
                      className="desc">
                      <Text p size={14}>
                        Secret will protect you when sharing information, you can use it to send
                        text without worrying about hijacked. For more, refer to{' '}
                        <Text span i>
                          <NextLink href="/0x01" passHref>
                            <Link>Introduction</Link>
                          </NextLink>
                        </Text>
                        .
                      </Text>
                    </Grid>
                  </Grid>
                  <IndexLinks />
                </Grid.Container>
              </div>
              <Grid.Container>
                <Grid xs={24} justify="center" alignItems="center">
                  <NextLink href="/go" passHref>
                    <Link>
                      <Button type="secondary-light">Start Now</Button>
                    </Link>
                  </NextLink>
                </Grid>
              </Grid.Container>

              <style jsx>{`
                .home {
                  text-align: center;
                  height: 450px;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  margin-bottom: 40px;
                }
                .home :global(.title) {
                  letter-spacing: 1.5px;
                }
                .home :global(.desc) {
                  max-width: 470px;
                }
              `}</style>*/}
                
                <Spacer h={3}/>

                {/*<ButtonExample/>*/}

                {/*<MyButton>Hello</MyButton>*/}

                <ToastMessage/>

                {/*<Text>*/}
                {/*    S*/}
                {/*    <Toggle onChange={showGraph} />*/}
                {/*</Text>*/}

                {/*{
                    quotes ? <Loading /> :
                }*/}

                <div className="quotes">

                    {loadable.state === "hasValue" && (
                      <>
                        <StockList stocks={stocks}/>
                        <Spacer h={1} />
                      </>
                    )}
                    
                    {loadable.state === "loading" && <Loading>Loading</Loading>}

                    <Pagination count={stocks.length} initialPage={0} limit={11} onChange={fetchData} />
                </div>

            </div>
        </>
    )
}

Home.getInitialProps = async () => {
    // const res = await fetch('http://localhost:4000/api/stocks')
    const res = await fetch('https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/stocks')
    const { data } = await res.json();

    // const {data} = await Axios.get("http://localhost:4000/api/stocks");
    // const {data} = await api.get('/stocks')
    return {
        quotes: data || []
    }
}

export default Home;