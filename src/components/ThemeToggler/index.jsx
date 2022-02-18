import React, {useState} from "react";
import * as Icons from "@geist-ui/react-icons";
import {Toggle, useTheme} from "@geist-ui/react";

const ThemeToggler = ({onSwitchTheme}) => {
    const [theme, setTheme] = useState("light");

    let switchTheme = () => {
        setTheme((last) => (last === "dark" ? "light" : "dark"));
    }

    return (
        <>
            <Icons.Sun/>
            <Toggle onChange={onSwitchTheme}/>
            <Icons.Moon/>
            <div class="toggle theme-switch d-flex align-items-center ps-0 justify-content-end">
                <svg class="icon-toggle active" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <input type="checkbox" class="toggle-input" id="darkMode"/>
                <label class="mx-2" title="toggle for dark/light mode" for="darkMode"></label>
                <svg class="icon-toggle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </div>
        </>
    )
}

ThemeToggler.propType = {
    onSwitchTheme: "PropTypes"
}

export default ThemeToggler;