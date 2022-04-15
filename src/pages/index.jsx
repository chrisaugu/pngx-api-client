import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
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
import {AtSign, ArrowUp, Star } from '@geist-ui/icons'
import _ from 'underscore';
import { format, startOfDay, endOfDay, subDays, formatDistance, formatRelative } from 'date-fns';

import styled from 'styled-components';

import Api from "../lib/api";
// import { stocks } from "../utils/sample-data";
import Header from "../components/Header";
import Layout from "../components/Layout";
// import {ButtonExample, Button as MyButton} from "../components/Button";
import ToastMessage from "../components/Toast";
import StocksList from "../components/StocksList";
import Graph from "../components/Graph/Large";
// import Analytics from "../components/Analytics";

import store from '../redux/configureStore';
import { fetchStocksFromAPI, /*getStocks*/ } from '../redux/stocks/stocks';
import { fetchStocks, getData, setLastUpdated, setDate } from "../redux/actions";
import { getStockList, getFavouritesList, getLastUpdated } from "../redux/selectors";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // max-width: 100vw;
  // min-height: 50vh;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr)
  }
`;

const Home = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();

    const [stocks, setStocks] = useState([]);
    
    // const stocksList = stocks;
    const stocksList = useSelector(getStockList);
    console.log(stocksList)
    const favouritesList = useSelector(getFavouritesList);
    console.log(favouritesList)

    const lastUpdated = useSelector(getLastUpdated);

    const getStocks = async () => {
        const url = 'https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/stocks';
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                dispatch(setDate(responseJson.date));
                dispatch(setLastUpdated(responseJson.last_updated));
                setStocks(responseJson.data);
                dispatch(fetchStocks(responseJson.data));

                favouritesList.find((m) => {
                    console.log(m._id == stock._id)
                });

                // const unsubscribe = store.subscribe(() =>
                //     console.log('State after dispatch: ', store.getState())
                // );
                // unsubscribe();
            })
            .catch(error => console.error(error));
    //     try {
    //         const data = await Api.getMovies();
    //         dispatch(fetchStocks(data));
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    };

    useEffect(() => {
        if (stocksList && stocksList.length === 0) {
            // dispatch(fetchStocksFromAPI());
            // dispatch(getStocks());
            getStocks();
        }
    // }, [search]);
    // }, []);
    });

    let isShown = false;

    let loadable = {
        state: 'hasValue' // 'loading'
    }


    // const sortData = (data) => {
    //   setStocks(_.sortBy(stocks, 'name'));
    // }

    // // Format Dates
    // const start = format(subDays(startDate, 0), "yyyy-MM-dd");
    // const end = format(endDate, "yyyy-MM-dd");

    // const response = await fetch(
    //   `${HOST}/neo/rest/v1/feed?start_date=${start}&end_date=${end}&detailed=false&api_key=${API_KEY}`
    // );

    // return response.json();

    // useEffect(() => {
    //     const movieFavourites = JSON.parse(
    //         localStorage.getItem('pngx-favourites')
    //     );

    //     setFavourites(movieFavourites);
    // }, []);


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

                {/*<Analytics />*/}

                <Spacer h={3}/>

                {/*<ButtonExample/>*/}

                {/*<MyButton>Hello</MyButton>*/}

                {/*<ToastMessage/>*/}

                {/*<Text>*/}
                {/*    S*/}
                {/*    <Toggle onChange={showGraph} />*/}
                {/*</Text>*/}

                {/*{
                  quotes ? <Loading /> :
                }*/}

                {/*<div className="favourites-list">
                    <Text h2 className="title">Favourites</Text>
                    <List>
                        <StocksList stocks={favouritesList}/>
                        { favouritesList.map((e, i) => (
                            <li key={i}>{e._id}</li>
                        ))}
                    </List>
                </div>*/}

                <div className="stocks-list">
                    {loadable.state === "hasValue" && (
                        <>
                            <StocksList stocks={stocksList}/>
                            <Spacer h={1} />
                        </>
                    )}

                    {/*{movieList.length ? movieList : 'Nothing found.'}*/}

                    {loadable.state === "loading" && <Loading>Loading</Loading>}

                    {/*<Pagination count={stocks.length} initialPage={0} limit={11} onChange={fetchData} />*/}
                </div>

                <Text>Last updated {lastUpdated && formatDistance(new Date(lastUpdated), new Date(), { addSuffix: true })}</Text>
                <Text>Last updated on {lastUpdated && formatRelative(new Date(lastUpdated), new Date())}</Text>


            </div>
        </>
    )
}

export default Home;