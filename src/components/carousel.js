import React, { Component } from "react";
import styled from "styled-components";

import LeftArrow from "./slideshow-arrow-left";
import RightArrow from "./slideshow-arrow-rigth";

const Slider = styled.div`
  margin: 100px auto;
  position: relative;
  height: 700px;
  overflow: hidden;
  white-space: nowrap;
`;

const SlideContainer = styled.div`
  display: flex;
  height: 100%;
  width: 500%
  transform: ${props =>
    props.position ? `translateX(${props.position}px)` : "translateX(0px)"};
  transition: transform ease-out 0.45s;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  display: inline-block;
`;

class Carousel extends Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1530482054429-cc491f61333b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80",
      "https://images.unsplash.com/photo-1516481605912-d34c1411504c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1508843731797-991810e0b977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1537799261701-0cf2e54a840b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
    return this.slidey.current.clientWidth;
  };

  slidey = React.createRef();

  render() {
    const renderSlides = this.state.images.map((img, index) => (
      <Slide ref={this.slidey} img={img} key={index} alt="cactus" />
    ));
    this.slidey.current && console.log(this.slidey.current.clientWidth);
    return (
      <Slider>
        <SlideContainer position={this.state.translateValue}>
          {renderSlides}
        </SlideContainer>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </Slider>
    );
  }
}

export default Carousel;
