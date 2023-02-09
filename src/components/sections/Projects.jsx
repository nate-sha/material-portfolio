import React from "react";
import { useQuery } from "@tanstack/react-query";
import Section from "../Section";
import ProjectItem from "../ProjectItem";
import getCollection from "../../utils/getCollection";
import { Alert, Skeleton, Box } from "@mui/material";

function Projects() {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getCollection("Projects"),
    useErrorBoundary: true,
  });

  if (isError) {
    return <div>Error: {projects.error}</div>;
  }

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
      {isLoading ? (
        <Skeleton variant="rectangular" />
      ) : (
        <Box>
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
        </Box>
      )}
    </Section>
  );
}

export default Projects;
