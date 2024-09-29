import { useState, useEffect, useReducer } from "react"
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
    useToasts,
    useTheme
} from '@geist-ui/core';
import {AtSign, ArrowUp, Star } from '@geist-ui/icons'
import _ from 'underscore';
import { format, startOfDay, endOfDay, subDays, formatDistance, formatRelative } from 'date-fns';
import useSWR from 'swr';

import Layout from "../components/Layout";
// import {ButtonExample, Button as MyButton} from "../components/Button";
import StocksList from "../components/StocksList";
import FavouritesList from "../components/FavouritesList";
import Graph from "../components/Charts/Large";
import Analytics from "../components/Analytics";

import store from '../store/configureStore';
import { fetchStocksFromAPI, /*getStocks*/ } from '../store/stocks/stocks';
import { fetchStocks, fetchData, getData, setLastUpdated, setDate, setLoadableStatus } from "../store/actions";
import { getStockList, getFavouritesList, getLastUpdated, getLoadableStatus } from "../store/selectors";
import StockCard from "../components/Cards/StockCard";
import SweetCard from "../components/Cards/SweetCard";
import { CardWrapper } from "../components/Cards";
import { StockTickerCard, StockTickerCard2, StockTickerCard3 } from "@/components/Cards/StockTickerCard";
import client from "@/lib/mongodb";
// import LoggedIn from "../components/logged_in";

// import img1 from "./Assets/images/img1.jpg";
// import img2 from "./Assets/images/img2.jpg";

{/*YjFiZDM1NDAtMjgwNi00MTIwLThiMDctM2VkOGQ5NzRkZDVk*/}


export const getServerSideProps = async () => {
  try {
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

const Home = () => {
    const {pallete} = useTheme();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [stocks, setStocks] = useState([]);
    const [data, setData] = useState([]);
    const [isFirstTime, setIsFirstTime] = useState(false);
    
    // const stocksList = stocks;
    const stocksList = useSelector(getStockList);
    console.log(stocksList)
    const favouritesList = useSelector(getFavouritesList);
    console.log(favouritesList);

    const lastUpdated = useSelector(getLastUpdated);

    const loadable = useSelector(getLoadableStatus);

    const fetcher = (url) => fetch(url).then(res => res.json());
    // const { data, error } = useSWR('/api/stocks', fetcher);

    // if (error) return "An error has occurred.";
    // if (!data) return "Loading...";

    // // let stocks = data.data;
    // let stock = data.data[0];

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetcher("https://pngx-api.onrender.com/api/stocks");

                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    // // Format Dates
    // const start = format(subDays(startDate, 0), "yyyy-MM-dd");
    // const end = format(endDate, "yyyy-MM-dd");

    // const response = await fetcher(
    //   `${HOST}/neo/rest/v1/feed?start_date=${start}&end_date=${end}&detailed=false&api_key=${API_KEY}`
    // );

    // useEffect(() => {
    //     const movieFavourites = JSON.parse(
    //         localStorage.getItem('pngx-favourites')
    //     );
    //     setFavourites(movieFavourites);
    // }, []);

    // useEffect(() => {
    //     const getStocks = async (limit=0) => {    
    //         const url = limit 
    //                     ? `https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/stocks?limit=${limit}`  
    //                     : 'https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/stocks';
    //         setIsLoading(true);
    //         setIsError(false);

    //         // const data = await Api.getMovies();

    //         fetcher("/api/stocks")
    //             .then(responseJson => {
    //                 dispatch(setDate(responseJson.date));
    //                 dispatch(setLastUpdated(responseJson.last_updated));
    //                 setStocks(responseJson.data);
    //                 dispatch(fetchStocks(responseJson.data));

    //                 dispatch(setLoadableStatus('hasValue'));

    //                 favouritesList.find((m) => {
    //                     console.log(m._id == stock._id)
    //                 });

    //                 // const unsubscribe = store.subscribe(() =>
    //                 //     console.log('State after dispatch: ', store.getState())
    //                 // );
    //                 // unsubscribe();
    //             })
    //             .catch(error => {
    //                 setIsError(true);
    //                 console.error(error);
    //             });

    //         setIsLoading(false);
    //     };

    //     if (stocksList && stocksList.length === 0) {
    //         // dispatch(fetchStocksFromAPI());
    //         getStocks();
    //     }
    // }, []);
    // // });

    const sortData = (data) => {
      setStocks(_.sortBy(stocks, 'name'));
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
    
    const stockData = {
        stockName: "Apple Inc.",
        tickerSymbol: "AAPL",
        price: 150.25,
        priceChange: 2.75, // positive for gains, negative for losses
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // Example Apple logo
      };
    
    const stock = {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 145.23,
        currency: 'USD',
        change: 1.23,
    };

    return (
        <Layout title={"Home"}>
            {isFirstTime && (<CardWrapper>
                <Text h1 style={{color: 'white'}}>Welcome to <span style={{color: 'aquamarine'}}><b><i>Nuku</i></b>.</span></Text>
            </CardWrapper>)}
            
            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <StockTickerCard
                    stockName={stockData.stockName}
                    tickerSymbol={stockData.tickerSymbol}
                    price={stockData.price}
                    priceChange={stockData.priceChange}
                    logoUrl={stockData.logoUrl}
                />
                
                <StockTickerCard2 stock={stock} />

                <StockTickerCard3
                    stockName="Cisco Systems, Inc."
                    tickerSymbol="CSCO"
                    price={45.80}
                    priceChange={0.54}
                    percentageChange={1.19}
                    graphColor="green"
                />

                <StockTickerCard3
                    stockName="Amazon.com, Inc."
                    tickerSymbol="AMZN"
                    price={3193.00}
                    priceChange={-133.13}
                    percentageChange={-4.00}
                    graphColor="red"
                />
                <StockTickerCard3
                    stockName="Arista Networks"
                    tickerSymbol="ANET"
                    price={308.00}
                    priceChange={0.31}
                    percentageChange={0.10}
                    graphColor="green"
                />
            </div> */}

            {/* <SweetCard/> */}
            
            {/*<Analytics />*/}

            {/*<Text>
            {/*    S*/}
            {/*    <Toggle onChange={showGraph} />*/}
            {/*</Text>*/}

            {/* {favouritesList && favouritesList.length > 0 && (
                <>
                    <FavouritesList list={favouritesList}/>
                    <Spacer h={2} />
                </>
            )} */}

            {/*{isLoading ? (<Loading>Loading</Loading>) : (<div>hello...</div>)}*/}

            {/*{loadable.state === "hasValue" && <TableReport data={feed} />}*/}

            {loadable.state !== "hasValue" && (
                <>
                    <StocksList stocks={data}/>

                    <Spacer h={1} />

                    <div style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        justifyContent: 'center'
                    }}>
                        {/*<Pagination count={stocksList.length} initialPage={0} limit={11} onChange={(e) => console.log(e)} />*/}
                    </div>
                </>
            )}

            {/* {loadable.state !== "loading" && <Loading>Loading</Loading>} */}

            {/* <Spacer h={2} /> */}
            {/* <Text>Last updated {lastUpdated && formatDistance(new Date(lastUpdated), new Date(), { addSuffix: true })}</Text> */}
            {/* <Text>Last updated on {lastUpdated && formatRelative(new Date(lastUpdated), new Date())}</Text> */}

        </Layout>
    )
}


export default Home;