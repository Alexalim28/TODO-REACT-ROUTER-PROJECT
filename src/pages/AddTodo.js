import { Toolbar } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Form from "../components/Form";

const initialState = {
  title: "",
  type: "",
  description: "",
  id: "",
};

function AddTodo() {
  const { id } = useParams();
  const [data, setData] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      fetch("http://localhost:8000/todos/" + id)
        .then((res) => res.json())
        .then((data) => {
          setIsEditing(true);
          setData(data);
        });
    } else {
      setData(initialState);
      setIsEditing(false);
    }
  }, [id]);

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
      <Form data={data} setData={setData} isEditing={isEditing} />
    </Box>
  );
}

export default AddTodo;
