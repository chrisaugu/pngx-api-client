import React from "react"

import Head from 'next/head'

import {
    Button,
    Input,
    Spacer,
    Text,
    Link,
    Image,
    Display,
    Grid,
    Tag,
    Select,
    Card,
    Divider,
    Toggle,
    useTheme,
    Code,
    Snippet,
    Avatar,
    ButtonGroup,
    Description,
    Popover,
    Tabs,
    AutoComplete,
} from '@geist-ui/react'

import {AtSign, ArrowUp} from "@geist-ui/react-icons"

import Axios from 'axios'
import api from "../lib/api"
import Header from "../components/Header"
import Layout from "../components/Layout"
import {ButtonExample, Button as MyButton} from "../components/Button"
import ToastMessage from "../components/ToastMessage"
import StockList from "../components/StockList";
import Graph from "../components/Graph";

const Home = ({ onThemeChange, stars, quotes=[1] }) =>  {
    const { palette } = useTheme()

    const changeHandler = val => {
        onThemeChange && onThemeChange(val)
    }

    const switchThemes = () => {
        onThemeChange && onThemeChange(last => (last === 'dark' ? 'light' : 'dark'))
    }

    let isShown = false;
    const showGraph = () => {
        return !isShown;
    }

    const StockOptions = () => {
        const options = [
            { label: 'London', value: 'london' },
            { label: 'Sydney', value: 'sydney' },
            { label: 'Shanghai', value: 'shanghai' },
        ]
        return <AutoComplete placeholder="Enter here" options={options} />
    }

    function openDetail(code) {
        console.log(code)
    }

    return (
        <>
            <Layout onThemeChange={onThemeChange}>
                {/*<Display
                    title="Geist UI"
                    caption={
                        <>
                            Welcome to
                            <Text span b> PNGX-API </Text>
                        </>
                    }>
                    <Image src="/vercel.svg" alt="logo" draggable={false} />
                </Display>*/}

                {/*<Text h1 style={{color: palette.purple}}>Welcome to <a href="https://pngx-api.cleverapps.io/api/stocks">PNGX-API Client!</a></Text>
                <Text>
                    PNGX-API is an unofficial RESTful api. The api is built on NodeJs, ReactJs, NextJs, GeistUI,
                </Text>*/}

                <Spacer h={3}/>

                <ButtonExample/>

                <MyButton>Hello</MyButton>

                <ToastMessage/>

                {/*<Spacer h={.5} />*/}

                {/*<Text h3>API Explorer</Text>*/}

                {/*<Snippet>curl https://pngx-api.cleverapps.io/api/stocks</Snippet>*/}

                {/*<Text>Hello</Text>*/}
                {/*<div className="input">*/}
                {/*    <Code>/api/stocks</Code>*/}
                {/*    <Input clearable label="" placeholder="eg. ?symbol=bsp,date=1/2/2021" />*/}
                {/*    <Spacer w={2}/>*/}
                {/*    <Button type={'success'}>GET</Button>*/}
                {/*</div>*/}

                {/*<Text h5>Response</Text>*/}

                {/*<Text>*/}
                {/*    S*/}
                {/*    <Toggle onChange={showGraph} />*/}
                {/*</Text>*/}

                {/*<Spacer/>*/}

                {/*<Text>Hello</Text>*/}

                {/*<Code>*/}
                {/*    /api/historicals/*/}
                {/*    <Select scale={0.5} value={theme.type}>*/}
                {/*        <Select.Option label>Symbol</Select.Option>*/}
                {/*        <Select.Option value="bsp">BSP</Select.Option>*/}
                {/*    </Select>*/}
                {/*    <StockOptions/>*/}
                {/*</Code>*/}
                {/*<Text h5>Response</Text>*/}

                <Graph quotes={quotes} symbol={"BSP"} />
                <StockList stocks={quotes}/>

            </Layout>
        </>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

Home.getInitialProps = async () => {
    const res = await fetch('http://localhost:5000/api/stocks')
    // const res = await api('/stocks')
    const { data } = await res.json();

    // const {data} = await Axios.get("http://localhost:5000/api/stocks");
    // const {data} = await api.get('/stocks')
    return {
        quotes: data
    }
}

export default Home;