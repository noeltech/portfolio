import React from "react";
import styled from "styled-components";
import heroImage from "../../assets/maps_perspective.png";

const index = () => {
  return (
    <Container>
      <Subcontainer>
        <GreetingsWrapper>
          <Greetings>Hi There, Nice to meet you! </Greetings>
          <Description>
            Do you like the internet and Maps? because I do.
          </Description>
          <Description>
            I'm <b>Noel Bajande</b> and I love building web maps.
          </Description>
          <Description>
            Would you care if I show you some amazing things?
          </Description>
        </GreetingsWrapper>
        {/* <HeroImage src={heroImage} /> */}
      </Subcontainer>
    </Container>
  );
};

export default index;

const Container = styled.section`
  max-width: 100%;
  height: 90vh;

  /* box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2); */
  /* background-color: rgb(14, 20, 30); */
  background-color: #fff;
`;

const GreetingsWrapper = styled.div`
  padding-top: 30vh;
`;
const HeroImage = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 26vh;
  margin-right: 80px;
`;

const Subcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
`;

const Greetings = styled.h1`
  color: #39424e;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: "Merriweather";
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 32px;
  /* color: #738f93; */
  color: #192735;
`;
