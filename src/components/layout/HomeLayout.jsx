import * as React from "react";
import PropTypes from "prop-types";
import { Box, Toolbar, Container } from "@mui/material";

import AppBar from "./AppBar";
import Drawer from "./Drawer";
import { social } from "../../content/social";

export const navItemList = [
  {
    name: "Projects",
  },
  {
    name: "Certifications",
  },
  {
    name: "Education",
  },
  {
    name: "Skills",
  },
];

function HomeLayout({ children }) {
  const { name } = social;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        name={name}
        handleDrawerToggle={handleDrawerToggle}
        navItemList={navItemList}
      />
      <Drawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        navItemList={navItemList}
        name={name}
      />
      <Container maxWidth="md" sx={{ p: 3 }}>
        {/* Add toolbar to fix the position of the main content under the fixed AppBar */}
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
