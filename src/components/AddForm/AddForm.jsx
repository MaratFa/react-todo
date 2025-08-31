import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import classes from "./AddForm.module.css";

export default function AddForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(title && title.trim());
  const [isDescriptionValid, setIsDescriptionValid] = useState(
    description && description.trim()
  );

  useEffect(() => {
    setIsTitleValid(title && title.trim());
    setIsDescriptionValid(description && description.trim());
  }, [title, description]);

  const addNewTask = (e) => {
    e.preventDefault();

    if (!isTitleValid || !isDescriptionValid) return;

    addTask();

    console.log("New task was added");
  };

  return (
    <>
      <form
        className={classes["add-task-form"]}
        onSubmit={(e) => addNewTask(e)}
      >
        <h2>New task</h2>
        <div className={classes["form-title"]}>
          <TextField
            error={!isTitleValid}
            value={title}
            helperText={!isTitleValid && "This field is required"}
            label="Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes["form-description"]}>
          <TextField
            error={!isDescriptionValid}
            value={description}
            helperText={!isDescriptionValid && "This field is required"}
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
