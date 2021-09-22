import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";
import React from "react";
import { Link } from "react-router-dom";

const listItems = [
  {
    text: "Home",
    icon: <HomeTwoToneIcon color="primary" fontSize="large" />,
    route: "/",
  },
  {
    text: "New ToDo",
    icon: <AddCommentTwoToneIcon color="primary" fontSize="large" />,
    route: "/AddTodo",
  },
];

function SideBar({ drawerWidth }) {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {listItems.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              style={{ textDecoration: "none" }}
            >
              <ListItem
                button
                sx={{
                  pl: 4,
                  "& .MuiTouchRipple-root span": {
                    backgroundColor: "primary.main",
                    opacity: 0.3,
                    animation: (theme) =>
                      `$enter 100ms ${theme.transitions.easing.easeInOut}`,

                    "@keyframes enter": {
                      "0%": {
                        transform: "scale(0)",
                        opacity: 0.1,
                      },
                      "100%": {
                        transform: "scale(1)",
                        opacity: 0.3,
                      },
                    },
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "1.2rem",
                    color: "#2ec4b6",
                  }}
                  primary={item.text}
                />
                <ListItemIcon>{item.icon}</ListItemIcon>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;
