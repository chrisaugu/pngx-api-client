import React, { useState, useEffect } from 'react'

import App from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import {GeistProvider, CssBaseline, useTheme } from '@geist-ui/core'

// import useDarkMode from 'use-dark-mode'
// import { ThemeProvider } from 'styled-components'

import { greenTheme, redTheme, myTheme } from '../utils/theme'
// import { lightTheme, darkTheme } from '../lib/theme'
import Layout from "../components/Layout"

import "inter-ui/inter.css"

import '../styles/globals.scss'
import GlobalStyle from "../styles/globals"

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }) {
//     const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState('light')

    const changeTheme = () => {
        setTheme((last) => (last === "dark" ? "light" : "dark"));
    };

//     const darkMode = useDarkMode(true)
//     const theme = darkMode.value ? darkTheme : lightTheme
//
//     useEffect(() => {
//         setIsMounted(true)
//     }, [])

    return (
        <GeistProvider themes={[greenTheme, redTheme, myTheme]} themeType={theme}>
            <CssBaseline />
            <GlobalStyle/>

            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                {/*<title>{title}</title>*/}
                <meta name="description" content="I got one life and I intend to live an extraordinary life to be remembered." />
                <meta name="keywords" content="Medina, Developer, Designer, UX, Front-end, Engineer" />
                <meta property="og:title" content="Christian Augustyn: Front-end Engineer" />
                <meta property="og:description" content="I got one life and I intend to live an extraordinary life to be remembered." />
                <meta property="og:image" content="/og.png" />
                <meta
                    name="theme-color"
                    content="#fff"
                    media="(prefers-color-scheme: light)"
                />
                <meta
                    name="theme-color"
                    content="#000"
                    media="(prefers-color-scheme: dark)"
                />

                <link rel="icon" href="./favicon.svg" />

            </Head>

            <Script id="darkMode" dangerouslySetInnerHTML={{ __html: `
              (function(){
                if (!window.localStorage) return;
                if (window.localStorage.getItem('theme') === 'dark') {
                  document.documentElement.style.background = '#000';
                  document.body.style.background = '#000';
                };
              })()
            `}} />
            <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=UA-110371817-17" />
            {/*<Script
              id="dataLayer"
              async
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-110371817-17');
                `
              }}
            />*/}

            <Layout onThemeChange={changeTheme}>
                <Component {...pageProps} />
                {/*<Component onThemeChange={next => setTheme(next)} {...pageProps} />*/}
            </Layout>

            <style global jsx>{`
              body {
                overflow-x: hidden;
              }
            `}</style>

        </GeistProvider>

//         <ThemeProvider theme={theme}>
//             <button onClick={darkMode.enable}>DARK MODE</button>
//             <button onClick={darkMode.disable}>LIGHT MODE</button>
//             {isMounted && <Component {...pageProps} />}
//         </ThemeProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
}

export default MyApp;