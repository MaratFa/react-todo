import TaskList from "./components/TaskList/TaskList";
import AddBtn from "./components/AddBtn/AddBtn";
import AddForm from "./components/AddForm/AddForm";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Task 1 description", done: false },
    { id: 2, title: "Task 2", description: "Task 2 description", done: false },
    { id: 3, title: "Task 3", description: "Task 3 description", done: false },
    { id: 4, title: "Task 4", description: "Task 4 description", done: false },
  ]);

  const onAddTask = (data) => {
    setTasks([
      ...tasks,
      {
        id: tasks.at(-1)?.id + 1 || 1,
        ...data,
      },
    ]);
  };

  const onUpdateTask = (id, data) => {
    setTasks(
      [...tasks].map((task) => (task.id === id ? { ...task, ...data } : task))
    );
  };

  return (
    <>
      <div className="main-wrapper">
        <TaskList title="Active" tasks={tasks} changeTask={onUpdateTask} />
        <TaskList title="Completed" tasks={tasks} changeTask={onUpdateTask} />
      </div>
      <AddBtn>
        {(closeModal) => {
          return <AddForm closeModal={closeModal} addTask={onAddTask} />;
        }}
      </AddBtn>
    </>
  );
}

export default App;
