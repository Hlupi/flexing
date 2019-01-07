import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  background-color: ${props => (props.operator ? "#7d8187" : "#fe9241")};
  color: #fff;
  flex: 1;
  outline: 1px solid #40454c;
`;

const Clear = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  background-color: #7d8187;
  color: #fff;
  flex: 1;
  border-top: 1px solid #40454c;
`;

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <Wrapper
    operator={isOperator(props.children) ? 1 : 0}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </Wrapper>
);

export const ClearButton = props => (
  <Clear onClick={props.handleClear}>{props.children}</Clear>
);
