import { useState } from "react";
import classes from "./Task.module.css";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Task({ task, chahgeTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(task.done);
  const [taskTitle, setTaskTitle] = useState(task.title ?? "");
  const [taskDescription, setTaskDescription] = useState(
    task.description ?? ""
  );
  const [isShowDialog, setIsShowDialog] = useState(false);

  const onChangeDoneStatus = () => {
    setIsDone(!isDone);
    setTimeout(() => {
      chahgeTask(task.id, {
        done: !isDone,
      });
    }, 50);
  };

  return (
    <div className={classes.task}>
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
      <div className={classes["task-info"]}>
        {
          isEdit
            ? <>
                <div className={classes['task-info__title-input']}>
                  <TextField
                    label={"Name"}
                  />
                </div>
                <div className={classes['task-info__description-input']}>

                </div>
              </>
            : ''
        }
        <h2 className={classes["task-info__title"]}>{task.title}</h2>
        <p className={classes["task-info__description"]}>{task.description}</p>
      </div>
      <div className={classes["task-actions"]}></div>
    </div>
  );
}
