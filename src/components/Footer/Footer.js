import React from "react";
import styled from "styled-components";
import Contacts from "./Contacts";

const Footer = () => {
  return (
    <Container>
      <SubContainer>
        <Greetings>"Don't be a stranger, lets connect"</Greetings>
        <Contacts />
      </SubContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin-top: 60px;
  width: 100%;
  background-color: #ffff;
  height: 240px;
`;

const SubContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Greetings = styled.p`
  /* color: #d0021b; */
  line-height: 60px;
  color: #39424e;
  font-size: 1.6rem;
  font-family: "Merriweather";
  font-weight: 600;
`;
