import React, { useState, useEffect } from "react";
import ProjectDetail from "../native/ProjectDetail/index";
import istraktura from "../../assets/istraktura.png";
import Projects from "../MyProjects/ProjectData";
import lazada_clone from "../../assets/lazada_clone.png";

// const project = {
//   name: "Lazada Clone",
//   desc: ["A clone of lazada Philippine's website homepage"],
//   id: "lazada_clone",
//   img: lazada_clone
// };

const ProjectPage = ({ match }) => {
  const [project, setProject] = useState(null);
  let { id } = match.params;

  useEffect(() => {
    let filteredData = Projects.filter(item => item.id === id);
    setProject(filteredData[0]);

    return () => {
      setProject(null);
    };
  }, [id]);

  return (
    <React.Fragment>
      {project ? (
        <ProjectDetail
          title={project.title}
          subtitle={project.subtitle}
          img={project.img}
          details={project.longDescription}
          githubLink={project.githubLink}
          siteLink={project.siteLink}
        />
      ) : null}
    </React.Fragment>
  );
};

export default ProjectPage;
