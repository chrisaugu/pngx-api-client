import React from "react";
import Head from "next/head";
import {Divider, Grid, Link, Page, Spacer, Text} from "@geist-ui/react";
import {Facebook, Github, Instagram, Linkedin, Twitter} from "@geist-ui/react-icons";

import Header from "../Header";

const Layout = ({onThemeChange, title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="I got one life and I intend to live an extraordinary life to be remembered." />
                <meta name="keywords" content="Medina, Developer, Designer, UX, Front-end, Engineer" />
                <meta property="og:title" content="Christian Augustyn: Front-end Engineer" />
                <meta property="og:description" content="I got one life and I intend to live an extraordinary life to be remembered." />
                <meta property="og:image" content="/og.png" />

                <link rel="icon" href="/favicon.svg" />
            </Head>

            <Page width={"800px"} dotBackdrop>
                <Page.Header>
                    <Header onThemeChange={onThemeChange}/>
                </Page.Header>

                <Page.Body>

                    { children }

                </Page.Body>

                <Divider />

                <Page.Footer>

                    <div className="social">
                        <span>
                            Follow me on:
                            <Link href="https://github.com/chrisaugu"><Github/></Link>
                            <Link href="https://www.linkedin.com/in/chrisaugu/"><Linkedin/></Link>
                            <Link href="https://www.instagram.com/christianaugustyn"><Instagram/></Link>
                        </span>
                    </div>

                    <Text>
                        This site is built using NextJs, GesitUI. All data are fetched from&nbsp;
                        <Link color href="https://pngx-api.cleverapps.io/api">pngx-api.cleverapps.io</Link>.
                    </Text>

                    <Text><b>Disclaimer:</b> File</Text>
                    <div className="footnote justify-content-space-between">
                        <Text>&copy; {new Date().getFullYear()}. <Link color href="https://www.christianaugustyn.me"
                                                                       target="_blank">Christian Augustyn</Link></Text>
                        <Text>Made with ❤ in <Link color href="https://www.google.com/maps/place/Madang"
                                                   target="_blank">Beautiful Madang</Link>.
                        </Text>
                    </div>
                </Page.Footer>
            </Page>
        </>
    )
}

export default Layout;