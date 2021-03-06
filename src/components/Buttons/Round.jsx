import React, { useState } from "react";
import { Button, Text } from "@geist-ui/core";
import Icon, {ArrowUp, ArrowDown} from "@geist-ui/icons";

import styled from "styled-components";

const StyledButton = styled(Button)`
  padding: 0 !important;
  width: 2.5rem !important;
  min-width: auto !important;
  border-radius: 18px !important;
  border-width: 2px !important;
  border-color: #4b4c53;
`;

const RoundButton = ({icon, ...props}) => (
  <StyledButton icon={icon} {...props}></StyledButton>
)

// RoundButton.defaultProps = {
//   icon: ''
// }

export default RoundButton