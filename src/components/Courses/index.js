import React from "react";
import Card from "../native/Card";
import styled from "styled-components";
import OverviewContainer from "../native/OverviewContainer";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
let courses = [
  {
    title: "tylermcginnis.com",
    shortDescription:
      "The linear, project-based approach to mastering the JavaScript ecosystem",
    id: "true"
  },
  {
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    shortDescription:
      "Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!",
    id: "true"
  },
  {
    title: "The Complete Node.js Developer Course (3rd Edition)",
    shortDescription:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, Jest, and more!",
    id: "true"
  }
];

let title = "Meet my mentors (nah! just some online courses I took):";
const index = () => {
  let list = courses.map(item => {
    return (
      <ModCard
        key={item.id}
        title={item.title}
        shortDescription={item.shortDescription}
        icon={faGraduationCap}
        id={item.id}
      ></ModCard>
    );
  });

  return <OverviewContainer title={title} list={list}></OverviewContainer>;
};

export default index;

const ModCard = styled(Card)`
  cursor: default;
  pointer-events: none;
`;
