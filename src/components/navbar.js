import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const NavContainer = styled.nav`
  height: 50px;
  background-color: #dcdde1;
  display: flex;

  & ul {
    margin: 0 20px;
    height: 100%;
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    & li {
      flex: 1 0 auto;
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
  font-family: 'Raleway Regular';
  font-size: 1.1em;

  &:hover {
    cursor pointer;
}

  
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
          <Button onClick={() => history.push('/')}>Main</Button>
        </li>
        <li>
          <Button onClick={() => history.push('/form')}>Form</Button>
        </li>
        <li>
          <Button onClick={() => history.push('/gallery')}>Gallery</Button>
        </li>
        <li>
          <Button onClick={() => history.push('/weather')}>Weather</Button>
        </li>
      </ul>
    </NavContainer>
  );
};

export default withRouter(Navbar);
