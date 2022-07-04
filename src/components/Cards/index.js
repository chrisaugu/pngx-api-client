import styled from 'styled-components';

// export Card from "./Card";
// export Stock from "./Stock";
// export StockCard from "./StockCard";
// export StockCard2 from "./StockCard2";
// export SweetCard from "./SweetCard";


export const CardWrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f2229;
  // background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(226, 229, 236), rgba(0, 0, 0, 0));
  overflow: hidden;
  border-radius: 24px;

  @media (prefers-color-scheme: dark) {
    color: #8a8a8e;
    background-color: #1f2229;
    // background-color: #1d1d1f;
  }
`;
