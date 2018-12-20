import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import RalewayRegular from "./assets/fonts/raleway-regular.ttf";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Form from "./components/form";
import Weather from "./components/weather";

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

li {
  list-style: none;
}
`;

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <GlobalStyle />
          <Navbar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/weather" component={Weather} />
        </>
      </Router>
    );
  }
}

export default App;
