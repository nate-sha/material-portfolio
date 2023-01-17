import * as React from "react";
import PropTypes from "prop-types";
import { Box, Toolbar } from "@mui/material";

import AppBar from "./AppBar";
import Drawer from "./Drawer";
import { social } from "../../content/social";

export const navItemList = [
  {
    name: "Projects",
  },
  {
    name: "Skills",
  },
  {
    name: "Certifications",
  },
  {
    name: "Education",
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
