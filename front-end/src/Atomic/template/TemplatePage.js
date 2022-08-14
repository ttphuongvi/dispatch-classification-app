import React from "react";
import PropTypes from "prop-types";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomDivider from "../atoms/AtomDivider";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemIcon from "../atoms/AtomListItemIcon";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomBox from "../atoms/AtomBox";
import AtomCssBaseline from "../atoms/AtomCssBaseline";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomDrawer from "../atoms/AtomDrawer";
import dataRoutes from "../../router/dataRoutes";
import { useNavigate } from "react-router-dom";
import AtomGrid from "../atoms/AtomGrid";
import AtomButton from "../atoms/AtomButton";
import AtomRouteLink from "../atoms/AtomRouteLink";

const drawerWidth = 240;

const TemplatePage = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <div>
      <AtomToolbar />
      <AtomDivider />
      <AtomList>
        {dataRoutes.map((value, index) => (
          <AtomListItem key={index} disablePadding>
            <AtomListItemButton onClick={() => navigate(`${value.path}`)}>
              <AtomListItemIcon>{value.icon}</AtomListItemIcon>
              <AtomListItemText primary={value.name} />
            </AtomListItemButton>
          </AtomListItem>
        ))}
      </AtomList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <AtomBox sx={{ display: "flex" }}>
      <AtomCssBaseline />
      <AtomAppBar
        position="fixed"
        sx={(theme) => ({
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <AtomToolbar>
          <AtomIconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></AtomIconButton>
          <AtomGrid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <AtomGrid item xs={4}>
              <AtomBox
                component="img"
                src="/images/data-classification.png"
                sx={{ width: "50px" }}
              ></AtomBox>
            </AtomGrid>
            <AtomGrid item>
              {dataRoutes.map((value, index) => (
                <AtomButton component={AtomRouteLink} to={value.path}>
                  {value.name}
                </AtomButton>
              ))}
            </AtomGrid>
          </AtomGrid>
        </AtomToolbar>
      </AtomAppBar>
      <AtomBox
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <AtomDrawer
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
        </AtomDrawer>
        <AtomDrawer
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
        </AtomDrawer>
      </AtomBox>
      <AtomBox
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <AtomToolbar />
        {props.content}
      </AtomBox>
    </AtomBox>
  );
};
TemplatePage.propTypes = {
  content: PropTypes.node,
};

export default TemplatePage;
