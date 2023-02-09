import * as React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Toolbar,
  Container,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import getCollection from "../../utils/getCollection";

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
  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getCollection("social"),
    useErrorBoundary: true,
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (isError) {
    return <div>Error: profile.error</div>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        name={profile[0].name}
        handleDrawerToggle={handleDrawerToggle}
        navItemList={navItemList}
      />
      <Drawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        navItemList={navItemList}
        name={profile[0].name}
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
