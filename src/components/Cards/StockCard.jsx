import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {Card as GCard, Grid, Text, Spacer, Button, Modal, useModal, useToasts} from '@geist-ui/core';
import {Heart, HeartFill, MoreVertical, Star} from '@geist-ui/icons';
import Trend from 'react-trend';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { connect, useDispatch, useSelector} from "react-redux";

import store from '../../redux/configureStore';
import { getStock } from '../../redux/stocks/stocks';
import { addToFavourites, removeFromFavourites } from "../../redux/actions";
import { getStockList, getFavouritesList } from "../../redux/selectors";

import NormalButton from "../Buttons/Normal";
import FavButton from "../Buttons/Favorite";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(37, 37, 37, 1);
  }
`;

const GridWall = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Card = styled(GCard)`
  margin: 1rem 0 !important;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  background-color: #fafafa !important;
  backdrop-filter: blur(10px);
  text-decoration: none;
  border: 1px solid rgb(235, 238, 241) !important;
  border-radius: 24px !important;
  transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%) !important;
  cursor: pointer;
  
  
  &:hover,
  &:focus,
  &:active {
    background-color: #f7f7f7;
    transform: scale(1.01);
  }

  & > h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & > p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const Horizontal = styled.div`
    display: inline-flex;
    margin: 0 10px;
`;

const Vertical = styled.div`
    margin: 0 10px;
    align-items: start;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
`;

// .transition {
//     transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
//     transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
//     transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
//     transition-timing-function: cubic-bezier(.25,.46,.45,.94);
//     transition-duration: .33s;
// }


const StockCard = ({stock}) => {
    const router = useRouter();
    const { toast, setToast } = useToasts();
    const dispatch = useDispatch();
    const { visible, setVisible, bindings } = useModal();

    const favouritesList = useSelector(getFavouritesList);
    const stocksList = useSelector(getStockList);

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

    function getCompanyNamefromStockCode(code) {
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
    const add = (stock) => {
        console.log(stock)
        // const newFavouriteList = [...favouritesList, stock];
        // saveToLocalStorage(newFavouriteList);
    
        dispatch(addToFavourites(stock));
        setToast({ text: `You added ${stock.code} to your Watchlist`, type: "success" });
    
        // return favourites.find(item => item === stock)
        //   ? removeFromFavourites(stock)
        //   : addToFavourites(stock);

        return true;
    };

    const remove = (stockId) => {
        const newFavouriteList = favouritesList.filter((favourite) => favourite._id !== stockId);
        saveToLocalStorage(newFavouriteList);
        dispatch(removeFromFavourites(stockId));
        setToast({ text: `You removed ${stock.code} from your Watchlist`, type: "success" });
    };

    return (
        <>
            <Card key={stock._id}
                  type={"dark"}
                  hoverable
                  className={`stock-card ${changeBg(stock.chg_today)}`}
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
                                width={60}
                                height={60}
                                alt=""/>
                            
                            <Spacer w={1}/>
                            
                            <div className="vertical">
                                <Text h2 className={"symbol"}>{stock.code}</Text>
                                <Text h6 className={"name"}><Link href={`/company/${stock.code}`}>{getCompanyNamefromStockCode(stock.code)}</Link></Text>
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
                            <Horizontal>
                                {/*<Text h5 className={"high"}>K{stock.high}</Text>*/}
                                {/*<Text h5 className={"low"}>K{stock.bid}</Text>*/}
                                {/*    <Text h3>{stock.vol_today}<AtSign size={45}/></Text>*/}
                                {/*    <Text h4><span>K{stock.bid}</span></Text>*/}
                                <Text h3 badge>({percentChange(stock.chg_today)})</Text>
                                <Text h3 badge>{changeDir(stock.chg_today)}</Text>
                                {/*<Text h4>Offer: <span>K{stock.offer}</span></Text>*/}
                                {/*<Text h4>High: <span>K{stock.high}</span></Text>*/}
                                {/*<Text h4>Low: <span>K{stock.low}</span></Text>*/}
                                {/*<Text h4>Close: <span>K{stock.open}</span></Text>*/}
                                {/*<Text h4>Close: <span>K{stock.close}</span></Text>*/}
                            </Horizontal>

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

                            {
                                favouritesList && favouritesList.find((m) => m._id == stock._id) ?
                                    (<FavButton icon={<HeartFill/>} scale={0.75} onClick={ () => remove(stock._id) }/>) :
                                    (<FavButton icon={<Heart/>} scale={0.75} onClick={ () => add(stock) }/>)
                            }

                            <Spacer w={1}/>

                            <NormalButton iconRight={<MoreVertical/>} auto onClick={() => setVisible(true)} px={0.6} scale={0.75} />

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
                <style jsx>{`
                    .stockImage {
                      --img-width: 70px;
                      width: var(--img-width) !important;
                      height: var(--img-width) !important;
                      margin: 0 !important;
                    }
                `}</style>
            </Card>
            {/*<div className={`${StockCardStyle.stockCard} ${stockCard}`}>
                <h3 className={StockCardStyle.stockSymbol}>{symbol}</h3>
                <h4 className={StockCardStyle.stockName}>{name}</h4>
                <p className={StockCardStyle.stockPrice}>
                    ${price}
                </p>
                <NavLink to="/stock-details" exact className={StockCardStyle.stockLink}>
                    <button type="button" onClick={() => store.dispatch(getStock(stockId))}>
                        <box-icon name="right-arrow-circle" color="#f8f8f8" />
                    </button>
                </NavLink>
                { title !== '' ? <h6 className={StockCardStyle.sectionTitle}>{title}</h6> : '' }
            </div>*/}
        </>
    );
};

StockCard.propTypes = {
    stock: PropTypes.object.isRequired
};

export default StockCard;