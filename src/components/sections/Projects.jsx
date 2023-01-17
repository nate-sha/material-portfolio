import React from "react";
import Section from "../Section";
import ProjectItem from "../ProjectItem";
import projects from "../../content/projects";

function Projects() {
  return (
    <Section title="Projects">
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
