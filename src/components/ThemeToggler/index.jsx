import React, {useState} from "react";
import * as Icons from "@geist-ui/icons";
import {Toggle, Tooltip} from "@geist-ui/core";
import useTheme from "../../hooks/useTheme";
import RoundButton from "../Buttons/Round";
import {Moon, Sun} from "@geist-ui/icons";
import AnimatedIcon from "./AnimatedIcon";

const ThemeToggler = () => {
    const {themeType, switchTheme} = useTheme()

    return (
        <>
            {/*<Icons.Sun/>*/}
            {/*<Toggle onChange={switchTheme}/>*/}
            {/*<Icons.Moon/>*/}
            {/*<div className="toggle theme-switch d-flex align-items-center ps-0 justify-content-end">*/}
            {/*    <svg className="icon-toggle active" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>*/}
            {/*    <input type="checkbox" className="toggle-input" id="darkMode"/>*/}
            {/*    <label className="mx-2" title="toggle for dark/light mode" />*/}
            {/*    <svg className="icon-toggle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>*/}
            {/*</div>*/}

            <Tooltip text={"Theme"} placement="bottom">
                <RoundButton
                    aria-label="Theme"
                    title={ themeType === "dark" ? 'Dark Mode' : 'Light Mode' }
                    icon={themeType === "dark" ? <Moon /> : <Sun />}
                    onClick={switchTheme}>
                    <svg focusable="false" data-prefix="fas" data-icon="adjust" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>
                </RoundButton>

                {/*<ThemeToggler className={"theme-toggler"} onSwitchTheme={switchTheme} />*/}
                {/*<AnimatedIcon className={"theme-toggler"} onSwitchTheme={switchTheme} />*/}
            </Tooltip>
        </>
    )
}

export default ThemeToggler;