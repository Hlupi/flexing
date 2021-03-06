import React, { Component } from "react";
import styled from "styled-components";

import Slide from "./slide";
import LeftArrow from "./slideshow-arrow-left";
import RightArrow from "./slideshow-arrow-rigth";

const Slider = styled.div`
  margin: 100px auto;
  position: relative;
  width: 900px;
  height: 700px;

  overflow: hidden;
  white-space: nowrap;
`;

const SlideWrapper = styled.div`
  position: relative;
  height: 100%;
  width: ${props => `${props.width}%`};
  transform: ${props =>
    props.position ? `translateX(${props.position}px)` : "translateX(0px)"};
  transition: transform ease-out 0.45s;
`;

class Slideshow extends Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      "https://images.unsplash.com/photo-1425736317462-a103b1303a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ],
    currentIndex: 0,
    translateValue: 0
  };

  goToPrevSlide = () => {
    if (this.state.currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
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
    return this.slide.current.clientWidth;
  };

  slide = React.createRef();

  render() {
    const renderSlides = this.state.images.map((img, index) => (
      <Slide
        siblings={this.state.images.length}
        ruf={this.slide}
        key={index}
        img={img}
      />
    ));
    return (
      <Slider>
        <SlideWrapper
          width={this.state.images.length * 100}
          position={this.state.translateValue}
        >
          {renderSlides}
        </SlideWrapper>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </Slider>
    );
  }
}
export default Slideshow;
