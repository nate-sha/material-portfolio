import * as React from "react";
import getCollection from "../../utils/getCollection";
import { useQuery } from "@tanstack/react-query";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Skeleton,
} from "@mui/material";

import Section from "../Section";

function Skills() {
  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: () => getCollection("skills"),
    useErrorBoundary: true,
  });

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Section title="Skills">
      <List>
        {isLoading ? (
          <Skeleton variant="rectangular" />
        ) : (
          skills.map((skill, index) => (
            <ListItem key={`${skill.name}-${index}`}>
              <ListItemText>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography>{skill.description}</Typography>
              </ListItemText>
            </ListItem>
          ))
        )}
      </List>
    </Section>
  );
}

export default Skills;
