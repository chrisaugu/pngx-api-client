import styled from 'styled-components';
import {Text, Grid, ButtonGroup, Select} from '@geist-ui/core';
import {GridIcon, AlignJustify} from '@geist-ui/icons';
import NormalButton from './Buttons/Normal';
import StockCard from "./Cards/StockCard";

const List = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // max-width: 100vw;
  // min-height: 50vh;
  // @media (min-width: 768px) {
  //   grid-template-columns: repeat(3, 1fr)
  // }
`;

const Wrapper = styled.div``;

const Options = styled.div`
    // display: flex;
    // flex-wrap: nowrap;
    // flex-direction: row;
    // justify-content: space-between;
    // align-content: stretch;
    padding: 4px 13px;
`;

const FavouritesList = ({list}) => (
    <>
        <div className="favourites-list">
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
                            Favourites
                        </Text>
                      </Grid>
                    </Grid.Container>
                </Options>

                <div className="stock-card-container">
                    <List>
                        { list.map((e, i) => (
                            <StockCard key={i} stock={e}/>
                        ))}
                    </List>
                </div>
            </Wrapper>
        </div>
    </>
)
// <StockCard key={i} stock={quote}/>

export default FavouritesList;