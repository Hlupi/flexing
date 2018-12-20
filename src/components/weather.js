import React, { Component } from "react";
import styled from "styled-components";

import { API } from "../config/keys";

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
    items: null
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=2759794&&APPID=${API}&units=metric`
    )
      .then(response => response.json())
      .then(data => this.setState({ items: data.list }));
  }

  render() {
    const dates =
      this.state.items &&
      this.state.items.filter(
        it => it.dt_txt.substring(10).indexOf("12:00:00") > -1
      );
    console.log(dates);

    const tempPerDay = dates && dates.map(date => date.main.temp);
    console.log(tempPerDay);
    // console.log(this.state.items);
    const weatherPic = this.state.items && this.state.items[0].weather[0].icon;

    const weatherPicSrc =
      weatherPic && `http://openweathermap.org/img/w/${weatherPic}.png`;

    return (
      <Card>
        <span>Today</span>
        <ImgContainer>
          <img src={weatherPicSrc} alt="weather icon" />
        </ImgContainer>
        <div>
          <span>10 &deg;</span>&nbsp;
          <span>2 &deg;</span>
        </div>
      </Card>
    );
  }
}

export default Weather;
