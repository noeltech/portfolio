import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const WorkExperience = props => {
  return (
    <Container>
      {props.eventName && (
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
        </Icon>
      )}
      <SubContainer>
        <EventName>{props.eventName}</EventName>
        <Description>{props.shortDescription} </Description>
        <DateAndPlace> {props.date}</DateAndPlace>
      </SubContainer>
    </Container>
  );
};

export default WorkExperience;

const Container = styled.li`
  display: flex;
  margin-left: 16px;
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
const EventName = styled.h3`
  font-size: 18px;
  word-wrap: wrap;
  color: #39424e;
`;

const Description = styled.p`
  margin-top: 2px;
  color: #738f93;
  line-height: 26px;
`;

const DateAndPlace = styled.p`
  font-size: 15px;
  color: #738f93;
  line-height: 26px;
  font-style: italic;
`;
