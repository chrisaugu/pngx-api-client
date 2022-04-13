import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {Card as GCard, Grid, Text, Spacer, Button, Modal, useModal, useToasts} from '@geist-ui/core';
import {Heart, HeartFill, MoreVertical, Star} from '@geist-ui/icons';
import Trend from 'react-trend';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { connect, useDispatch, useSelector} from "react-redux";

import { getStock } from '../../redux/stocks/stocks';
import store from '../../redux/configureStore';
import { addToFavourites, removeFromFavourites } from "../../redux/actions/index";

import NormalButton from "../Button/Normal";
import FavButton from "../Button/Favorite";

import StockCardStyle from "./StockCard.module.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const GridWall = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Card = styled(GCard)`
  margin: 1rem 1.5rem;
  padding: 1.5rem;
  // max-width: 20rem;
  text-align: left;
  color: inherit;
  background-color: #fafafa;
  text-decoration: none;
  border: 1px solid #efefef;
  border-radius: 5px;
  transition: color 0.15s ease, border-color 0.15s ease,
  background-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #ddd;
    background-color: #f7f7f7;
  }

  // & > h2 {
  //   margin: 0 0 1rem 0;
  //   font-size: 1.5rem;
  // }

  // & > p {
  //   margin: 0;
  //   font-size: 1.25rem;
  //   line-height: 1.5;
  // }

  // div.buttons {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin: 1.5rem auto 0.5rem;
  // }

  // .disabledButton {
  //   width: 150px;
  // }
