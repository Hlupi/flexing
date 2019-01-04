import React, { Component } from "react";
import styled from "styled-components";
import * as math from "mathjs";

import Input from "./calc-input";
import { Button, ClearButton } from "./calc-button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 600px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

class Calculator extends Component {
  state = {
    input: ""
  };

  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  handleEqual = () => {
    this.setState({
      input: math.eval(this.state.input)
    });
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Input input={this.state.input} />

          <Row>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </Row>
          <Row>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </Row>
          <Row>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </Row>
          <Row>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </Row>
          <Row>
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </Row>
        </Wrapper>
      </Container>
    );
  }
}

export default Calculator;
