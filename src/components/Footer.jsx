import React, { useContext } from 'react';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import {Image, Page, Grid, Link, Toggle, Tooltip, Text, Button} from "@geist-ui/core";
import {Moon, Sun, Book, Settings, Github, Linkedin, Instagram, Code} from "@geist-ui/icons";
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: block;
  padding: 30px 25px;
  background-color: #ffffff0a;
  border-radius: 24px;
  backdrop-filter: blur(30px); 
  inset: 16px auto auto 14%;
  flex: 0 0 auto;
  flex-shrink: 0;
  aspect-ratio: unset;
  transform: none;
  transform: translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  z-index: 999;
`;

export default function Footer() {
    const router = useRouter();

    return (
        <FooterWrapper>
            <div className="social">
                <span>
                    Follow me on:
                    <Link target="_blank" href="https://github.com/chrisaugu"><Github/></Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/christianaugustyn"><Linkedin/></Link>
                    <Link target="_blank" href="https://www.instagram.com/christianaugustyn"><Instagram/></Link>
                </span>
            </div>

            <Text>
                This site is built using NextJs, GesitUI.
                <Link target="_blank" href="https://github.com/geist-ui/react">Built on&nbsp;<Code>@geist-ui/core</Code></Link>
                <br/>
                All data are fetched from&nbsp;<Link color block target="_blank" href="https://pngx-api.cleverapps.io/api">pngx-api.cleverapps.io</Link>.
            </Text>

            <Text><b>Disclaimer:</b> Nuku is mainly for information purposes only. Materials on this website are not intended to be a substitute for professional advice. Never disregard professional financial advice nor place your bids based on the information you have read on this website.</Text>
            {/* <Grid.Container gap={1} alignItems="center" justify="space-between"> */}
            {/*<Grid xs={1} />*/}

            <div className="footnote justify-content-space-between">
                <Text>&copy; {new Date().getFullYear()}. <Link color block href="https://www.christianaugustyn.me"
                                                                target="_blank">Christian Augustyn</Link>.</Text>
                <Text>Made with ❤ in <Link color block href="https://www.google.com/maps/place/Madang" target="_blank">Beautiful Madang</Link>.</Text>
            </div>
            
        </FooterWrapper>
    )
}
