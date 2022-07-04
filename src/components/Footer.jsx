import React, { useContext } from 'react';
import NextLink from 'next/link';
import {Image, Page, Grid, Link, Toggle, Tooltip, Text, Button, Code} from "@geist-ui/core";
import {Moon, Sun, Book, Settings, Github, Linkedin, Instagram} from "@geist-ui/icons";
import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: relative;
  padding: 30px 25px;
  color: #000;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgb(235, 238, 241);
  border-radius: 24px;
  z-index: 999;
  overflow: visible;

  @media (prefers-color-scheme: dark) {
    color: #8a8a8e;
    background-color: #1f2229;
    background-color: #1d1d1f;
  }

  @media (prefers-color-scheme: d) {
    padding: 80px 40px;
  }

  .footnote {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
      display: block;
    }
  }

  .social {
    span {
      display: inline-flex;

      a {
        margin: 0px 8px !important;
      }
    }
  }

`;

export default function Footer() {
    
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
                This site is built using NextJs, GeistUI.&nbsp;
                <Link target="_blank" href="https://github.com/geist-org/geist-ui">Built on&nbsp;<Code>@geist-ui/core</Code></Link>.&nbsp;
                All data are fetched from&nbsp;<Link color block target="_blank" href="https://pngx-api.cleverapps.io/api">pngx-api.cleverapps.io</Link>.
            </Text>

            <Text><b>Disclaimer:</b> Nuku is mainly for information purposes only. Information on this website are not intended to be a substitute for professional advice. Never disregard professional financial advice nor place your bids based on the information you have read on this website.</Text>

            <div className="footnote">
                <Text>&copy; {new Date().getFullYear()}. <Link color block href="https://www.christianaugustyn.me"
                                                                target="_blank">Christian Augustyn</Link>.</Text>
                <Text>Made with ❤ in <Link color block href="https://www.google.com/maps/place/Madang" target="_blank">Beautiful Madang</Link>.</Text>
            </div>
            
        </FooterWrapper>
    )
}
