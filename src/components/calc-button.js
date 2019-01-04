import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  background-color: ${props => (props.operator ? "#e0e1e6" : "#fe9241")};
  color: ${props => (props.operator ? "#888" : "#fff")};
  flex: 1;
  outline: 1px solid #888;
`;

const Clear = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  background-color: #c5c3cd;
  color: #000;
  flex: 1;
  outline: 1px solid #888;
`;

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <Wrapper
    operator={isOperator(props.children)}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </Wrapper>
);

export const ClearButton = props => (
  <Clear onClick={props.handleClear}>{props.children}</Clear>
);
