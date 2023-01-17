import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider, Paper } from "@mui/material";
function Section({ title, children }) {
  return (
    <Paper
      id={title.toLowerCase()}
      sx={{
        my: 5,
        p: 2,
      }}
    >
      <Typography
        component="section"
        variant="h4"
        align="left"
        marginBottom={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {title || "Title"}
      </Typography>
      <Divider />
      {children}
    </Paper>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
