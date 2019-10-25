import React from "react";
import Projects from "..//MyProjects/index";
import PracticeProjects from "../PracticeProjects/index";
import Courses from "../Courses/index";
import Hero from "../Hero/index";
import WorkExperience from "../WorkExperience/index";
import TechEvents from "../TechEvents/index";

const index = () => {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <PracticeProjects />
      <Courses />
      <WorkExperience />
      <TechEvents />
    </React.Fragment>
  );
};

export default index;
