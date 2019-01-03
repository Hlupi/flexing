import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import PoiretOne from "./assets/fonts/poiret-one-regular.ttf";
import Rajdhani from "./assets/fonts/rajdhani-regular.ttf";
import Raleway from "./assets/fonts/raleway-regular.ttf";
import SairaCondensed from "./assets/fonts/saira-condensed-regular.ttf";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Form from "./components/form";
import Gallery from "./components/gallery";
import Weather from "./components/weather";
import LandingPage from "./components/landing-page";
import Slideshow from "./components/slideshow";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Raleway';
  src: url(${Raleway});
}

@font-face {
  font-family: 'Poiret One';
  src: url(${PoiretOne});
}

@font-face {
  font-family: 'Rajdhani';
  src: url(${Rajdhani});
}

@font-face {
  font-family: 'Saira Condensed';
  src: url(${SairaCondensed});
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
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/sliding" component={Slideshow} />
        </>
      </Router>
    );
  }
}

export default App;
