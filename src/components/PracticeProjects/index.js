import React from "react";

import OverviewContainer from "../native/OverviewContainer";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import Projects from "../MyProjects/ProjectData";
import Card from "../native/Card";

let title = "Got some mini projects here for my learning:";

const minorProjects = Projects.filter(item => item.category === "minor");
const index = () => {
  let project_list = minorProjects.map(item => {
    return (
      <Card
        key={item.id}
        title={item.title}
        shortDescription={item.shortDescription}
        icon={faFileCode}
        id={item.id}
      ></Card>
    );
  });
  return (
    <OverviewContainer title={title} list={project_list}></OverviewContainer>
  );
};

export default index;
