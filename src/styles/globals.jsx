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
  * {
    box-sizing: border-box;
    div {
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        &-track {
          background: GhostWhite, 0.25;
          box-shadow: inset 0 0 6px rgba(black, 0.15);
        }
        &-thumb {
          background-color: DarkGray;
          border-radius: 25px;
          border: 3px solid transparent;
        }
      }
    }
  }
  html,
  body {
    width: 100%;
    // font-family: 'Space Mono', monospace !important;
  }
  body {
    // background-image: radial-gradient(#333 1px, transparent 0),
      radial-gradient(#222 1px, transparent 0);
    background-position: 0 0, 25px 25px;
    background-attachment: fixed;
    background-size: 50px 50px;
    // background: {({ theme }) => theme.body};
    // color: {({ theme }) => theme.text};
    // font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    // transition: all 0.50s linear;
  }

  main {
    padding: 1rem 0 120px !important;
  }
  // .btn {
  //   text-transform: uppercase !important;
  // }
  .card,
  .fieldset {
    background-color: transparent !important;
  }
  .collapse {
    &-group {
      padding: 0 !important;
    }
  }
  .dot {
    .label {
      text-transform: uppercase !important;
    }
  }
  dt {
    height: auto !important;
    white-space: normal !important;
  }
  table {
    min-width: 650px;
  }
  @media print {
    header,
    footer {
      display: none;
    }
  }
`;

export default GlobalStyle;