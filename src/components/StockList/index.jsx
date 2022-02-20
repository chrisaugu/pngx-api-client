import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StockCard from "../StockCard";
import {Select, Text, Pagination} from "@geist-ui/react";

const Wrapper = styled.div``

const Options = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: stretch;
    padding: 4px 13px;
`

const StockList = ({stocks}) => {
    const sortOptions = {

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
                <Text span>Stocks</Text>
                <Select scale={0.5} value={sortOptions}>
                    <Select.Option label>Symbol</Select.Option>
                    <Select.Option value="bsp">BSP</Select.Option>
                </Select>
            </Options>

            { stocks.map((quote, i) => {
                return (<StockCard key={i} quote={quote}/>)
            })}

            <Pagination count={stocks.length} initialPage={0} limit={11} />
        </Wrapper>
    )
}

StockList.propTypes = {
    quotes: PropTypes.array
}

export default StockList;
