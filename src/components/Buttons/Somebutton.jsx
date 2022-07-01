import React, { useState } from "react";
import { Button as GButton, Text } from "@geist-ui/core";
import Icon, {ArrowUp, ArrowDown} from "@geist-ui/icons";

import styled from "styled-components";

const SomeButton = styled.a`
  color: red;
`;

export function ButtonExample() {
  const [number, setNumber] = useState(0);
  return (
    <SomeButton>
      <Text>{number}</Text>
      <GButton
        icon={<ArrowUp />}
        size="small"
        type={"success"}
        onClick={() => setNumber((number) => number + 1)}
      >
        +
      </GButton>
      <GButton
        icon={<ArrowDown />}
        size="large"
        type={"error"}
        ghost
        onClick={() => setNumber((number) => number - 1)}
      >
        -
      </GButton>
      {/*<Icon.ArrowUp/>*/}
    </SomeButton>
  );
}
// import { Text, Spinner } from "@geist-ui/core";
// import { useEffect, useState } from "react";

// export default function SpinnerExample() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 2 * 1000);
//   }, []);

//   return (
//     <div>{loading ? <Spinner size="large" /> : <Text> Loaded!</Text>}</div>
//   );
// }

export const Button = styled.button`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fontColor};
`

Button.defaultProps = {
    theme: {
        bg: 'white',
        fontColor: 'black'
    }
}

// const Button = styled.a`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: black;
//   `}
// `