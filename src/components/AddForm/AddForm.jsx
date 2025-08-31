import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import classes from "./AddForm.module.css";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewTask = (e) => {

  }

  return (
    <>
      <form 
        className={classes["add-task-form"]}
        onSubmit={(e) => addNewTask()}
      >
        <h2>New task</h2>
        <div className={classes["form-title"]}>
          <TextField
            value={title}
            label="Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes["form-description"]}>
          <TextField
            value={description}
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button type="submit" variant="outlined">
          Add
        </Button>
      </form>
    </>
  );
}
