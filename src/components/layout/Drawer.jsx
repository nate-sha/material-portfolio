import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Drawer as MuiDrawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";

import SocialIcons from "../SocialIcons";

const drawerWidth = 240;

function Drawer({ mobileOpen, handleDrawerToggle, navItemList, name }) {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Avatar
        alt="Profile Picture"
        src="/src/assets/profile.jpeg"
        sx={{ width: 100, height: 100, margin: "auto", mt: 2 }}
      />
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          display: { xs: "block", sm: "block" },
          mt: 2,
          // Transform the text to uppercase
          textTransform: "uppercase",
          // Add letter spacing
          letterSpacing: "0.1em",
        }}
      >
        {name}
      </Typography>
      <SocialIcons />
      <Divider />
      <List>
        {navItemList.map((item, index) => (
          <ListItem key={`drawer-${item.name}-${index}`} disablePadding>
            <ListItemButton
              href={`#${item.name.toLowerCase()}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box component="nav">
      <MuiDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </MuiDrawer>
    </Box>
  );
}

Drawer.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  navItemList: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Drawer;
