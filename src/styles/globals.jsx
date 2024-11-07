import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    &-track {
      background: GhostWhite, 0.25px;
      box-shadow: inset 0 0 6px rgba(black, 0.15);
    }
    &-thumb {
      background-color: DarkGray;
      border-radius: 25px;
      border: 3px solid transparent;
    }
  }

  @media (prefers-color-scheme: dark) {
    ::-webkit-scrollbar-track {
      background: #f5f5f6;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #dfdfdf;
      border-radius: 10px;
      border: 2px solid #fff;
    }
  }
  
  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    border-radius: 10px;
    background: #fff;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #a9a9a9;
    background: #c6c7ca;
    border-radius: 10px;
    border-color: #f5f5f6;
  }
  
  ::-webkit-scrollbar {
    // width: 8px;
    width: 10px;
    height: 10px;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    // background-image: radial-gradient(#333 1px, transparent 0), radial-gradient(#222 1px, transparent 0);
    background-position: 0 0, 25px 25px;
    background-attachment: fixed;
    background-size: 50px 50px;
    // background: {({ theme }) => theme.body};
    // color: {({ theme }) => theme.text};
    transition: all 0.50s linear;
  
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    // background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #e07628;
    text-decoration: none;
  }

  table {
    min-width: 650px;
  }

`;

export default GlobalStyle;