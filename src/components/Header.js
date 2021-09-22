import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router";

function Header({ drawerWidth }) {
  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {location.pathname === "/"
              ? "Todos List"
              : location.pathname === "/AddToDo"
              ? "Add A New Task"
              : location.pathname.includes("updateTodo")
              ? "Edit a Task"
              : "Learn More"}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
