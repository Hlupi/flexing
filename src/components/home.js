import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";

const Heading = styled.h1`
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      {/* <Heading>What's flexing mi amigo?</Heading> */}
      <Sidebar />
    </div>
  );
};

export default Home;
