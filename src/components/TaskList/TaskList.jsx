import { useState, useEffect } from "react";
import Task from "../Task/Task";
import classes from "./TaskList.module.css";

export default function TaskList({
  title,
  tasks,
  sortBy,
  changeTask,
  deleteTask,
}) {
  const [sortTasks, setSortTasks] = useState([]);

  useEffect(() => {
    setSortTasks(
      [...tasks].filter((task) => (sortBy ? task[sortBy] : !task.done))
    );
  }, [tasks, sortBy]);
  // console.log("Tasks: ", tasks);

  return (
    <div className={classes.wrapper}>
      <div className={classes["list-title"]}>{title}</div>
      <div className={classes["task-list"]}>
        {sortTasks.length
          ? sortTasks.map((task) => {
              return (
                <Task
                  task={task}
                  key={`${task.title}-${task.done}-${task.id}`}
                  changeTask={changeTask}
                  deleteTask={deleteTask}
                />
              );
            })
          : "The task list is empty"}
      </div>
    </div>
  );
}
