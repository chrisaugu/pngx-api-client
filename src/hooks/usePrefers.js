import { createContext, useContext } from 'react';

export const PrefersContext = createContext({
  themeType: 'dark',
  switchTheme: () => {}
});

export const usePrefers = () => {
  const store = useContext(PrefersContext);
  return store;
};
