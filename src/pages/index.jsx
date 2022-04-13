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
import Axios from 'axios';
import _ from 'underscore';
import { format, startOfDay, endOfDay, subDays } from "date-fns";

import api from "../lib/api";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Layout from "../components/Layout";
// import {ButtonExample, Button as MyButton} from "../components/Button";
import ToastMessage from "../components/Toast";
import StocksList from "../components/StocksList";
import Graph from "../components/Graph/Large";

import { fetchStocksFromAPI, /*getStocks*/ } from '../redux/stocks/stocks';
import store from '../redux/configureStore';

import { stocks } from "../utils/sample-data";
import { fetchStocks, getData } from "../redux/actions/index";

const Home = () => {
    // const [stocks, setStocks] = useState('');
    const [search, setSearch] = useState('');
    const { palette } = useTheme();

    const stocksList = stocks.data;
    // const stocksList = useSelector((state) => state.stocks);
    // const { stocks } = useSelector((state) => state.stocks);
    const dispatch = useDispatch();

    const favouritesList = useSelector((state) => state.favourites.favourites);

    // const getMovieRequest = async (searchValue) => {
    //     const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    //
    //     const response = await fetch(url);
    //     const responseJson = await response.json();
    //
    //     if (responseJson.Search) {
    //         setStocks(responseJson.data);
    //     }
    // };

    // useEffect(() => {
    //     getMovieRequest(search);
    // }, [search]);

    const fetchMovies = async () => {
        try {
            const data = await MoviesApi.getMovies();
            dispatch(fetchStocks(data));
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        // store.dispatch(getStocks());

        if (stocksList && stocksList.length === 0) {
            dispatch(fetchStocksFromAPI());
        }

        console.log("100: " + stocksList)
    }, []);

    let isShown = false;

    let loadable = {
        state: 'hasValue' // 'loading'
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

                <Counter/>

                {/*<Text>*/}
                {/*    S*/}
                {/*    <Toggle onChange={showGraph} />*/}
                {/*</Text>*/}

                {/*{
                  quotes ? <Loading /> :
                }*/}

                <div className="favourites">
                    <ul>
                        {/*<StocksList data={favouritesList}/>*/}
                        { favouritesList.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                </div>

                <div className="quotes">

                    {loadable.state === "hasValue" && (
                        <>
                            <StocksList data={stocksList}/>
                            <Spacer h={1} />
                        </>
                    )}

                    {/*{movieList.length ? movieList : 'Nothing found.'}*/}

                    {loadable.state === "loading" && <Loading>Loading</Loading>}

                    {/*<Pagination count={stocks.length} initialPage={0} limit={11} onChange={fetchData} />*/}
                </div>

            </div>
        </>
    )
}

// Home.getInitialProps = async () => {
//     // const res = await fetch('http://localhost:4000/api/stocks')
//     const res = await fetch('https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/stocks')
//     const { data } = await res.json();

//     // const {data} = await Axios.get("http://localhost:4000/api/stocks");
//     // const {data} = await api.get('/stocks')
//     return {
//         quotes: data || []
//     }
// }

export default Home;