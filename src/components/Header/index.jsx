import React, { useContext } from 'react';

import { useRouter } from "next/router";
import {Image, Page, Grid, Link, Toggle, Tooltip, Text, Button, useTheme} from "@geist-ui/core";
import {Moon, Sun, Book, Settings} from "@geist-ui/icons";
import {format} from 'date-fns';

// import ThemeToggler from "../ThemeToggler";
import AnimatedIcon from "../ThemeToggler/AnimatedIcon";
import RoundButton from "../Button/Round";

// import { TOKENS_DARK, TOKENS_LIGHT } from '../../../constants/Tokens'

import styles from "./Header.module.css";

export default function Header({onThemeChange}) {
    // const { theme, setTheme } = useContext(ThemeContext)

    const theme = useTheme();
    const router = useRouter();

    const switchTheme = () => {
      onThemeChange && onThemeChange(last => (last === 'dark' ? 'light' : 'dark'))
      // setTheme(theme === TOKENS_DARK ? TOKENS_LIGHT : TOKENS_DARK)
    }

    const changeHandler = val => {
      onThemeChange && onThemeChange(val)
    }

    return (
        <Page.Header>
        
            <Grid.Container gap={1} alignItems="center" justify="space-between">
                <Grid sm>
                  <Grid.Container gap={1}>
                    {/*<Grid>
                      <Image src="/vercel.svg" alt="Logo" width="56px" height="56px" />
                    </Grid>*/}
                    <Grid>
                      <Text
                        h4
                        onClick={() => {
                          router.push("/");
                        }}
                        style={{ margin: "4px 0 0 0", padding: "6px 0", cursor: "pointer" }}
                      >
                        PNGX Client
                      </Text>
                      <Text span type="secondary">
                        { format(new Date(), "yyyy-MM-dd") }
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Grid>

                <Grid xstyle={{ width: 160 }}>
                  <Grid.Container gap={1} alignItems="center">
                    {/*<Grid>
                      <Tooltip text={"Glossary"} placement="bottom">
                        <RoundButton
                          aria-label="Glossary"
                          icon={<Book />}
                          onClick={() => {
                            router.push("/glossary");
                          }}
                        />
                      </Tooltip>
                    </Grid>*/}
                    <Grid>
                      <Tooltip text={"Theme"} placement="bottom">
                        <RoundButton
                            aria-label="Theme"
                            // title={ theme === TOKENS_DARK ? 'Trocar para modo claro' : 'Trocar para modo escuro' }
                            icon={theme.type === "dark" ? <Moon /> : <Sun />}
                            onClick={()=> switchTheme()}>
                            {/*<svg focusable="false" data-prefix="fas" data-icon="adjust" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>*/}
                        </RoundButton>

                        {/*<ThemeToggler className={"theme-toggler"} onSwitchTheme={switchTheme} />*/}
                        {/*<AnimatedIcon className={"theme-toggler"} onSwitchTheme={switchTheme} />*/}
                      </Tooltip>
                    </Grid>
                    {/*<Grid>
                      <Tooltip text={"Settings"} placement="bottom">
                        <RoundButton
                          aria-label="Settings"
                          icon={<Settings />}
                          onClick={() => setVisible(true)}
                        />
                      </Tooltip>
                    </Grid>*/}
                  </Grid.Container>

                  {/*<ModalSettings setVisible={setVisible} bindings={bindings} />*/}
                </Grid>
            </Grid.Container>
        </Page.Header>
    )
}
