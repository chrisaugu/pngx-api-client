import { createContext, useEffect, useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from "../store/configureStore";
import useMyTheme from '@/hooks/useTheme';

export const UserContext = createContext({ 
    user: null, 
    username: null
});

export const AppContext = createContext();

export const AuthContext = createContext({
    token: ""
});

export const ThemeContext = createContext({
    themeType: 'dark',
    switchTheme: () => {}
});

export const ThemeProvider = ({children}) => {
    const theme = useMyTheme()

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const AppProvider = ({children}) => {
    const {theme, setTheme} = useMyTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    let value = {
        // auth,
        // user,
        theme,
        // online
    }

    return (
        <AppContext.Provider value={value}>
            <StoreProvider store={store}>
                <ThemeProvider theme={theme}>
                    {/* <button onClick={darkMode.enable}>DARK MODE</button> */}
                    {/* <button onClick={darkMode.disable}>LIGHT MODE</button> */}

                    {/* {isMounted && children} */}
                    {children}
                </ThemeProvider>
                {/* <OnlineStatusProvider>Online</OnlineStatusProvider> */}
            </StoreProvider>
        </AppContext.Provider>
    )
}