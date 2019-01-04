import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const NextArrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 25px;
  cursor: pointer;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
    transition: transform ease-in 0.1s;
  }

  & span {
    transform: translateX(2px);
  }
`;

const RigthArrow = props => {
  return (
    <NextArrow onClick={props.goToNextSlide}>
      <FontAwesome name="angle-right" size="2x" />
    </NextArrow>
  );
};

export default RigthArrow;
