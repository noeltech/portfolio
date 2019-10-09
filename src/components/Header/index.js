import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <Container>
      <h2>Hi There!</h2>
      <h2>It's me, Noel Bajande, you're friendly Web Developer</h2>
    </Container>
  );
};

export default index;

const Container = styled.header`
  padding: 1rem;
  box-shadow: 0px 2px 6px -5px rgba(0, 0, 0, 0.75);
`;
