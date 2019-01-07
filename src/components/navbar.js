import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

const NavContainer = styled.nav`
  height: 50px;
  background-color: #dcdde1;
  display: flex;

  @media (max-width: 700px) {
    height: 100px;
  }

  & ul {
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;

    & li {
      flex: 1 1 auto;
      display: flex;
      align-items: center
      justify-content: center;

      &:hover {
        cursor pointer;
        background-color: #f5f6fa;
    }
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: #353b48;
  height: 100%;
  font-family: 'Raleway';
  font-size: 1.1em;
  text-align: center;

  @media( max-width: 350px) {
    font-size: 1em;
  }

  &:hover {
    cursor pointer;
  }

`;

const Navbar = props => {
  const { history } = props;
  return (
    <NavContainer>
      <ul>
        <li onClick={() => history.push("/")}>
          <Button>Main</Button>
        </li>
        <li onClick={() => history.push("/form")}>
          <Button>Form</Button>
        </li>
        <li onClick={() => history.push("/gallery")}>
          <Button>Gallery</Button>
        </li>
        <li onClick={() => history.push("/weather")}>
          <Button>Weather</Button>
        </li>
        <li onClick={() => history.push("/landing")}>
          <Button>Landing</Button>
        </li>
        <li onClick={() => history.push("/sliding")}>
          <Button>Slideshaw</Button>
        </li>
        <li onClick={() => history.push("/calculate")}>
          <Button>Calculator</Button>
        </li>
        <li onClick={() => history.push("/social")}>
          <Button>Social Card</Button>
        </li>
        <li onClick={() => history.push("/carousel")}>
          <Button>Carousel</Button>
        </li>
      </ul>
    </NavContainer>
  );
};

export default withRouter(Navbar);
