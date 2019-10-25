import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const WorkExperience = props => {
  return (
    <Container>
      {props.company && (
        <Icon>
          <FontAwesomeIcon icon={faBriefcase} size="3x" />
        </Icon>
      )}
      <SubContainer>
        <CompanyName>{props.company}</CompanyName>
        <Role>{props.role} </Role>
        <DateWorked> {props.date}</DateWorked>
      </SubContainer>
    </Container>
  );
};

export default WorkExperience;

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 480px;
  padding: 2rem 1rem;
`;

const SubContainer = styled.div`
  margin-left: 2rem;
`;

const Icon = styled.div`
  opacity: 0.5;
`;
const CompanyName = styled.h3`
  font-size: 18px;
  word-wrap: wrap;
  color: #39424e;
`;

const Role = styled.p`
  margin-top: 2px;
  color: #738f93;
  line-height: 26px;
`;

const DateWorked = styled.p`
  font-size: 15px;
  color: #738f93;
  line-height: 26px;
  font-style: italic;
`;
