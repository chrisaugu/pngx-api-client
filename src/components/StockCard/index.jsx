import React from "react";
import { useRouter } from "next/router";
import {Card, Grid, Text, Spacer} from "@geist-ui/react";

import styles from "./index.module.css";

const StockCard = ({quote}) => {
    const router = useRouter();

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
            <Card key={quote._id}
                  hoverable
                  shadow
                  className={changeBg(quote.chg_today)}
                  style={{cursor: "pointer"}}
                  onClick={() => router.push('/stock/' + quote.code)}
            >
                {/*<Link href={`/stock/${quote.code}`}>*/}
                <Card.Body>
                    <Grid.Container gap={2}>
                        <Grid xs={6} md>
                            <img src={`./${quote.code.toLowerCase()}.png`} className={styles.stockImage} width="60px" height="60px"/>
                            <Spacer w={1}/>
                            <div className="vertical">
                                <Text h2 className={"symbol"}>{quote.code}</Text>
                                <Text h6 className={"name"}>{getStockName(quote.code)}</Text>
                            </div>
                        </Grid>
                        <Grid xs={6} md>
                            {/*<SmallGraph quotes={quotes}/>*/}
                            <Text h5 className={"last"}>K{quote.last}</Text>
                            <div className="vertical" justify="left">
                                {/*<Text h5 className={"high"}>K{quote.high}</Text>*/}
                                {/*<Text h5 className={"low"}>K{quote.bid}</Text>*/}
                                {/*    <Text h3>{quote.vol_today}<AtSign size={45}/></Text>*/}
                                {/*    <Text h4><span>K{quote.bid}</span></Text>*/}
                                <Text badge>{changeDir(quote.chg_today)}</Text>
                                <Text badge>({percentChange(quote.chg_today)})</Text>
                                {/*<Text h4>Offer: <span>K{quote.offer}</span></Text>*/}
                                {/*<Text h4>High: <span>K{quote.high}</span></Text>*/}
                                {/*<Text h4>Low: <span>K{quote.low}</span></Text>*/}
                                {/*<Text h4>Close: <span>K{quote.close}</span></Text>*/}
                            </div>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
                {/*</Link>*/}
            </Card>
        </>
    )
}

export default StockCard
