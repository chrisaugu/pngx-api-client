'use client';

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import {
    Spacer,
    Text,
    AutoComplete,
    useTheme,
    Spinner, Loading, Toggle
} from '@geist-ui/core';
import _ from 'underscore';

import Layout from "../components/Layout";
// import {ButtonExample, Button as MyButton} from "../components/Button";
import StocksList from "@components/StocksList";

import { getStockList, getFavouritesList, getLastUpdated, getLoadableStatus } from "@/stores/selectors";
import { CardWrapper } from "@components/Cards";
import api from "@/lib/api";
import {formatDistance, formatRelative} from "date-fns";
import {useGetStocksQuery} from "../services/stock";
import {StockTickerCard, StockTickerCard2, StockTickerCard3} from "../components/Cards/StockTickerCard";
import SweetCard from "../components/Cards/SweetCard";
import Analytics from "../components/Analytics";
// import client from "@/lib/mongodb";

// import img1 from "./Assets/images/img1.jpg";
// import img2 from "./Assets/images/img2.jpg";

// export const getServerSideProps = async () => {
//   try {
//     await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
//     return {
//       props: { isConnected: true },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// };

const Home = () => {
    const {pallete} = useTheme();
    const dispatch = useDispatch();
    // const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // const [stocks, setStocks] = useState([]);
    // const [data, setData] = useState([]);
    const [isFirstTime, setIsFirstTime] = useState(false);

    const stocksList = useSelector(getStockList);
    const favouritesList = useSelector(getFavouritesList);
    const lastUpdated = useSelector(getLastUpdated);
    const loadable = useSelector(getLoadableStatus);

    const {data, isFetching, isLoading, error} = useGetStocksQuery();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsError(false);
    //         setIsLoading(true);
    //
    //         try {
    //             // const result = await fetcher("https://pngx-api.onrender.com/api/stocks");
    //             const result = await api.get("http://localhost:5000/api/stocks");
    //             console.log(result.data)
    //
    //             setData(result.data.data);
    //         } catch (error) {
    //             setIsError(true);
    //         }
    //
    //         setIsLoading(false);
    //     };
    //
    //     fetchData();
    // }, []);

    // Format Dates
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

    //                 // const unsubscribe = stores.subscribe(() =>
    //                 //     console.log('State after dispatch: ', stores.getState())
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

            {/*<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>*/}
            {/*    <StockTickerCard*/}
            {/*        stockName={stockData.stockName}*/}
            {/*        tickerSymbol={stockData.tickerSymbol}*/}
            {/*        price={stockData.price}*/}
            {/*        priceChange={stockData.priceChange}*/}
            {/*        logoUrl={stockData.logoUrl}*/}
            {/*    />*/}
            {/*    */}
            {/*    <StockTickerCard2 stock={stock} />*/}

            {/*    <StockTickerCard3*/}
            {/*        stockName="Cisco Systems, Inc."*/}
            {/*        tickerSymbol="CSCO"*/}
            {/*        price={45.80}*/}
            {/*        priceChange={0.54}*/}
            {/*        percentageChange={1.19}*/}
            {/*        graphColor="green"*/}
            {/*    />*/}

            {/*    <StockTickerCard3*/}
            {/*        stockName="Amazon.com, Inc."*/}
            {/*        tickerSymbol="AMZN"*/}
            {/*        price={3193.00}*/}
            {/*        priceChange={-133.13}*/}
            {/*        percentageChange={-4.00}*/}
            {/*        graphColor="red"*/}
            {/*    />*/}
            {/*    <StockTickerCard3*/}
            {/*        stockName="Arista Networks"*/}
            {/*        tickerSymbol="ANET"*/}
            {/*        price={308.00}*/}
            {/*        priceChange={0.31}*/}
            {/*        percentageChange={0.10}*/}
            {/*        graphColor="green"*/}
            {/*    />*/}
            {/*</div>*/}

             {/*<SweetCard/>*/}

            {/*<Text>*/}
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
            {/* {loadable.state !== "loading" && <Loading>Loading</Loading>} */}

            <StocksList stocks={data?.data}/>

            <Spacer h={1} />

            <div style={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center'
            }}>
                {/*<Pagination count={stocksList.length} initialPage={0} limit={11} onChange={(e) => console.log(e)} />*/}
            </div>

            <Spacer h={2} />
            {/* <Text>Last updated {lastUpdated && formatDistance(new Date(data.last_updated), new Date(), { addSuffix: true })}</Text> */}
            {/* <Text>Last updated on {lastUpdated && formatRelative(new Date(data.last_updated), new Date())}</Text> */}

        </Layout>
    )
}


export default Home;