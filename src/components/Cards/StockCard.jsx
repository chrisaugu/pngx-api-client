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

import store from '../../store/configureStore';
import { getStock } from '../../store/stocks/stocks';
import { addToFavourites, removeFromFavourites } from "../../store/actions";
import { getStockList, getFavouritesList } from "../../store/selectors";

import NormalButton from "../Buttons/Normal";
import FavButton from "../Buttons/Favorite";
import { getStockName } from '@/lib/utils';


const Card = styled(GCard)`
  // display: flex;
  // flex-direction: row;
  // flex-wrap: nowrap;
  // align-content: center;
  // align-items: center;
  // justify-content: space-between;
  // justify-content: center;
  
  // width: 60vw;
  // height: 30vh;
  
  margin: 1rem 0 !important;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  color: inherit;
  background-color: #fafafa !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgb(235, 238, 241) !important;
  border-radius: 24px !important;
  transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%) !important;
  
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


  
%shadow {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.stocks-list, .favourites-list {
  margin-top: 75px;

  .card {
    position: relative;
    border-radius: 24px;
    // border: 1px solid #eceeee !important;
    background-color: #eceeee;
    background-image: linear-gradient(45deg,#0072ff,#00d2e8 17%,#04fd8f 34%,#70fd6c 51%,#dae11e 68%,#ff9346 85%,#ff62c6);
    background-color: #1f2023!important;

    box-shadow:
                0px 0.3px 1.2px rgba(0, 0, 0, 0.006),
                0px 0.7px 2.7px rgba(0, 0, 0, 0.009),
                0px 1.2px 4.6px rgba(0, 0, 0, 0.011),
                0px 1.8px 6.9px rgba(0, 0, 0, 0.013),
                0px 2.6px 10px rgba(0, 0, 0, 0.015),
                0px 3.7px 14.2px rgba(0, 0, 0, 0.017),
                0px 5.3px 20.1px rgba(0, 0, 0, 0.019),
                0px 7.7px 29.2px rgba(0, 0, 0, 0.021),
                0px 11.8px 45px rgba(0, 0, 0, 0.024),
                0px 21px 80px rgba(0, 0, 0, 0.03);
    box-shadow: none !important;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    margin: 10px 0 !important;
    margin: 4em 0 0 0;
    top: 0;
    width: 330px;
    height: 430px;
    overflow: hidden;
    text-align: center;
    transition: all 0.25s;

    &:nth-child(2) {
      margin: 0 50px;
    }

    &:hover {
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }

    /*
     * Custom translucent tickertape card
     */
    background-color: rgba(236, 238, 238, .85) !important;
    backdrop-filter: saturate(180%) blur(20px);

    a {
      color: #8e8e8e;
      transition: color .15s ease-in-out;

      &:hover {
        color: #fff;
        text-decoration: none;
      }

    }

    .vertical {
      margin: 0 10px;
      align-items: start;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: flex-start;
      
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
      }

      h2.symbol {
        font-size: 65px;
        line-height: 65px;
      }
      h6.name {
        font-size: 15px;
      }
      h5.high, h5.low {
        font-size: 25px;
      }
    }

    h3 {
      font-size: 2em;
    }

    h4 {
      font-size: 3em;
    }
  }

  .card {
    // @include flex(300px);
    margin: 20px;
    border-radius: 24px;
    // border: 2px solid #c3c6ce;
    cursor: pointer;
    position: relative;
    transition: 0.5s ease;
    &:hover {
      @extend %shadow;
      border-color: #008bf8;
      .card--hover {
        opacity: 1;
        a {
          @extend %shadow;
          // @include transform(translate(-50%, 50%));
          opacity: 1;
        }
      }
    }
    &--hover {
      padding: 60px 0;
      text-align: center;
      opacity: 0.6;
      transition: 0.25s ease;
      h3 {
        font-size: 30px;
        font-weight: bold;
        margin: 0;
      }
      p {
        margin: 10px 0 0;
      }
      a {
        // @include transform(translate(-50%, 125%));
        border-radius: 20px;
        background-color: #008bf8;
        color: #fff;
        padding: 8px 16px;
        display: inline-block;
        text-decoration: none;
        position: absolute;
        left: 50%;
        bottom: 0;
        opacity: 0;
        transition: 0.25s ease;
      }
    }
    &.card--dark {
      background-color: #1a1a1a;
      border-color: #1a1a1a;
      .card--hover {
        color: #fff;
      }
      a {
        background-color: #7FEFBD;
        color: #1a1a1a;
      }
    }
  }

  .green {
    background-color: #7fffd4 !important;
    color: #008d8d !important;
    /* color: #f8f8ff; */
  }
  .red {
    background-color: #ff7f7f !important;
    color: #8d0000 !important;
  }
}

`;


const CardWrapper = styled.div`
  // width: 60vw;
  // height: 30vh;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: nowrap;
  // align-content: center;
  // align-items: center;
  // justify-content: space-between;
  // justify-content: center;
`;

const GridWall = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 1;
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

const StockImage = styled.div`
  color: #666666c7;
  .stockImage {
    --img-width: 70px;
    width: var(--img-width) !important;
    height: var(--img-width) !important;
    margin: 0 !important;
  }
`

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
            >
                  {/* xonClick={() => router.push('/stock/' + stock.code)} */}
                {/*<Link href={`/stock/${stock.code}`}>*/}
                <Card.Body>
                    <CardWrapper>
                        <Grid.Container>
                            <Grid xs={12} gap={1.5} justify="left" alignItems="center">
                                {/*<GridWall>*/}
                                {/*blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}*/}
                                <Image
                                    src={`/logos/${stock.code.toLowerCase()}.png`}
                                    width={60}
                                    height={60}
                                    alt=""/>
                                
                                <Spacer w={1}/>
                                
                                <div className="vertical">
                                    <Text h2 className={"symbol"}>{stock.code}</Text>
                                    <Text h6 className={"name"}>
                                      {/* <Link href={`/company/${stock.code}`}> */}
                                      {getStockName(stock.code)}
                                      {/* </Link> */}
                                    </Text>
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
                                    <Text h3 badge="true">({percentChange(stock.chg_today)})</Text>
                                    <Text h3 badge="true">{changeDir(stock.chg_today)}</Text>
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

                                {/* {
                                    favouritesList && favouritesList.find((m) => m._id == stock._id) ?
                                        (<FavButton icon={<HeartFill/>} scale={0.75} onClick={ () => remove(stock._id) }/>) :
                                        (<FavButton icon={<Heart/>} scale={0.75} onClick={ () => add(stock) }/>)
                                } */}

                                {/* <Spacer w={1}/> */}

                                {/* <NormalButton iconRight={<MoreVertical/>} auto onClick={() => setVisible(true)} px={0.6} scale={0.75} />

                                <Modal {...bindings}>
                                    <Modal.Title>Modal</Modal.Title>
                                    <Modal.Subtitle>This is a modal</Modal.Subtitle>
                                    <Modal.Content>
                                        <p>Some content contained within the modal.</p>
                                    </Modal.Content>
                                    <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
                                    <Modal.Action>Submit</Modal.Action>
                                </Modal> */}
                                {/*</GridWall>*/}
                            </Grid>
                        </Grid.Container>
                    </CardWrapper>
                </Card.Body>
                {/*</Link>*/}
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