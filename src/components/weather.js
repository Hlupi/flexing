import React, { Component } from 'react';
import styled from 'styled-components';

import { weatherAPI } from '../config/keys';

const FlexContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const InnerFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  margin: 10px 0;
  padding: 20px 10px;
  flex: 0 1 140px;
  height: 200px;
  border: 1px solid blue;
  border-radius: 5px;

  &: hover {
    cursor: pointer;
  }
`;

const CurrentCard = styled.div`
  margin: 50px 0;
  padding: 20px 10px;
  width: 300px;
  height: 350px
  align-self: center;
  border: 1px solid blue;
  border-radius: 5px;
`;

const ImgContainer = styled.div`
  & img {
    width: 4.3em;
    height: 4.3em;
  }
`;

class Weather extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=2759794&&APPID=${weatherAPI}&units=metric`
    )
      .then(response => response.json())
      .then(data => this.setState({ items: data.list }));
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=2759794&&APPID=${weatherAPI}&units=metric`
    )
      .then(response => response.json())
      .then(data => this.setState({ current: data }));
  }

  monthString = monthNumericValue => {
    switch (monthNumericValue) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'Mai';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
      default:
        return '';
    }
  };

  renderDescription = key => {
    this.setState({ item: key });
  };

  hideDescription = () => {
    this.setState({ item: '' });
  };

  render() {
    const dates =
      this.state.items &&
      this.state.items.filter(
        it => it.dt_txt.substring(10).indexOf('12:00:00') > -1
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
                <span>
                  {weekDay} {month}
                </span>
                <p>{weatherTitle}</p>
                <p>({weatherDescription})</p>
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

    // Current weather data
    const currentTitle =
      this.state.current && this.state.current.weather[0].main;
    const currentDescription =
      this.state.current && this.state.current.weather[0].description;
    const currentTemp =
      this.state.current && this.state.current.main.temp.toFixed(0);
    const currentPicCode =
      this.state.current && this.state.current.weather[0].icon;
    const currentPicsrc =
      currentPicCode && `http://openweathermap.org/img/w/${currentPicCode}.png`;

    const currentCard = (
      <CurrentCard>
        <p>Current weather</p>
        <p>{currentTitle}</p>
        <p>({currentDescription})</p>
        <img src={currentPicsrc} alt="current weather icon" />
        <p>Current temperature: {currentTemp}&deg;</p>
      </CurrentCard>
    );

    return (
      <FlexContainer>
        <InnerFlex>{cards}</InnerFlex>
        {currentCard}
      </FlexContainer>
    );
  }
}

export default Weather;
