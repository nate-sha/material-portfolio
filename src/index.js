import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import ThemeProvider from "./components/ThemeProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
