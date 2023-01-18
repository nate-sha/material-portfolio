import React from "react";
import Section from "../Section";
import ProjectItem from "../ProjectItem";
import projects from "../../content/projects";
import { Alert } from "@mui/material";

function Projects() {
  return (
    <Section title="Projects" key="alert-box">
      {/* Add an alert box */}
      <Alert severity="info">
        This section is still in development. I am adding more projects shortly.
        Please come back later{" "}
        <span role="img" aria-label="smily face">
          🙂
        </span>
      </Alert>
      {projects.map((project, index) => (
        <ProjectItem
          key={`${project.name}-${index}`}
          name={project.name}
          description={project.description}
          githubUrl={project.githubUrl}
          bodyItems={project.bodyItems}
          techStack={project.techStack}
          stackItems={project.stackItems}
        />
      ))}
    </Section>
  );
}

export default Projects;
