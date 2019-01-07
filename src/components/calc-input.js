import React from "react";
import styled from "styled-components";

const InputField = styled.div`
  height: 100px;
  display: flex;
  padding-right: 10px;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 3.5em;
  background-color: #4d535b;

  color: #fff;
`;

const Input = props => <InputField>{props.input}</InputField>;

export default Input;
