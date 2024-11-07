import {createContext, useContext, useEffect, useState} from "react";

// function useNetwork() {
//   const [state, setState] = useState(() => {

//   function getNetworkConnection() {
//     return (
//       window.navigator.connection ||
//       window.navigator.mozConnection ||
//       window.navigator.webkitConnection ||
//       null
//     );
//   }

//   function getNetworkConnectionInfo() {
//     const connection = getNetworkConnection();
//       if (!connection) {
//         return {};
//       }
//       return {
//         rtt: connection.rtt,
//         type: connection.type,
//         saveData: connection.saveData,
//         downLink: connection.downLink,
//         downLinkMax: connection.downLinkMax,
//         effectiveType: connection.effectiveType,
//       };
//   }

//   useEffect(() => {
    
//     const handleOnline = () => {
//       setState((prevState) => ({
//         ...prevState,
//         online: true,
//         since: new Date().toString(),
//       }));
//     };
    
//     const handleOffline = () => {
//       setState((prevState) => ({
//         ...prevState,
//         online: false,
//         since: new Date().toString(),
//       }));
//     };
    
//     const handleConnectionChange = () => {
//       setState((prevState) => ({
//         ...prevState,
//         ...getNetworkConnectionInfo(),
//       }));
//     };
    
//     window.addEventListener("online", handleOnline);
    
//     window.addEventListener("offline", handleOffline);
    
//     const connection = getNetworkConnection();
    
//     connection?.addEventListener("change", handleConnectionChange);
    
//     return () => {
//       window.removeEventListener("online", handleOnline);
    
//       window.removeEventListener("offline", handleOffline);
    
//       connection?.removeEventListener("change", handleConnectionChange);
//     };

//   }, []);

//     return {
//       since: undefined,
//       online: window.navigator.onLine,
//       ...getNetworkConnectionInfo(),
//     };
//   });
// }

function useNetwork() {
  const [isOnline, setNetwork] = useState(); // window.navigator.onLine

  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);

    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });

  return isOnline;
}

export default useNetwork;

const OnlineStatusContext = createContext(true);

export const OnlineStatusProvider = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export const useOnlineStatus = () => {
  return useContext(OnlineStatusContext);
};