import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  width: 5em;
  text-align: center;

  &: hover {
    border: 1px solid #eee;
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  & svg {
    width: 4.2em;
    height: 4.2em;
    fill: yellowgreen;
  }
`;

class Weather extends Component {
  state = {
    items: []
  };

  componentDidMount() {}

  render() {
    return (
      <Card>
        <span>Today</span>
        <ImgContainer />
        <div>
          <span>10 &deg;</span>&nbsp;
          <span>2 &deg;</span>
        </div>
      </Card>
    );
  }
}

export default Weather;
