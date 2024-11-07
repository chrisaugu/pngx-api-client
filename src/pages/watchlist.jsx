import React, {  } from "react"
import { useSelector, useDispatch } from 'react-redux';
import {
    Spacer,
    useTheme,
    Pagination,
    Loading} from '@geist-ui/core';
import _ from 'underscore';
import styled from 'styled-components';

import Layout from "../components/Layout";
import StocksList from "../components/StocksList";

import { getFavouritesList, getLoadableStatus } from "@/stores/selectors";

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
    
    const favouritesList = useSelector(getFavouritesList);
    console.log(favouritesList)

    const loadable = useSelector(getLoadableStatus);

    const fetchData = (e) => {
        console.log(e)
    }

    return (
        <Layout title="Watchlist">
            <div>
                <Spacer h={3}/>

                {/*<div className="favourites-list">
                    <Text h2 className="title">Favourites</Text>
                    <List>
                        <StocksList stocks={favouritesList}/>
                        { favouritesList.map((e, i) => (
                            <li key={i}>{e._id}</li>
                        ))}
                    </List>
                </div>*/}

                <div className="favourites-list">
                    {loadable.state === "hasValue" && (
                        <>
                            <StocksList stocks={favouritesList}/>

                            <Spacer h={1} />

                            <div style={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                justifyContent: 'center'
                            }}>
                                <Pagination count={favouritesList.length} initialPage={0} limit={11} onChange={(e) => fetchData(e)} />
                            </div>
                        </>
                    )}

                    {loadable.state === "loading" && <Loading>Loading</Loading>}
                </div>

            </div>
        </Layout>
    )
}

export default Home;