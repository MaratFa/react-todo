import Task from "../Task/Task";
import classes from "./TaskList.module.css";

export default function TaskList({ title, tasks, changeTask }) {
  console.log("Tasks: ", tasks);
  
  return (
    <div className={classes.wrapper}>
      <div className={classes["list-title"]}>{title}</div>
      <div className={classes["task-list"]}>
        {tasks.length
          ? tasks.map((task) => {
              return <Task task={task} key={task.id} changeTask={changeTask} />;
            })
          : "The task list is empty"}
      </div>
    </div>
  );
}
