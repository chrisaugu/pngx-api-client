import React from 'react'

import {Grid, Link, Toggle, useTheme} from "@geist-ui/react";
import {Moon, Sun} from "@geist-ui/react-icons";
// import ThemeToggler from "../ThemeToggler";
import AnimatedIcon from "../ThemeToggler/AnimatedIcon";

// import { TOKENS_DARK, TOKENS_LIGHT } from '../../../constants/Tokens'

export default function Header({onThemeChange}) {
    // const { theme, setTheme } = useContext(ThemeContext)

    const theme = useTheme()

    const switchTheme = () => {
        onThemeChange && onThemeChange(last => (last === 'dark' ? 'light' : 'dark'))
        // setTheme(theme === TOKENS_DARK ? TOKENS_LIGHT : TOKENS_DARK)
    }

    return (
        <nav className="nav">
            <div className="nav__wrapper">

                <ul className="nav__list">
                    <li className="nav__list-item">
                        <Link
                            color
                            className="nav__list-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/graph">
                            Graph
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <button
                            className="nav__list-btn-tokens"
                            // title={ theme === TOKENS_DARK ? 'Trocar para modo claro' : 'Trocar para modo escuro' }
                            onClick={() => switchTheme()}>
                            <svg className="nav__list-tokens-icon svg-inline--fa fa-adjust fa-w-16" focusable="false" data-prefix="fas" data-icon="adjust" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>
                        </button>
                    </li>
                    <li className="nav__list-item">
                        <div className="nav__list-link">
                            {/*<ThemeToggler className={"theme-toggler"} onSwitchTheme={switchTheme} />*/}
                            <AnimatedIcon className={"theme-toggler"} onSwitchTheme={switchTheme} />
                        </div>
                    </li>
                </ul>

                <Grid.Container>
                    <Grid xs={4}/>
                    <Grid xs={4}/>
                    <Grid xs={4}>
                        {/*<Select scale={0.5} value={theme.type} onChange={switchTheme()}>*/}
                        {/*    <Select.Option label>System preset</Select.Option>*/}
                        {/*    <Select.Option value="light">Light</Select.Option>*/}
                        {/*    <Select.Option value="dark">Dark</Select.Option>*/}
                        {/*    <Select.Option label>My custom</Select.Option>*/}
                        {/*    <Select.Option value="green">Green</Select.Option>*/}
                        {/*    <Select.Option value="red">Red</Select.Option>*/}
                        {/*    <Select.Option value="myTheme">myTheme</Select.Option>*/}
                        {/*</Select>*/}
                    </Grid>
                </Grid.Container>

            </div>

        </nav>
    )
}
