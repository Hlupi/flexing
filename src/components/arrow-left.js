import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const PrevArrow = styled.div``;

const LeftArrow = props => {
  return (
    <PrevArrow onClick={props.goToPrevSlide}>
      <FontAwesome name="angle-left" size="2x" />
    </PrevArrow>
  );
};

export default LeftArrow;
