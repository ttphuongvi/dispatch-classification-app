import React from "react";

import dataRoutes from "../router/dataRoutes";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

const drawerWidth = 240;

const TemplatePage = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {dataRoutes.map((value, index) => (
          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start" }}
            key={index}
            disablePadding
          >
            <ListItemButton
              component={NavLink}
              to={value.path}
              sx={(theme) => ({
                width: "100%",
                "&.active": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  "& .MuiListItemIcon-root": {
                    color: theme.palette.common.white,
                  },
                },
              })}
            >
              <ListItemIcon>{value.icon}</ListItemIcon>
              <ListItemText primary={value.name} />
            </ListItemButton>

            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {value.children?.map((item, idx) => (
                  <ListItemButton
                    key={idx}
                    component={NavLink}
                    to={item.path}
                    sx={(theme) => ({
                      width: "100%",
                      pl: 4,
                      "&.active": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        "& .MuiListItemIcon-root": {
                          color: theme.palette.common.white,
                        },
                      },
                    })}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={(theme) => ({
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item xs={4}>
              <Box
                component="img"
                src="/images/data-classification.png"
                sx={{ width: "50px" }}
              ></Box>
            </Grid>
            <Grid item>
              {dataRoutes.map((value, index) => (
                <Button
                  key={index}
                  style={({ isActive }) => ({
                    color: isActive ? deepOrange[500] : deepOrange[500],
                    background: isActive
                      ? alpha(deepOrange[200], 0.2)
                      : "transparent",
                  })}
                  component={NavLink}
                  to={value.path}
                >
                  {value.name}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
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
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {props.content}
      </Box>
    </Box>
  );
};

export default TemplatePage;
