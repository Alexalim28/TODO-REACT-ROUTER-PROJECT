import { Button, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import { useHistory } from "react-router";

function Form({ data, setData, isEditing }) {
  const history = useHistory();
  const { title, description, type, id } = data;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    if (!isEditing) {
      fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        history.push("/");
      });
    } else {
      fetch("http://localhost:8000/todos/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        history.push("/");
      });
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          name="title"
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleChange}
        />
        <Box sx={{ "& .MuiTextField-root": { width: "98%" } }}>
          <TextField
            required
            name="description"
            label="Write here"
            fullWidth
            multiline
            minRows={10}
            value={description}
            onChange={handleChange}
          />
        </Box>
        <TextField
          required
          name="type"
          label="Type"
          variant="outlined"
          value={type}
          onChange={handleChange}
        />
      </Box>
      {!isEditing ? (
        <Button
          variant="contained"
          size="large"
          sx={{ width: 150, padding: 1.8, ml: 1, mt: 3 }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      ) : (
        <Button
          variant="contained"
          size="large"
          sx={{ width: 150, padding: 1.8, ml: 1, mt: 3 }}
          onClick={handleSubmit}
        >
          Edit
        </Button>
      )}
    </>
  );
}

export default Form;
