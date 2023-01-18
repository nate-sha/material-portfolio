import React from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

export default function ThemeProvider({ children }) {
  // Check the user's preferred color scheme is dark and retrun true, otherwise return false
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      body1: {
        fontSize: "1.1rem",
      },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
