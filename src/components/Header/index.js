import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <Container>
      <SubContainer>
        <BrandName>Projects </BrandName>
      </SubContainer>
    </Container>
  );
};

export default index;

const Container = styled.header`
  padding: 1rem;
  box-shadow: 0px 2px 6px -5px rgba(0, 0, 0, 0.75);
  background-color: #39424e;
  height: 60px;
`;
const BrandName = styled.h4`
  color: #fff;
`;

const SubContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
