import classes from "./Task.module.css";
import { Checkbox } from "@mui/material";

export default function Task({ title, description }) {
  return (
    <div className={classes.task}>
      <div className={classes["task-check"]}>
        <Checkbox />
      </div>
      <div className={classes["task-info"]}>
        <h2 className={classes["task-info__title"]}>{title}</h2>
        <p className={classes["task-info__description"]}>{description}</p>
      </div>
      <div className={classes["task-actions"]}></div>
    </div>
  );
}
