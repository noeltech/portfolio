import React from "react";
import styled from "styled-components";
import Card from "./Card";

const index = props => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <SubContainer>{props.list}</SubContainer>
    </Container>
  );
};

export default index;

const Container = styled.article`
  max-width: 1024px;
  margin: 100px auto;
  list-style: none;
`;

const SubContainer = styled.ul`
  margin: 40px 0;
  padding: 1rem 0;
  list-style: none;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;
const Title = styled.h2`
  /* color: #d0021b; */
  line-height: 60px;
  color: #738f93;
  /* margin-left: 1rem; */
  font-family: "Merriweather";
  font-weight: 600;
`;
