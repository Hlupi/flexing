import React, { Component } from "react";
import styled from "styled-components";

import Slide from "./slide";
import LeftArrow from "./arrow-left";
import RightArrow from "./arrow-rigth";

const Slider = styled.div`
  position: relative;
  height: 700px;
  width: 700px;
`;

class Slideshow extends Component {
  state = {
    images: [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    currentIndex: 0
  };

  goToPrevSlide = () => {
    if (this.state.currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
    }
  };

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };

  render() {
    const renderSlides = this.state.images.map((img, index) => {
      return <Slide key={index} img={img} />;
    });
    return (
      <Slider>
        <h1>Imma slide you real good</h1>
        {renderSlides}
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </Slider>
    );
  }
}
export default Slideshow;