`;

const StockCard = ({stock}) => {
    const {toast, setToast} = useToasts();
    const router = useRouter();
    const { visible, setVisible, bindings } = useModal();
    const { favourites } = useSelector((state) => state.favourites);
    const stocks = useSelector((state) => state.stocks);
    const dispatch = useDispatch();

    let changeBg = (change) => {
        if (change > 0) {
            return "green";
        } else if (change < 0) {
            return "red";
        }
    }

    let percentChange = (change) => {
        if (change > 0) {
            return `+${change}%`;
        } else {
            return `${change}%`;
        }
    }

    function changeDir(change) {
        if (change > 0) {
            return "↗";
        } else if (change < 0) {
            return "↘";
        } else {
            return "➡";
        }
    }

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

    const saveToLocalStorage = (items) => {
        localStorage.setItem('pngx-favourites', JSON.stringify(items));
    };

    // action creators are now available in the props
    const updateFavourites = stock => {
        console.log(stock)
        dispatch(addToFavourites("stock"));
        setToast({ text: `You added ${stock.code} to your Watchlist`, type: "success" });
    
        // return favourites.find(item => item === stock)
        //   ? removeFromFavourites(stock)
        //   : addToFavourites(stock);

        const newFavouriteList = [...favourites, stock];
        saveToLocalStorage(newFavouriteList);
        return true;
    };

    const removeFavouriteMovie = (stock) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite._id !== stock._id
        );
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    return (
        <>
            <Grid.Container gap={1.5} justify="center">
                <Grid xs={24}>
                    <Card key={stock._id}
                          className={changeBg(stock.chg_today)}
                          style={{cursor: "pointer", width: "100%"}}
                          xonClick={() => router.push('/stock/' + stock.code)}
                    >
                        {/*<Link href={`/stock/${stock.code}`}>*/}
                        <Card.Body>
                            {/*<Wrapper>*/}
                            <Grid.Container>
                                <Grid xs={12} gap={1.5} justify="left" alignItems="center">
                                    {/*<GridWall>*/}
                                    {/*blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}*/}
                                    <Image
                                        src={`/${stock.code.toLowerCase()}.png`}
                                        className={StockCardStyle.stockImage}
                                        width={60}
                                        height={60}
                                        alt=""/>
                                    <Spacer w={1}/>
                                    <div className="vertical">
                                        <Text h2 className={"symbol"}>{stock.code}</Text>
                                        <Text h6 className={"name"}>{getStockName(stock.code)}</Text>
                                    </div>
                                </Grid>
                                {/*</GridWall>*/}

                                {/*<Trend
                                        smooth
                                        autoDraw
                                        autoDrawDuration={3000}
                                        autoDrawEasing="ease-out"
                                        data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
                                        gradient={['orange']}
                                        radius={5.1}
                                        strokeWidth={0.9}
                                        strokeLinecap={'butt'}
                                    />*/}

                                <Grid xs={12} gap={1.5} justify="right" alignItems="center">
                                    {/*<GridWall>*/}
                                    {/*<SmallGraph stocks={stocks}/>*/}
                                    <Text h2 className={"last"}>K{stock.last}</Text>
                                    <div className="vertical" justify="right">
                                        {/*<Text h5 className={"high"}>K{stock.high}</Text>*/}
                                        {/*<Text h5 className={"low"}>K{stock.bid}</Text>*/}
                                        {/*    <Text h3>{stock.vol_today}<AtSign size={45}/></Text>*/}
                                        {/*    <Text h4><span>K{stock.bid}</span></Text>*/}
                                        <Text h3 badge>{changeDir(stock.chg_today)}</Text>
                                        <Text h3 badge>({percentChange(stock.chg_today)})</Text>
                                        {/*<Text h4>Offer: <span>K{stock.offer}</span></Text>*/}
                                        {/*<Text h4>High: <span>K{stock.high}</span></Text>*/}
                                        {/*<Text h4>Low: <span>K{stock.low}</span></Text>*/}
                                        {/*<Text h4>Close: <span>K{stock.close}</span></Text>*/}
                                    </div>

                                    {/*<button*/}
                                    {/*    onClick={() =>*/}
                                    {/*        dispatch(*/}
                                    {/*            favourite.find((m) => m.id == movie.id)*/}
                                    {/*                ? RemoveFromFavouriteAction(movie.id)*/}
                                    {/*                : addFavouriteAction(movie)*/}
                                    {/*        )*/}
                                    {/*    }*/}
                                    {/*    className={`btn btn-` + (favourite.find((m) => m.id == movie.id) ? `danger` : `info`)}*/}
                                    {/*>*/}
                                    {/*    {favourite.find((m) => m.id == movie.id) ? `Remove From Favourite` : `Add To Favourite`}*/}
                                    {/*</button>*/}

                                    {/*{
                                        favourites.find((m) => m._id == stock._id) ?
                                            (<FavButton icon={<HeartFill/>} onClick={ updateFavourites(stock) }/>) :
                                            (<FavButton icon={<Heart/>} onClick={ updateFavourites(stock) }/>)
                                    }*/}

                                    <FavButton icon=<Heart/> scale={0.75} onClick={() => updateFavourites(stock)}/>

                                    <NormalButton auto onClick={() => setVisible(true)} iconRight={<MoreVertical/>} px={0.6} />

                                    <Modal {...bindings}>
                                        <Modal.Title>Modal</Modal.Title>
                                        <Modal.Subtitle>This is a modal</Modal.Subtitle>
                                        <Modal.Content>
                                            <p>Some content contained within the modal.</p>
                                        </Modal.Content>
                                        <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
                                        <Modal.Action>Submit</Modal.Action>
                                    </Modal>
                                    {/*</GridWall>*/}
                                </Grid>
                            </Grid.Container>
                            {/*</Wrapper>*/}
                        </Card.Body>
                        {/*</Link>*/}
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    )

    // return (
    //     <div className={`${StockCardStyle.stockCard} ${stockCard}`}>
    //         <h3 className={StockCardStyle.stockSymbol}>{symbol}</h3>
    //         <h4 className={StockCardStyle.stockName}>{name}</h4>
    //         <p className={StockCardStyle.stockPrice}>
    //             $
    //             {price}
    //         </p>
    //         <NavLink to="/stock-details" exact className={StockCardStyle.stockLink}>
    //             <button type="button" onClick={() => store.dispatch(getStock(stockId))}>
    //                 <box-icon name="right-arrow-circle" color="#f8f8f8" />
    //             </button>
    //         </NavLink>
    //         { title !== '' ? <h6 className={StockCardStyle.sectionTitle}>{title}</h6> : '' }
    //     </div>
    // );
};

StockCard.propTypes = {
    stock: PropTypes.object.isRequired
};

export default StockCard;