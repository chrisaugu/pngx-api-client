import React, { useState, useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Page, Divider, Grid, Link, Button, Breadcrumbs, Spacer, Text, Tooltip, Code, Card, useTheme, useToasts } from "@geist-ui/core";
import { Facebook, Github, Instagram, Linkedin, Twitter, ArrowLeft } from "@geist-ui/icons";

import Header from "../Header";

const Layout = ({onThemeChange, children}) => {
    const theme = useTheme(); 
    const router = useRouter();
    const { toast, setToast } = useToasts();
    
    function useNetwork(){
      const [isOnline, setNetwork] = useState(window.navigator.onLine);

      const updateNetwork = () => {
        setNetwork(window.navigator.onLine);
        // setToast({ text: 'Connection is offline.', delay: 2000, type: 'error' })
      }
      
      useEffect(() => {
        window.addEventListener("offline", updateNetwork);
        window.addEventListener("online", updateNetwork);

        return () => {
          window.removeEventListener("offline", updateNetwork);
          window.removeEventListener("online", updateNetwork);
        };
      });

      return isOnline;
    };

    const click = () => {
      useNetwork ? setToast({ text: 'Connection is online.', delay: 2000, type: 'success' }) 
                 : setToast({ text: 'Connection is offline.', delay: 2000, type: 'error' });
    }

    return (
        <>
            <div className="layout">

              <Page size="small" className="main"
                dotBackdrop
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "1000px",
                  paddingTop: "1rem",
                }}
              >

                <Header onThemeChange={onThemeChange} themeType={theme.type} />
              
                {router.pathname !== "/" && (
                  <>
                    <Link href="/" passHref>
                      <a className={'styles.back'}>
                        <ArrowLeft /> Back Home
                      </a>
                    </Link>

                    <Breadcrumbs>
                        <NextLink href="/">
                            <Breadcrumbs.Item nextLink>Home</Breadcrumbs.Item>
                        </NextLink>
                        <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
                    </Breadcrumbs>
                  </>
                )}

                <Button scale={2/3} auto onClick={click}>Show Toast</Button>

                <Page.Body className="page">

                  {/*<Card type="lite" className="inner">*/}
                    {children}
                  {/*</Card>*/}

                </Page.Body>

                <Divider />

                <Page.Footer>

                    <div className="social">
                        <span>
                            Follow me on:
                            <Link target="_blank" href="https://github.com/chrisaugu"><Github/></Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/chrisaugu/"><Linkedin/></Link>
                            <Link target="_blank" href="https://www.instagram.com/christianaugustyn"><Instagram/></Link>
                        </span>
                    </div>

                    <Text>
                        This site is built using NextJs, GesitUI. All data are fetched from&nbsp;

                        <Link target="_blank" href="https://github.com/geist-ui/react">Built on&nbsp;<Code>@geist-ui/core</Code></Link>
                        
                        <br/>

                        Data fetched from <Link color target="_blank" href="https://pngx-api.cleverapps.io/api">pngx-api.cleverapps.io</Link>.
      
                    </Text>

                    <Text><b>Disclaimer:</b> File</Text>
                    <div className="footnote justify-content-space-between">
                        <Text>&copy; {new Date().getFullYear()}. <Link color href="https://www.christianaugustyn.me"
                                                                       target="_blank">Christian Augustyn</Link>.</Text>
                        <Text>Made with ❤ in <Link color href="https://www.google.com/maps/place/Madang"
                                                   target="_blank">Beautiful Madang</Link>.
                        </Text>
                    </div>
                </Page.Footer>
              </Page>

              <style jsx>{`
                .layout {
                  min-height: 100%;
                  width: 100%;
                }
                .layout :global(.inner) {
                  max-width: 750px;
                  margin: 0 auto;
                  padding-bottom: 0;
                }
                .layout :global(.inner > .content) {
                  padding-bottom: 0;
                }
                .layout :global(.main) {
                  min-height: 100%;
                }
                .layout :global(.page) {
                  padding-top: 0;
                  padding-bottom: 0;
                }
              `}</style>
            </div>
        </>
    )
}

export default Layout;