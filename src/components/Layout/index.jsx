import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Page, Divider, Grid, Link, Button, Breadcrumbs, Spacer, Text, Tooltip, Code, Card, useToasts } from "@geist-ui/core";
import { Facebook, Github, Instagram, Linkedin, Twitter, ArrowLeft, Home } from "@geist-ui/icons";
import styled from 'styled-components';

import useNetwork from "../../hooks/useNetwork";

import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";

const HeaderWrapper = styled(Page.Header)`
  position: fixed !important;
  top: 12px;
  left: 0;
  right: 0;
  inset: 12px 0 auto 0;
  opacity: 1;
  z-index: 999;
  padding: 0 22px !important;
`;

const FooterWrapper = styled(Page.Footer)`
  display: block!important;
  position: relative !important;
  margin-top: 40px !important;
  padding: 2rem 0 !important;
  //border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export default function Layout({title, children}) {
    const router = useRouter();
    const { toast, setToast } = useToasts();

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    const networkState = useNetwork();
    // const {
    //     online,
    //     since,
    //     downLink,
    //     downLinkMax,
    //     effectiveType,
    //     rtt,
    //     saveData,
    //     type,
    // } = networkState;

    const click = () => {
      const action = {
        name: 'Refresh',
        handler: () => window.location.reload(),
        passive: true
      }

      networkState
        ? setToast({ text: 'Your internet connection is restored.', delay: 3000, type: 'success', placement: 'bottomLeft' })
        : setToast({ text: 'You are currently offline.', delay: 0, type: 'error', placement: 'bottomLeft', actions: [action] });
    }

    return (
        <>
            {isMounted &&
                <Page
                    size="mini"
                    dotBackdrop
                    style={{
                        width: 900,
                        // display: 'flex',
                        // flexWrap: 'nowrap',
                        // flexDirection: 'column'
                    }}
                >

                    <HeaderWrapper>
                        <Header />
                    </HeaderWrapper>

                    <Spacer h={6} />

                    {router.pathname !== "/" && (
                        <>
                            <Spacer h={1}/>

                            <div className={styles.wrapper}>
                                <NextLink href="/">
                                    <Link>
                                        <span className="h"><ArrowLeft/></span>
                                        <span className="i">&nbsp;Back Home</span>
                                    </Link>
                                </NextLink>
                            </div>

                            <Spacer h={1}/>

                            <Breadcrumbs>
                                <NextLink href="/">
                                    <Link>
                                        <Breadcrumbs.Item nextLink><Home /></Breadcrumbs.Item>
                                    </Link>
                                </NextLink>
                                <Breadcrumbs.Item>Watchlist</Breadcrumbs.Item>
                            </Breadcrumbs>
                        </>
                    )}

                    <Page.Body>
                        {children}
                    </Page.Body>

                    <Divider />

                    <FooterWrapper>
                        <Footer/>
                    </FooterWrapper> 
                </Page>
            }
        </>
    );
}
