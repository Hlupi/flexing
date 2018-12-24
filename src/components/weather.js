import React, { Component } from 'react';
import styled from 'styled-components';

import { weatherAPI } from '../config/keys';

const FlexContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: 'Rajdhani';
  background-image: url('https://images.unsplash.com/photo-1529913666176-6149920030b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-position: bottom;

  @media (min-height: 1024px) {
    height: 100vh;
  }
`;

const InnerFlex = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  margin: 10px 0;
  padding: 20px 10px;
  width: 150px;
  height: 175px;
  border-radius: 5px;
  background-color: rgba(120, 125, 132, 0.8);
  color: #f2f4f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (orientation: landscape) {
    margin: 10px 5px;
  }

  &: hover {
    cursor: pointer;
    background-color: rgba(120, 125, 132, 0.5);
  }
`;

const CureentHeading = styled.span`
  font-size: 1.4em;
  color: #f2f4f7;
`;

const CurrentCard = styled.div`
  margin: 20px 0;
  padding: 20px 10px;
  width: 300px;
  height: 350px
  align-self: center;
  background-color: rgba(120, 125, 132, 0.8);
  color: #f2f4f7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;;
  
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
        const dayDate = day.getUTCDate();
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
                  {dayDate} {month}
                </span>
                <span>{weatherTitle}</span>
                <span>
                  (<i>{weatherDescription}</i>)
                </span>
              </>
            ) : (
              <>
                <span>
                  {dayDate} {month}
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
    const currentDay =
      this.state.current && new Date(this.state.current.dt * 1000);
    const currentDate = this.state.current && currentDay.getUTCDate();
    const currentMonth =
      currentDay && this.monthString(currentDay.getUTCMonth());
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
        <span>
          {currentDate} {currentMonth}
        </span>
        <span>{currentTitle}</span>
        <span>
          (<i>{currentDescription}</i>)
        </span>
        <ImgContainer>
          <img src={currentPicsrc} alt="current weather icon" />
        </ImgContainer>

        <span>Current temperature: {currentTemp}&deg;</span>
      </CurrentCard>
    );

    return (
      <FlexContainer>
        <InnerFlex>{cards}</InnerFlex>
        <CureentHeading>~ Current weather ~</CureentHeading>
        {currentCard}
      </FlexContainer>
    );
  }
}

export default Weather;
