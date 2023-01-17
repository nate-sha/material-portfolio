import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

import Section from "../Section";
import { education } from "../../content/education";

export default function Education() {
  return (
    <Section title="Education">
      <List>
        {education.map((education, index) => (
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
        ))}
      </List>
    </Section>
  );
}
