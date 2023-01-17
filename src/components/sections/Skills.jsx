import * as React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

import Section from "../Section";
import { skills } from "../../content/skills";
function Skills() {
  return (
    <Section title="Skills">
      <List>
        {skills.map((skill, index) => (
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
        ))}
      </List>
    </Section>
  );
}

export default Skills;
