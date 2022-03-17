import React, { useContext } from 'react';
import NextLink from 'next/link';

import { useRouter } from "next/router";
import {Image, Page, Grid, Link, Toggle, Tooltip, Text, Button} from "@geist-ui/core";
import {Moon, Sun, Book, Settings, Github, Linkedin, Instagram, Code} from "@geist-ui/icons";

export default function Footer() {
    const router = useRouter();

    return (
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

              <NextLink target="_blank" href="https://github.com/geist-ui/react">
                <Link block>Built on&nbsp;<Code>@geist-ui/core</Code></Link>
              </NextLink>
              
              <br/>

              Data fetched from <Link block target="_blank" href="https://pngx-api.cleverapps.io/api">pngx-api.cleverapps.io</Link>.

          </Text>

          <Text><b>Disclaimer:</b> File</Text>
          <div className="footnote justify-content-space-between">
              <Text>&copy; {new Date().getFullYear()}. <Link block href="https://www.christianaugustyn.me"
                                                             target="_blank">Christian Augustyn</Link>.</Text>
              <Text>Made with ❤ in <Link block href="https://www.google.com/maps/place/Madang"
                                         target="_blank">Beautiful Madang</Link>.
              </Text>
          </div>
      </Page.Footer>
    )
}
