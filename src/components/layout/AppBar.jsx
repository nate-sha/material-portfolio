import React from "react";
import PropTypes from "prop-types";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SocialIcons from "../SocialIcons";

function AppBar({ name, handleDrawerToggle }) {
  return (
    <MuiAppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            display: { xs: "block", sm: "block" },
            // Transform the text to uppercase
            textTransform: "uppercase",
            // Add letter spacing
            letterSpacing: "0.1em",
          }}
        >
          {name}
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <SocialIcons />
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  name: PropTypes.string.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default AppBar;
