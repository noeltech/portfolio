import React from "react";
import styled from "styled-components";
import Card from "./Card";
let project = ["1", "2", "3", "4"];
const index = () => {
  let project_list = project.map(item => {
    return <Card key={item} value={item}></Card>;
  });

  return (
    <Container>
      <h2>I'd like to share with you some projects I did.</h2>
      {project_list}
    </Container>
  );
};

export default index;

const Container = styled.article`
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 0px 2px 6px -5px rgba(0, 0, 0, 0.75);
`;
