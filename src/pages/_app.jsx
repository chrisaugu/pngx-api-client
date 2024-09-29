import { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import {GeistProvider, CssBaseline, useTheme} from '@geist-ui/core';

import { pageview, GA_TRACKING_ID } from '@/lib/gtag';
import { AppProvider } from '@/contexts/AppContext';
import { myDarkTheme, myLightTheme, myTheme } from '@/lib/theme';

import "inter-ui/inter.css";
import '@/styles/globals.css';
import GlobalStyle from "@/styles/globals";
import useMyTheme from '@/hooks/useTheme';

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const {themeType, switchTheme} = useMyTheme();
  const theme = useTheme();

  useEffect(() => {
    const handleRouteChange = (url) => pageview(url);

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <GeistProvider themes={[myDarkTheme, myLightTheme, myTheme]} themeType={{type: 'light'}}>
      
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, user-scalable=no" />
        <title>Home | Nuku - PNGX-API Client - Stock Price, Quote, News & History</title>
        <meta name="description" content="At Nuku, you get free stock quotes, up-to-date news, local market data, social interaction about PNGX." />
        <meta name="keywords" content="At Nuku, you get free stock quotes, up-to-date news, local market data, social interaction about PNGX." />
        
        <meta property="og:title" content="Nuku - Stock Market Live, Quotes, &amp; Financial News" />
        <meta property="og:description" content="At Nuku, you get free stock quotes, up-to-date news, local market data, social interaction about PNGX." />
        <meta property="og:image" content="/og.png" />
        
        <meta name="twitter:title" content={"title"} />
        <meta name="twitter:description" content={"description"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nuku" />
        <meta name="twitter:image" content={"image"} />

        <link rel="icon" href="./favicon.svg" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)" />
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      {/* <Script id="darkMode" 
        dangerouslySetInnerHTML={{ 
          __html: `
          (function(){
            if (!window.localStorage) return;
            if (window.localStorage.getItem('theme') === 'dark') {
              document.documentElement.style.background = '#000';
              document.body.style.background = '#000';
            } else {
              document.documentElement.style.background = '#fff';
              document.body.style.background = '#fff';
            }
          })()`
        }}
      /> */}
      
      <CssBaseline />
      <GlobalStyle />

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>

    </GeistProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
  
  // const menuItems = await getPrimaryMenu();
  // return {menuItems};
};
export default MyApp;