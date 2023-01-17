import React from "react";
import { Typography, List, ListItem, ListItemText, Chip } from "@mui/material";

import Section from "../Section";
import { certifications } from "../../content/certifications";
function Certifications() {
  return (
    <Section title="Certifications">
      <List>
        {certifications.map((certification, index) => (
          <ListItem
            key={`${certification.name}-${index}`}
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
                {certification.name}
                {certification.isCompleted ? (
                  <Chip size="small" label="Completed" sx={{ ml: 1 }} />
                ) : (
                  <Chip size="small" label="In Progress" sx={{ ml: 1 }} />
                )}
              </Typography>
              <Typography>{certification.description}</Typography>
            </ListItemText>
            <Typography>{certification.date}</Typography>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Certifications;
