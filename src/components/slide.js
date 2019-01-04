import React, { Component } from "react";
import styled from "styled-components";

const SlideContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  display: inline-block;
`;

class Slide extends Component {
  render() {
    return <SlideContainer ref={this.props.ruf} img={this.props.img} />;
  }
}

export default Slide;
