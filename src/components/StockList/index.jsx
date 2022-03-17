import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from 'underscore';
import {Select, Text, Pagination, Grid, ButtonGroup, Button} from "@geist-ui/core";
import { AlignJustify, Grid as GridIcon } from '@geist-ui/icons'

import NormalButton from "../Button/Normal";
import StockCard from "../StockCard";

const Wrapper = styled.div``

const Options = styled.div`
    // display: flex;
    // flex-wrap: nowrap;
    // flex-direction: row;
    // justify-content: space-between;
    // align-content: stretch;
    padding: 4px 13px;
`

const StockList = ({stocks}) => {
    const sortOptions = {

    }

    const sortData = (data) => {
      setStocks(_.sortBy(stocks, 'name'));
    }

    
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


    return (
        <Wrapper>
            <Options>
                {/*<Text span>Stocks</Text>
                <Select scale={0.5} value={sortOptions}>
                    <Select.Option label>Symbol</Select.Option>
                    <Select.Option value="bsp">BSP</Select.Option>
                </Select>*/}
                <Grid.Container>
                  <Grid xs={12} justify="left" alignItems="center">
                    <Text h4 size={22} className="title">
                        Stocks
                    </Text>
                  </Grid>
                  <Grid xs={12} justify="right" alignItems="center">
                    <ButtonGroup>
                        <NormalButton icon={<GridIcon/>}/>
                        <NormalButton icon={<AlignJustify/>}/>
                    </ButtonGroup>
                  </Grid>
                </Grid.Container>
            </Options>

            { stocks.map((quote, i) => {
                return (
                    // {{loadableFeed.state === "hasValue" && <TableReport data={feed} />}}
                    <StockCard key={i} quote={quote}/>
                )
            })}

            {/*<Pagination count={stocks.length} initialPage={0} limit={11} onChange="" />*/}
        </Wrapper>
    )
}

StockList.propTypes = {
    quotes: PropTypes.array
}

export default StockList;
