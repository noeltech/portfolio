import React from "react";
import styled from "styled-components";
import WorkExperience from "./WorkExperience";
import ExperienceData from "./ExperienceData";
import OverviewContainer from "../native/OverviewContainer";

const index = () => {
  let experience_list = (
    <Container>
      {ExperienceData.map(item => {
        return (
          <WorkExperience
            key={item.date}
            company={item.company}
            role={item.role}
            date={item.date}
          />
        );
      })}
    </Container>
  );
  return (
    <OverviewContainer
      title="Having to take different I.T. roles was quite a challenge:"
      list={experience_list}
    ></OverviewContainer>
  );
};

export default index;

const Container = styled.article`
  padding: 2rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
