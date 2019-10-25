import React from "react";
import styled from "styled-components";

const WriteUps = props => {
  let paragraphs = props.details.map(item => {
    return <Paragraph key={item}>{item}</Paragraph>;
  });

  return <Container>{paragraphs}</Container>;
};

export default WriteUps;

const Container = styled.div`
  padding-top: 80px;
  max-width: 900px;
  margin: 0 auto;
`;
const Paragraph = styled.p`
  color: #39424e;
  line-height: 2rem;
  font-size: 1.3rem;
  margin-top: 30px;
`;

const Indent = styled.span`
  width: 60px;
`;
