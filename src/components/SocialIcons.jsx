import React from "react";
import { useQuery } from "@tanstack/react-query";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton, Skeleton } from "@mui/material";
import getCollection from "../utils/getCollection";

function SocialIcons({ ...props }) {
  const {
    data: social,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["social"],
    queryFn: () => getCollection("social"),
    useErrorBoundary: true,
  });

  if (isError) {
    return <div>Error: social.error</div>;
  }

  return (
    <Box
      {...props}
      sx={{
        color: "inherit",
      }}
    >
      {isLoading ? (
        <Skeleton variant="circular" width={40} height={40} sx={{ mr: 1 }} />
      ) : (
        <Box>
          <IconButton
            href={social[0].github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href={social[0].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href={`mailto:${social[0].email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}

export default SocialIcons;
