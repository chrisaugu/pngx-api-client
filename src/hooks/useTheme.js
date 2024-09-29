import { useState, useEffect } from "react";
import { useTheme } from "styled-components";

function useMyTheme() {
  // const theme = useTheme();
  // const [state, setState] = useState(() => {

  //   useEffect(() => {

  //     return {
  //       theme: ''
  //     }
  //   })

  //   return {
  //     theme: ''
  //   };
  // });

  // const [themeType, switchTheme] = usePrefers();

  // const darkMode = useDarkMode(true);
  // const theme = darkMode.value ? darkTheme : lightTheme;
  // const theme = {
  //   main: "mediumseagreen"
  // };

  const [themeType, setThemeType] = useState('light');
  // const switchThemes = () => {
  //     setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  // }

  // const [theme, setTheme] = useState(TOKENS_DARK)

  // useEffect(() => {
  //     setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches
  //         ? TOKENS_DARK
  //         : TOKENS_LIGHT)
  // }, []);
  // const [themeType, setThemeType] = useState('dark');
  // useEffect(() => {
  //   document.documentElement.removeAttribute('style');
  //   document.body.removeAttribute('style');

  //   const theme = window.localStorage.getItem('theme');
  //   if (themes.includes(theme)) setThemeType(theme);
  // }, []);

  // const switchTheme = useCallback((theme) => {
  //   setThemeType(theme);
  //   if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem('theme', theme);
  // }, []);

  const switchTheme = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  
  return {
    themeType,
    switchTheme
  }
}

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  // const [componentMounted, setComponentMounted] = useState(false);
  
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode);
  };
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } 
    else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  
  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem('theme');

  //   if (localTheme) {
  //     setTheme(localTheme);
  //   } else {
  //     window.localStorage.setItem('theme', 'light');
  //   }
  // })

  // useEffect(() => {
  // if (
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches && 
  //   !localTheme
  // ) {
  //   setTheme('dark')
  //   }
  // })

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem('theme');
  //   window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ? 
  //     setMode('dark') :
  //       localTheme ?
  //         setTheme(localTheme) :
  //           setMode('light');

  //   setComponentMounted(true);
  // })

  return [theme, toggleTheme/*, componentMounted*/];
};

export default useMyTheme;