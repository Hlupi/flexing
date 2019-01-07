import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const Container = styled.div`
  margin: 100px auto;
  padding: 5px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  max-width: 600px;
  display: flex;
  font-family: Raleway;

  @media (max-width: 450px) {
    margin: 100px 10px;
  }
`;

const LogoContainer = styled.div`
  margin: 0 5px;
  flex: 1;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  height: 60px;
  width: 60px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
`;

const PostContainer = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
`;

const Thumbnail = styled.div`
  padding: 5px;
  background-color: orange;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
  }
`;

const Heading = styled.h2`
  margin: 20px 30px;
  color: #fff;
  font-size: 3em;
  align-self: center;

  @media (max-width: 450px) {
    font-size: 2em;
    margin: 0 5px;
  }
`;

const AuthorContainer = styled.div`
  padding: 2px;
  background-color: #fff;
  align-self: flex-end;
  display: flex;
  align-items: center;
`;

const AuthorName = styled.span`
  margin-right: 4px;
  color: orange;
  font-size: 1.5em;

  @media (max-width: 450px) {
    font-size: 1em;
  }
`;
const AuthorPic = styled.div`
  display: inline-block;
  width: 37px;
  height: 37px;
  background-image: linear-gradient(#e66465, #9198e5);

  @media (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`;

const Description = styled.div`
  padding: 5px;
`;

const Stats = styled.div`
  height: 40px;
  display: flex;
  align-items: flex-end;

  & > div {
    margin-right: 20px;
  }
`;

const SocialCard = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>
          <span>DEV</span>
        </Logo>
      </LogoContainer>
      <ContentContainer>
        <InfoContainer>
          <div>
            <b>The practical Dev</b> @ThePracticalDev &middot; Sep 10
          </div>
          <div>Learning React? Start Small.</div>
          <div> author: @me </div>
        </InfoContainer>

        <PostContainer>
          <Thumbnail>
            <Icon>
              <span>DEV</span>
            </Icon>
            <Heading>Learning React? Start Small.</Heading>
            <AuthorContainer>
              <AuthorName>Jul M</AuthorName>
              <AuthorPic />
            </AuthorContainer>
          </Thumbnail>
          <Description>
            <div>
              <b>Leaning React? Start Small.</b>
            </div>
            <div>
              Can't pry yourself away from the tutorials? The cure is to make
              tiny little experiment apps.
            </div>
            <div>dev.to</div>
          </Description>
        </PostContainer>
        <Stats>
          <div>
            <FontAwesome name="comment" /> <span>2</span>
          </div>

          <div>
            <FontAwesome name="retweet" /> <span>47</span>
          </div>
          <div>
            <FontAwesome name="heart" /> <span>190</span>
          </div>
          <div>
            <FontAwesome name="envelope" /> <span>2</span>
          </div>
        </Stats>
      </ContentContainer>
    </Container>
  );
};

export default SocialCard;
