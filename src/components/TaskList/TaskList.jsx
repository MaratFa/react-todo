import Task from "../Task/Task";
import classes from "./TaskList.module.css";

export default function TaskList({ tasks, title }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes["list-title"]}>{title}</div>
      <div className={classes["task-list"]}>
        {/* tasks */}
        <Task />
        <Task />
      </div>
    </div>
  );
}
