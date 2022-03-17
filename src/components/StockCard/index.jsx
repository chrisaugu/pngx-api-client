import React from "react";
import Image from 'next/image';
import { useRouter } from "next/router";
import {Card as GCard, Grid, Text, Spacer, Button, Modal, useModal} from "@geist-ui/core";
import { MoreVertical } from '@geist-ui/icons';
import Trend from 'react-trend';
import styled from 'styled-components';

import NormalButton from "../Button/Normal";

import styles from "./StockCard.module.css";

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


const StockCard = ({quote}) => {
    const router = useRouter();
    const { visible, setVisible, bindings } = useModal();

    let changeBg = (change) => {
        if (change > 0) {
            return "green";
        } else if (change < 0) {
            return "red";
        } else {
            return;
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

    return (
        <>
            <Grid.Container gap={1.5} justify="center">
                <Grid xs={24}>
                    <Card key={quote._id}
                          className={changeBg(quote.chg_today)}
                          style={{cursor: "pointer", width: "100%"}}
                          onClick={() => router.push('/stock/' + quote.code)}
                    >
                        {/*<Link href={`/stock/${quote.code}`}>*/}
                        <Card.Body> 
                            {/*<Wrapper>*/}
                                <Grid.Container>
                                    <Grid xs={12} gap={1.5} justify="left" alignItems="center">
                                    {/*<GridWall>*/}
                                        <Image
                                          src={`/${quote.code.toLowerCase()}.png`} 
                                          className={styles.stockImage} 
                                          placeholder="blur"
                                          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                          width={60} 
                                          height={60}
                                          alt=""/>
                                        <Spacer w={1}/>
                                        <div className="vertical">
                                            <Text h2 className={"symbol"}>{quote.code}</Text>
                                            <Text h6 className={"name"}>{getStockName(quote.code)}</Text>
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
                                        {/*<SmallGraph quotes={quotes}/>*/}
                                        <Text h2 className={"last"}>K{quote.last}</Text>
                                        <div className="vertical" justify="right">
                                            {/*<Text h5 className={"high"}>K{quote.high}</Text>*/}
                                            {/*<Text h5 className={"low"}>K{quote.bid}</Text>*/}
                                            {/*    <Text h3>{quote.vol_today}<AtSign size={45}/></Text>*/}
                                            {/*    <Text h4><span>K{quote.bid}</span></Text>*/}
                                            <Text h3 badge>{changeDir(quote.chg_today)}</Text>
                                            <Text h3 badge>({percentChange(quote.chg_today)})</Text>
                                            {/*<Text h4>Offer: <span>K{quote.offer}</span></Text>*/}
                                            {/*<Text h4>High: <span>K{quote.high}</span></Text>*/}
                                            {/*<Text h4>Low: <span>K{quote.low}</span></Text>*/}
                                            {/*<Text h4>Close: <span>K{quote.close}</span></Text>*/}
                                        </div>

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
}

export default StockCard
