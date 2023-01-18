import React from "react";
import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} id="about">
      <Typography variant="h3">Hi, I am Nate!</Typography>
      <Typography
        variant="subtitle1"
        align="justify"
        sx={{
          // Set the y-axis margin to 2
          my: 2,
        }}
      >
        A self-taught full stack web developer with 2 years of experience in
        Javascript, Python and Pandas I have a passion for creating web tools
        that improve the work lives of others by automating repetitive tasks and
        implementing analytical tools.
      </Typography>
    </Box>
  );
}

export default Header;
