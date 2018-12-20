import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 20px 0;
  padding: 40px 0;
  min-width: 320px;
  max-width: 700px;
  background-color: #eee;
  font-family: "Raleway Regular";

  & > h2 {
    text-align: center;
    margin: 0;
  }

  & li {
    list-style: none;
  }

  @media (min-width: 701px) {
    margin: 20px auto;
  }
`;

const Form = styled.form`
  padding: 0 20px;
  & > p {
    text-align: center;
  }
`;

const FlexOuter = styled.ul`
  & li {
    margin: 10px 0
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }

  & > li > label {
    flex: 1 0 120px;
    max-width: 220px;
    padding: 3px 10px 3px 0;
    font-size: 1.2em;

    &::selection {
      background-color: pink;
      color: #fff;
    }
  }

  & > li > label + * {
    flex: 1 0 220px;
  }

  & textarea {
    margin-top: 10px;
    padding: 3px 5px;
    outline: none;
    resize: none;
    font-family: inherit;
    border: 1px solid pink;
    border-radius: 2px;
    font-size: 0.9em;
  }

  & textarea::selection {
      background-color: pink;
      color: #fff;
  }

  & input {
    outline: none;
    font-family: inherit;
    border: 1px solid pink;
    font-size: 0.9em;
    line-height: 20px;
    border-radius: 2px;
    padding: 3px 5px;
  }

  & input::selection {
    background-color: pink;
    color: #fff;
  }

  & select {
    padding: 3px 5px;
    outline: none;
    font-family: inherit;
    border: 1px solid pink;
    font-size: 0.9em;
    border-radius: 2px;
  }
`;

const FlexInner = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & label {
    margin: 0 3px;
  }
`;

const Button = styled.button`
  margin: 20px 0 20px auto;
  padding: 8px 16px;
  border: none;
  width: 220px;
  background-color: pink;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border-radius: 2px;
  outline: none;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to right, pink, lightblue);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const LotteryForm = () => {
  return (
    <FormContainer>
      <h2>Loterry form</h2>
      <Form>
        <p>Complete this form and get a chance to win Arctic Monkeys tickets</p>

        <FlexOuter>
          <li>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </li>

          <li>
            <label>Email:</label>
            <input type="text" name="email" placeholder="Enter your email" />
          </li>

          <li>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              min="14"
              max="100"
              placeholder="Enter your age"
            />
          </li>

          <li>
            <label>How would you characterise yourself:</label>
            <select defaultValue="">
              <option value="" disabled>
                -Choose an option-
              </option>
              <option value="Superfan">Superfan</option>
              <option value="Crazy fan">Crazy fan</option>
              <option value="Regular fan">Regular fan</option>
              <option value="Occasional listener">Occasional listener</option>
              <option value="Arctic monkeys who?">Arctic monkeys who?</option>
            </select>
          </li>

          <li>
            <label>Which monkey are you?</label>
            <FlexInner>
              <li>
                <label>
                  <input type="radio" id="Alex" name="type" value="Alex" />
                  Alex Turner
                </label>
              </li>

              <li>
                <label>
                  <input type="radio" id="Matt" name="type" value="Matt" />
                  Matt Helders
                </label>
              </li>

              <li>
                <label>
                  <input type="radio" id="Jamie" name="type" value="Jamie" />
                  Jamie Cook
                </label>
              </li>

              <li>
                <label>
                  <input type="radio" id="Nick" name="type" value="Nick" />
                  Nick O'Malley
                </label>
              </li>
            </FlexInner>
          </li>

          <li>
            <label>True monkeys are from:</label>
            <FlexInner>
              <li>
                <label>
                  <input type="checkbox" id="2018" name="2018" value="2018" />
                  2018
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" id="2013" name="2013" value="2013" />
                  2013
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" id="2011" name="2011" value="2011" />
                  2011
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" id="2009" name="2009" value="2009" />
                  2009
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" id="2007" name="2007" value="2007" />
                  2007
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" id="2006" name="2006" value="2006" />
                  2006
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="checkbox"
                    id="always"
                    name="always"
                    value="always"
                  />
                  All monkeys are true
                </label>
              </li>
            </FlexInner>
          </li>

          <li>
            <label>Why should you be the one to win:</label>
            <textarea
              name="story"
              rows="5"
              cols="30"
              placeholder="Write your story here..."
            />
          </li>

          <li>
            <Button type="submit">Send</Button>
          </li>
        </FlexOuter>
      </Form>
    </FormContainer>
  );
};

export default LotteryForm;
