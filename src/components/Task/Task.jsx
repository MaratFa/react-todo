import { useState, useRef, useEffect } from "react";
import classes from "./Task.module.css";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

export default function Task({ task, changeTask, deleteTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(task.done);
  const [taskTitle, setTaskTitle] = useState(task.title ?? "");
  const [taskDescription, setTaskDescription] = useState(
    task.description ?? ""
  );
  const [isShowDialog, setIsShowDialog] = useState(false);

  const inputTitleRef = useRef(null);

  useEffect(() => {
    if (isEdit) inputTitleRef?.current?.focus();
    // console.log("REF: ", inputTitleRef.current);
  }, [isEdit]);

  const onChangeDoneStatus = () => {
    setIsDone(!isDone);
    setTimeout(() => {
      changeTask(task.id, {
        done: !isDone,
      });
    }, 50);
  };

  const acceptChanges = () => {
    if (taskTitle !== task.title || taskDescription !== task.description) {
      changeTask(task.id, {
        title: taskTitle,
        description: taskDescription,
      });
    }
    setIsEdit(false);
  };

  const declineChanges = () => {
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setIsEdit(false);
  };

  return (
    <Fade in>
      <div className={`${classes.task} ${isDone ? classes["is-done"] : ""}`}>
        <div className={classes["task-check"]}>
          <Checkbox
            checked={isDone}
            onChange={() => onChangeDoneStatus()}
            sx={{
              color: isDone ? "#D8D8D8" : "#539CFD",
              "&.Mui-checked": {
                color: isDone ? "#D8D8D8" : "#539CFD",
              },
            }}
          />
        </div>
        {/* <div ref={inputTitleRef} className="test">
          TEST
        </div> */}
        <div className={classes["task-info"]}>
          {isEdit ? (
            <>
              <div className={classes["task-info__title-input"]}>
                <TextField
                  inputRef={inputTitleRef}
                  label="Name"
                  defaultValue={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
              </div>
              <div className={classes["task-info__description-input"]}>
                <TextField
                  label="Description"
                  defaultValue={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <h2 className={classes["task-info__title"]}>{task.title}</h2>
              <p className={classes["task-info__description"]}>
                {task.description}
              </p>
            </>
          )}
        </div>
        <div className={classes["task-actions"]}>
          {isEdit ? (
            <>
              <IconButton onClick={() => acceptChanges()}>
                <CheckIcon sx={{ color: isDone ? "#D8D8D8" : "#539CFD" }} />
              </IconButton>
              <IconButton onClick={() => declineChanges()}>
                <CloseIcon sx={{ color: isDone ? "#D8D8D8" : "#539CFD" }} />
              </IconButton>
            </>
          ) : (
            <Checkbox
              checked={isEdit}
              onChange={() => setIsEdit(!isEdit)}
              icon={
                <EditIcon
                  className={
                    classes[isDone ? "icon-is-done" : "icon-is-not-done"]
                  }
                />
              }
            />
          )}
          <IconButton onClick={() => setIsShowDialog(true)}>
            <DeleteOutlineIcon sx={{ color: isDone ? "#D8D8D8" : "#539CFD" }} />
          </IconButton>
          <Dialog
            open={isShowDialog}
            onClose={() => setIsShowDialog(false)}
            aria-labelledby="alert-dialog-title"
            maxWidth="md"
          >
            <DialogTitle>{"Delete task"}</DialogTitle>
            <DialogActions>
              <Button onClick={() => deleteTask(task.id)}>Delete</Button>
              <Button onClick={() => setIsShowDialog(false)}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </Fade>
  );
}
