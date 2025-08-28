import classes from "./Task.module.css";
import { Checkbox } from "@mui/material";

export default function Task({ task }) {
  return (
    <div className={classes.task}>
      <div className={classes["task-check"]}>
        <Checkbox />
      </div>
      <div className={classes["task-info"]}>
        <h2 className={classes["task-info__title"]}>{task.title}</h2>
        <p className={classes["task-info__description"]}>{task.description}</p>
      </div>
      <div className={classes["task-actions"]}></div>
    </div>
  );
}
