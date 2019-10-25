import React from "react";
import styled from "styled-components";
import TechEvent from "./TechEvent";
import EventsData from "./EventsData";
import OverviewContainer from "../native/OverviewContainer";

const index = () => {
  let event_list = (
    <Container>
      {EventsData.map(item => {
        return (
          <TechEvent
            key={item.eventName}
            eventName={item.eventName}
            shortDescription={item.shortDescription}
            date={item.date}
            place={item.place}
          />
        );
      })}
    </Container>
  );
  return (
    <OverviewContainer
      title="Tech events: Greet, Meet, and Do some challenges:"
      list={event_list}
    ></OverviewContainer>
  );
};

export default index;

const Container = styled.article`
  padding: 2rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
