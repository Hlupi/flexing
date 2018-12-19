import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  font-family: "Raleway Regular";
  min-width: 320px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
  background-color: #eee;

  & > h2 {
    text-align: center;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 800px;
  & > p {
    text-align: center;
  }
`;

const FlexOuter = styled.ul`
  & li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  & > li > label {
    flex: 1 0 120px;
    max-width: 220px;
    text-align: right;
    padding: 3px 10px 3px 0;
  }

  & > li > label + * {
    flex: 1 0 220px;
  }

  & textarea {
    outline: none;
    resize: none;
    font-family: inherit;
  }

  & input {
    outline: none;
    font-family: inherit;
  }

  & select {
    outline: none;
    font-family: inherit;
  }
`;

const FlexInner = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Button = styled.button`
  margin: 20px 0 20px auto;
  padding: 8px 16px;
  border: none;
  width: 200px;
  background-color: pink;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border-radius: 2px;
  outline: none;

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
            <input type="email" name="email" placeholder="Enter your email" />
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
