import React, { Component } from "react";
import { catAPI } from "../config/keys";
import styled from "styled-components";

const ProductFilter = styled.nav`
  display: flex;

  & h1 {
    margin-left: 10px;
    flex-grow: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Sort = styled.div`
  display: flex;
`;

const Collection = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 5px;
  padding: 5px;
  flex: 1 15%;
  border: 1px solid #8d929b;
  border-radius: 2px;

  @media (max-width: 920px) {
    flex: 1 20%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  & img {
    width: 100%;
  }
`;

const Info = styled.div`
  margin-top: auto;
`;

class LandingPage extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search/?limit=30&size=thumb", {
      headers: {
        "content-type": "application/json",
        "x-api-key": `${catAPI}`
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const renderCards =
      this.state.items &&
      this.state.items.map(item => {
        return (
          <Card key={item.id}>
            <ImgContainer>
              <img src={item.url} alt="Kitty" />
            </ImgContainer>
            <Info>
              <h5>kitty</h5>
              <h6>$1000</h6>
            </Info>
          </Card>
        );
      });
    return (
      <>
        <ProductFilter>
          <h1>Priceless kitties</h1>
          <Sort>
            <Collection>
              <label>Filter by:</label>
              <select>
                <option>All Cats</option>
              </select>
            </Collection>

            <Collection>
              <label>Sort by:</label>
              <select>
                <option>Featured</option>
              </select>
            </Collection>
          </Sort>
        </ProductFilter>

        <Products>{renderCards}</Products>
      </>
    );
  }
}

export default LandingPage;
