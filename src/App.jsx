import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";
import "./App.css";
import AddBtn from "./components/AddBtn/AddBtn";

function App() {
  const [tasks, setTask] = useState([
    { id: 1, title: "Task 1", description: "Task 1 description", done: false },
    { id: 2, title: "Task 2", description: "Task 2 description", done: false },
    { id: 3, title: "Task 3", description: "Task 3 description", done: false },
    { id: 4, title: "Task 4", description: "Task 4 description", done: false },
  ]);

  const onAddTask = (data) => {
    setTask([...tasks, {
      id: (tasks.at(-1)?.id + 1) || 1,
      ...data
    }])
  }

  return (
    <>
      <div className="main-wrapper">
        <TaskList title="Active" tasks={tasks} />
        <TaskList title="Completed" tasks={tasks} />
        <AddBtn addTask={onAddTask}/>
      </div>
    </>
  );
}

export default App;
