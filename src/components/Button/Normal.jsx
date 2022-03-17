import React, { useState } from "react";
import { Button, Text } from "@geist-ui/core";
import Icon, {ArrowUp, ArrowDown} from "@geist-ui/icons";

import styled from "styled-components";

const StyledButton = styled(Button)`
  padding: 0 !important;
  width: 2.5rem !important;
  min-width: auto !important;
  border-width: 0 !important;
`;

const NormalButton = ({icon, ...props}) => (
  <StyledButton icon={icon} {...props}></StyledButton>
)

export default NormalButton;