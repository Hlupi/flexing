import React, { Component } from "react";
import Form from "./components/form";
import RalewayRegular from "./assets/fonts/raleway-regular.ttf";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Raleway Regular';
  src: url(${RalewayRegular});
}
body {
  margin: 0 auto;
  height: 100%;
  min-width: 320px;
}

* { 
  box-sizing: border-box;
}

*:before, *:after {
  box-sizing: inherit;
}

ul {
  padding: 0;
  margin: 0;
}
`;

const Heading = styled.h1`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Heading>Flexbox demo's</Heading>
        <Form />
      </>
    );
  }
}

export default App;
