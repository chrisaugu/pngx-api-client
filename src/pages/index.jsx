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

    return (
        <>
            <Layout onThemeChange={onThemeChange}>
                
                <Spacer h={3}/>

                <ButtonExample/>

                <MyButton>Hello</MyButton>

                <ToastMessage/>

                {/*<Text>*/}
                {/*    S*/}
                {/*    <Toggle onChange={showGraph} />*/}
                {/*</Text>*/}

                {/*{
                    quotes ? <Loading /> :
                }*/}
                <div className="quotes">
                    {/*<StockList stocks={quotes}/>*/}
                </div>

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

// Home.getInitialProps = async () => {
//     // const res = await fetch('http://localhost:4000/api/stocks')
//     const res = await fetch('https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api/stocks')
//     const { data } = await res.json();

//     // const {data} = await Axios.get("http://localhost:4000/api/stocks");
//     // const {data} = await api.get('/stocks')
//     return {
//         quotes: data || []
//     }
// }

export default Home;