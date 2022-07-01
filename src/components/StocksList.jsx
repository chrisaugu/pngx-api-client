import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";
import _ from 'underscore';
import {Select, Text, Pagination, Grid, ButtonGroup, Button} from "@geist-ui/core";
import { AlignJustify, Grid as GridIcon } from '@geist-ui/icons';

import NormalButton from "./Buttons/Normal";
import StockCard from "./Cards/StockCard";

const Wrapper = styled.div``;

const Options = styled.div`
    // display: flex;
    // flex-wrap: nowrap;
    // flex-direction: row;
    // justify-content: space-between;
    // align-content: stretch;
    padding: 4px 13px;
`;

const StocksList = ({stocks}) => {
    const [sortType, setSortType] = useState('albums');

    const sortOptions = {};

    // const sortData = (data) => {
    //   setStocks(_.sortBy(stocks, 'name'));
    // }

    // useEffect(() => {
    //     setStocks(data);
    // }, []);

    // useEffect(() => {
    //     const sortArray = type => {
    //       const types = {
    //         country: 'country',
    //         collection: 'collection',
    //         releasedOn: 'releasedOn',
    //       };
    //       const sortProperty = types[type];
    //       const sorted = [...movies].sort((a, b) => b[sortProperty] - a[sortProperty]);
    //       setStocks(sorted);
    //     };

    //     sortArray(sortType);
    // }, [sortType]);

  // let highs = _.pluck(quotes, 'high')
  // let lows = _.pluck(quotes, 'low')
  // let opens = _.pluck(quotes, 'open')
  // let closes = _.pluck(quotes, 'close')
  // let bids = _.pluck(quotes, 'bid')
  // let dates = _.pluck(quotes, 'date')
  // let vols = _.pluck(quotes, 'vol_today')
  // // let days = _.map(dates, function(date){ return labels[new Date(date).getDay()] })
  // let labels = quotes.map(function (c) {
  //   return moment(c.date).format("DD MMM");
  // })

    // const allStocks = useSelector((state) => state.stocks);
    //   let { stocks } = allStocks;

    //   const [exchangeSelected, setExchangeSelected] = useState('none');

    //   const filterByExchange = (event) => {
    //     setExchangeSelected(event.target.value);
    //     stocks = stocks.filter((data) => data.exchangeShortName === exchangeSelected);
    //   };

    //   const getAllAgain = () => {
    //     setExchangeSelected('none');
    //     stocks = allStocks.stocks;
    //   };

    //   let status = true;
    //   let ligth = 0;
    //   let dark = 0;
    //   let bgValue = '';

    //   const defBgControlValue = () => {
    //     if (status) {
    //       ligth += 1;
    //       bgValue = 'bgLigth';
    //       if (ligth === 2) {
    //         status = false;
    //         ligth = 0;
    //       }
    //     } else {
    //       dark += 1;
    //       bgValue = 'bgDark';
    //       if (dark === 2) {
    //         status = true;
    //         dark = 0;
    //       }
    //     }
    //   };

    return (
        <>
            <div className="stocks-list">
                <Wrapper>
                    <Options>
                        {/*<Text span>Stocks</Text>
                        <Select scale={0.5} value={sortOptions}>
                            <Select.Option label>Symbol</Select.Option>
                            <Select.Option value="bsp">BSP</Select.Option>
                        </Select>*/}
                        <Grid.Container>
                          <Grid xs={12} justify="left" alignItems="center">
                            <Text h2 size={22} className="title">
                                Stocks
                            </Text>
                          </Grid>
                          <Grid xs={12} justify="right" alignItems="center">
                            {/*<ButtonGroup>
                                <NormalButton icon={<GridIcon/>}/>
                                <NormalButton icon={<AlignJustify/>}/>
                            </ButtonGroup>*/}
                          </Grid>
                        </Grid.Container>
                    </Options>

                    <div className="stock-card-container">
                        { stocks.map((quote, i) => {
                            return (
                                <StockCard key={i} stock={quote}/>
                            )
                        })}
                    </div>
                </Wrapper>
            </div>
        </>
    )

  // return (
  //   <div
  //     role="button"
  //     tabIndex={0}
  //     key={uuidv4()}
  //   >
  //     <div className={StocksListStyle.stockFiltersContent}>
  //       <button type="button" onClick={getAllAgain}>CHECK ALL</button>
  //       <select name="exchange" onChange={filterByExchange}>
  //         <option value="none">{exchangeSelected !== 'none' ? exchangeSelected : '-----' }</option>
  //         <option value="NASDAQ">NASDAQ</option>
  //         <option value="NYSE">NYSE</option>
  //         <option value="AMEX">AMEX</option>
  //       </select>
  //     </div>
  //     <div className={StocksListStyle.stocksListContent}>
  //       {
  //         data.filter((stocks) => (exchangeSelected !== 'none' ? stocks.exchangeShortName === exchangeSelected : stocks)).map((stock, index) => (
  //           <StockCard
  //             key={uuidv4()}
  //             stockId={stock.stockId}
  //             symbol={stock.symbol}
  //             name={stock.name}
  //             price={stock.price}
  //             stockCard={defBgControlValue() ? bgValue : bgValue}
  //             title={index === 0 ? 'ALL STOCKS' : ''}
  //           />
  //         ))
  //       }
  //     </div>
  //   </div>
  // );
};

StocksList.propTypes = {
    stocks: PropTypes.array
}

export default StocksList;