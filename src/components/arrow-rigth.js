import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const NextArrow = styled.div``;

const RigthArrow = props => {
  return (
    <NextArrow onClick={props.goToNextSlide}>
      <FontAwesome name="angle-right" size="2x" />
    </NextArrow>
  );
};

export default RigthArrow;
