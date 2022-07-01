import React, { useState } from "react";
import { Button, Text } from "@geist-ui/core";
import Icon, {ArrowUp, ArrowDown} from "@geist-ui/icons";
import styled from "styled-components";

const StyledButton = styled(Button)`
  padding: 0 !important;
  width: 2.5rem !important;
  min-width: auto !important;
  border-width: 1px solid #ddd !important;
`;

const NormalButton = ({icon, ...props}) => {

  // const action = {
  //   // name: 'alert',
  //   name: 'cancel',
  //   // handler: () => alert('alert from toast'),
  //   handler: (event, cancel) => cancel(),
  //   passive: true
  // }
  // const click = () => setToast({
  //   text: 'You added BSP to your Watchlist',
  //   actions: [action],
  // })

  // return (<Button onClick={() => click()}> Display</Button>);

  return (
    <StyledButton icon={icon} {...props}></StyledButton>
  )
}

export default NormalButton;