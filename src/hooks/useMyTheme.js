import { useState, useEffect } from "react";
import { useTheme } from "styled-components";

function useNetwork() {
  const [state, setState] = useState(() => {

    function getNetworkConnection() {
      return (
        window.navigator.connection ||
        window.navigator.mozConnection ||
        window.navigator.webkitConnection ||
        null
      );
    }

    function getNetworkConnectionInfo() {
      const connection = getNetworkConnection();
        if (!connection) {
          return {};
        }
        return {
          rtt: connection.rtt,
          type: connection.type,
          saveData: connection.saveData,
          downLink: connection.downLink,
          downLinkMax: connection.downLinkMax,
          effectiveType: connection.effectiveType,
        };
    }

    useEffect(() => {
      
      const handleOnline = () => {
        setState((prevState) => ({
          ...prevState,
          online: true,
          since: new Date().toString(),
        }));
      };
      
      const handleOffline = () => {
        setState((prevState) => ({
          ...prevState,
          online: false,
          since: new Date().toString(),
        }));
      };
      
      const handleConnectionChange = () => {
        setState((prevState) => ({
          ...prevState,
          ...getNetworkConnectionInfo(),
        }));
      };
      
      window.addEventListener("online", handleOnline);
      
      window.addEventListener("offline", handleOffline);
      
      const connection = getNetworkConnection();
      
      connection?.addEventListener("change", handleConnectionChange);
      
      return () => {
        window.removeEventListener("online", handleOnline);
      
        window.removeEventListener("offline", handleOffline);
      
        connection?.removeEventListener("change", handleConnectionChange);
      };

    }, []);

    return {
      since: undefined,
      online: window.navigator.onLine,
      ...getNetworkConnectionInfo(),
    };
  });
}

function useMyTheme() {
  const theme = useTheme();
  const [state, setState] = useState(() => {

    useEffect(() => {

      return {
        theme: ''
      }
    })

    return {
      theme: ''
    };
  });
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