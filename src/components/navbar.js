import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

const NavContainer = styled.nav`
  padding: 5px;
  height: 50px;
  background-color: #eee;
  display: flex;

  & ul {
    margin: 0 20px;
    height: 100%;
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    & li {
      display: flex;
      align-items: center;
    }
  }
`;

const Button = styled.button`

  border: none;
  outline: none;
  background-color: #eee;
  height: 100%;
  font-family: 'Raleway Regular';
  font-size: 1.1em;
  border-radius: 14px;

  &:hover {
    cursor pointer;
    background-color: #000;
    color: #fff;
  }

  &:active {
      transform: translateY(1px);
  }
`;

const Navbar = props => {
  const { history } = props;
  return (
    <NavContainer>
      <ul>
        <li>
          <Button onClick={() => history.push("/")}>Main</Button>
        </li>
        <li>
          <Button onClick={() => history.push("/form")}>Form</Button>
        </li>
        <li>
          <Button>Photo's</Button>
        </li>
        <li>
          <Button onClick={() => history.push("/weather")}>Weather</Button>
        </li>
      </ul>
    </NavContainer>
  );
};

export default withRouter(Navbar);
