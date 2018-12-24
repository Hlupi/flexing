import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { dogAPI } from '../config/keys';

const Container = styled.div`
  margin: 8px 0 0 -8px;
  display: flex;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  margin: 0 0 8px 8px;
  height: 250px;
  flex-grow: 1;

  &:nth-child(4n + 1) {
    flex-basis: 250px;
  }

  &:nth-child(4n + 2) {
    flex-basis: 325px;
  }

  &:nth-child(4n + 3) {
    flex-basis: 180px;
  }

  &:nth-child(4n + 4) {
    flex-basis: 380px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

class Gallery extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch(
      `https://api.thedogapi.com/v1/images/search?size=full&has_breeds=true&limit=10`,
      {
        headers: {
          'content-type': 'application/json',
          'x-api-key': `${dogAPI}`
        }
      }
    )
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }
  render() {
    const renderBreeds =
      this.state.items &&
      this.state.items.map(item => {
        const breedName = item.breeds[0].name;
        const imgSrc = item.url;
        return (
          <ImgContainer key={item.id}>
            <Link to="#">
              <img src={imgSrc} alt={breedName} />
            </Link>
          </ImgContainer>
        );
      });
    return <Container>{renderBreeds}</Container>;
  }
}
export default Gallery;
