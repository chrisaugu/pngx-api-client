import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Page, Divider, Grid, Link, Button, Breadcrumbs, Spacer, Text, Tooltip, Code, Card, useToasts } from "@geist-ui/core";
import { Facebook, Github, Instagram, Linkedin, Twitter, ArrowLeft, Home } from "@geist-ui/icons";

import useNetwork from "../../hooks/useNetwork";

import Header from "../Header";
import Footer from "../Footer";

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
                        width: 995,
                        display: 'flex',
                        flexWrap: 'nowrap',
                        flexDirection: 'column'
                    }}
                >

                    <Page.Header>
                        <Header />
                    </Page.Header>

                    <Spacer h={6} />

                    {router.pathname !== "/" && (
                        <>
                            <Spacer h={1}/>

                            <NextLink href="/">
                                <Link>
                                    <span className="h"><ArrowLeft/></span>
                                    <span className="i">&nbsp;Back Home</span>
                                </Link>
                            </NextLink>

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

                    <Page.Footer>
                        <Footer/>
                    </Page.Footer> 
                </Page>
            }
        </>
    )
}
