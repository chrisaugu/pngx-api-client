import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { CssBaseline } from '@geist-ui/core';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx);
      const styles = CssBaseline.flush();
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {styles}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

    return (
      <Html lang="en">
        <Head>
          <script async src={gtag} />
          <script 
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
          <Script id="darkMode" 
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
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}