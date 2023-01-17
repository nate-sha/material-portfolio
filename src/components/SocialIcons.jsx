import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton } from "@mui/material";

import { social } from "../content/social";

function SocialIcons({ ...props }) {
  const { email, github, linkedin } = social;

  return (
    <Box
      {...props}
      sx={{
        color: "inherit",
      }}
    >
      <IconButton
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <EmailIcon />
      </IconButton>
    </Box>
  );
}

export default SocialIcons;
