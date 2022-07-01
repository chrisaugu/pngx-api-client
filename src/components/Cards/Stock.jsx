import React from 'react';
import {Card, Grid, Text, Spacer, Button, Modal, Image} from '@geist-ui/core';
import {Heart, HeartFill, MoreVertical, Star} from '@geist-ui/icons';

import NormalButton from "../Button/Normal";
import FavButton from "../Button/Favorite";

import styles from "./Card.module.css";

const Stock = () => (
    <Grid.Container gap={1.5} justify="center">
        <Grid xs={24}>
            <Card key={stock._id}
                  className={`stock-card ${changeBg(stock.chg_today)}`}
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

                            {
                                favouritesList.find((m) => m._id == stock._id) ?
                                    (<FavButton icon={<HeartFill/>} scale={0.75} onClick={ () => remove(stock._id) }/>) :
                                    (<FavButton icon={<Heart/>} scale={0.75} onClick={ () => add(stock) }/>)
                            }

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
            </Card>
        </Grid>
    </Grid.Container>
)

export default Stock;