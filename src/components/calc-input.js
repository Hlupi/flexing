import React from "react";
import styled from "styled-components";

const InputField = styled.div`
  height: 4em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.4em;
  background-color: #000;
  color: #fff;
  padding: 2.5em;
  outline: 1px solid #888;
`;

const Input = props => <InputField>{props.input}</InputField>;

export default Input;
