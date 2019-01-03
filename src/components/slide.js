import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  heigth: 100%;
  width: 100%;
`;

const slide = props => {
  return (
    <ImgContainer>
      <img src={props.img} />
    </ImgContainer>
  );
};

export default slide;
