import React from "react";
import useFetch from "../useFetch";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { Box } from "@material-ui/system";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const url = "http://localhost:8000/todos/";

function Home() {
  const { data, deleteTodo, isLoading } = useFetch(url);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Toolbar />

      {isLoading && (
        <CircularProgress sx={{ ml: 60, mt: 20 }} thickness={3} size={100} />
      )}

      {data.map((todo) => (
        <Card key={todo.id} sx={{ mb: 3 }} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {todo.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {todo.type}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontSize: "1.3rem" }}>
              {todo.description.slice(0, 250)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/Details/${todo.id}`} style={{ textDecoration: "none" }}>
              <Button size="small" color="secondary">
                Learn More
              </Button>
            </Link>
            <IconButton sx={{ marginLeft: "auto" }}>
              <Link to={`/updateTodo/${todo.id}`}>
                <EditIcon
                  size="large"
                  sx={{ color: (theme) => theme.palette.text.primary }}
                />
              </Link>
            </IconButton>
            <IconButton
              sx={{ marginLeft: "auto" }}
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteForeverIcon size="large" color="error" />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
export default Home;
