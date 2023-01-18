import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
} from "@mui/material";

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
              display: "flex-start",
              // justifyContent: "space-between",
              // alignItems: "space-between",
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
                <Box
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  {certification.isCompleted ? (
                    <Chip size="small" label="Completed" sx={{ ml: 1 }} />
                  ) : (
                    <Chip size="small" label="In Progress" sx={{ ml: 1 }} />
                  )}
                </Box>
              </Typography>
              <Typography>{certification.description}</Typography>
            </ListItemText>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <Typography>{certification.date}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Certifications;
