import React, { Component } from "react";
import styled from "styled-components";

import { API } from "../config/keys";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  padding: 10px;
  text-align: center;

  &: hover {
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  & img {
    width: 4.3em;
    height: 4.3em;
  }
`;

class Weather extends Component {
  state = {
    items: [],
    showBack: false
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=2759794&&APPID=${API}&units=metric`
    )
      .then(response => response.json())
      .then(data => this.setState({ items: data.list }));
  }

  monthString = monthNumericValue => {
    switch (monthNumericValue) {
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "Mai";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
      default:
        return "";
    }
  };

  renderDescription = key => {
    this.setState({ item: key });
  };

  hideDescription = key => {
    this.setState({ item: "" });
  };

  render() {
    const dates =
      this.state.items &&
      this.state.items.filter(
        it => it.dt_txt.substring(10).indexOf("12:00:00") > -1
      );

    // RENDER CARDS
    const cards =
      dates &&
      dates.map(date => {
        const day = new Date(date.dt * 1000);
        const weekDay = day.getUTCDate();
        const month = this.monthString(day.getUTCMonth());
        const weatherTitle = date.weather[0].main;
        const weatherDescription = date.weather[0].description;
        const weatherPicCode = date.weather[0].icon;
        const weatherPicsrc = `http://openweathermap.org/img/w/${weatherPicCode}.png`;

        return (
          <Card
            key={date.dt}
            onMouseEnter={() => this.renderDescription(date.dt)}
            onMouseLeave={this.hideDescription}
          >
            {this.state.item && this.state.item === date.dt ? (
              <>
                <p>
                  {weekDay} {month}
                </p>
                <p>{weatherTitle}</p>
                <p>{weatherDescription}</p>
              </>
            ) : (
              <>
                <span>
                  {weekDay} {month}
                </span>
                <ImgContainer>
                  <img src={weatherPicsrc} alt="weather icon" />
                </ImgContainer>
                <div>
                  <span>{date.main.temp.toFixed(0)} &deg;</span>
                </div>
              </>
            )}
          </Card>
        );
      });

    return <Wrapper>{cards}</Wrapper>;
  }
}

export default Weather;
