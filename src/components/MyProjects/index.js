import React from "react";
import OverviewContainer from "../native/OverviewContainer";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import Projects from "./ProjectData";
import Card from "../native/Card";

let title = "Check some of my awesome projects:";

const mainProjects = Projects.filter(item => item.category === "major");

const index = () => {
  let project_list = mainProjects.map(item => {
    return (
      <Card
        key={item.id}
        title={item.title}
        shortDescription={item.shortDescription}
        icon={faWindowRestore}
        id={item.id}
      ></Card>
    );
  });
  return (
    <OverviewContainer title={title} list={project_list}></OverviewContainer>
  );
};

export default index;
