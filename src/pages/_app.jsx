import React, { useState } from 'react'

import App from 'next/app'

import {GeistProvider, CssBaseline, useTheme} from '@geist-ui/react'

import { greenTheme, redTheme, myTheme } from '../utils/theme'

import "inter-ui/inter.css"

import '../styles/globals.scss'

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState('light')

    const changeTheme = () => {
        setTheme((last) => (last === "dark" ? "light" : "dark"));
    };

    return (
        <GeistProvider themes={[greenTheme, redTheme, myTheme]} themeType={theme}>
            <CssBaseline />
            <Component onThemeChange={next => setTheme(next)} {...pageProps} />
        </GeistProvider>
    )


    // // Use the layout defined at the page level, if available
    // const getLayout = Component.getLayout || ((page) => page)
    //
    // return getLayout(<Component {...pageProps} />)
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
}

export default MyApp;


// import React, { useState, useEffect } from 'react'
// import useDarkMode from 'use-dark-mode'
// import { ThemeProvider } from 'styled-components'
// import { lightTheme, darkTheme } from '../lib/theme'
//
// const MyApp = ({ Component, pageProps }) => {
//     const [isMounted, setIsMounted] = useState(false)
//     const darkMode = useDarkMode(true)
//     const theme = darkMode.value ? darkTheme : lightTheme
//
//     useEffect(() => {
//         setIsMounted(true)
//     }, [])
//
//     return (
//         <ThemeProvider theme={theme}>
//             <button onClick={darkMode.enable}>DARK MODE</button>
//             <button onClick={darkMode.disable}>LIGHT MODE</button>
//             {isMounted && <Component {...pageProps} />}
//         </ThemeProvider>
//     )
// }
//
// export default MyApp