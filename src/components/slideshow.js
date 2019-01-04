import React, { Component } from "react";
import styled from "styled-components";

import Slide from "./slide";
import LeftArrow from "./slideshow-arrow-left";
import RightArrow from "./slideshow-arrow-rigth";

const Slider = styled.div`
  margin: 100px auto;
  position: relative;
  width: 800px;
  height: 700px;

  overflow: hidden;
  white-space: nowrap;
`;

const SlideWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform: ${props =>
    props.position ? `translateX(${props.position}px)` : "translateX(0px)"};
  transition: transform ease-out 0.45s;
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
    currentIndex: 0,
    translateValue: 0
  };

  goToPrevSlide = () => {
    if (this.state.currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
    }
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    console.log(this.slide.current.clientWidth);
    return this.slide.current.clientWidth;
    // return this.slide.current.refs.slide.clientWidth;
  };

  slide = React.createRef();

  render() {
    const renderSlides = this.state.images.map((img, index) => (
      <Slide ruf={this.slide} key={index} img={img} />
    ));
    return (
      <Slider>
        <SlideWrapper position={this.state.translateValue}>
          {renderSlides}
        </SlideWrapper>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </Slider>
    );
  }
}
export default Slideshow;
