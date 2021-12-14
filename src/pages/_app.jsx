import React, { useState } from 'react'
import ReactDom from 'react-dom'

import App from 'next/app'
import Head from 'next/head'

import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react'
import { greenTheme, redTheme } from '../theme'

import "inter-ui/inter.css";
// import "../styles/custom.scss";
import '../styles/globals.scss';

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState('light')

  return (
    <GeistProvider themes={[greenTheme, redTheme]} themeType={theme}>
      <CssBaseline />
      <Component onThemeChange={next => setTheme(next)} {...pageProps} />
    </GeistProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp;