import React from "react";
import styled from "styled-components";

const Card = props => {
  return (
    <Container>
      <h3>{`Web Project ${props.value} - some short description`}</h3>
    </Container>
  );
};

export default Card;

const Container = styled.section`
  height: 8rem;
  margin: 1rem;
  background-color: #f7f7f7;
  box-shadow: 2px 3px 5px -5px rgba(0, 0, 0, 0.75);
`;
