import React from "react";
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

export default function Education() {
  const {
    data: education,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["education"],
    queryFn: () => getCollection("education"),
    useErrorBoundary: true,
  });

  if (isError) {
    return <div>Error: {education.error}</div>;
  }

  return (
    <Section title="Education">
      <List>
        {isLoading ? (
          <Skeleton variant="rectangular" />
        ) : (
          education.map((education, index) => (
            <ListItem
              key={`${education.name}-${index}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ListItemText>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {education.name}
                </Typography>
                <Typography>{education.description}</Typography>
              </ListItemText>
              <Typography>{education.date}</Typography>
            </ListItem>
          ))
        )}
      </List>
    </Section>
  );
}
