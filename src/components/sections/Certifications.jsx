import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  Skeleton,
} from "@mui/material";

import getCollection from "../../utils/getCollection";
import Section from "../Section";

function Certifications() {
  const {
    data: certifications,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["certifications"],
    queryFn: () => getCollection("certifications"),
    useErrorBoundary: true,
  });

  if (isError) {
    return <div>Error: {certifications.error}</div>;
  }
  return (
    <Section title="Certifications">
      <List>
        {isLoading ? (
          <Skeleton variant="rectangular" />
        ) : (
          <Box>
            {certifications.map((certification, index) => (
              <ListItem
                key={`${certification.name}-${index}`}
                sx={{
                  display: "flex-start",
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
          </Box>
        )}
      </List>
    </Section>
  );
}

export default Certifications;
