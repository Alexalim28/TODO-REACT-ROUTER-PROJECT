import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import useFetch from "../useFetch";
import CircularProgress from "@mui/material/CircularProgress";

const url = "http://localhost:8000/todos/";

function Details() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(url + id);

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

      <Card sx={{ mt: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.type}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, fontSize: "1.3rem" }}>
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Details;
