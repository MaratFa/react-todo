import TaskList from "./components/TaskList/TaskList";
import AddBtn from "./components/AddBtn/AddBtn";
import AddForm from "./components/AddForm/AddForm";
import Search from "./components/Search/Search";
import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Task 1 description", done: false },
    { id: 2, title: "Task 2", description: "Task 2 description", done: false },
    { id: 3, title: "Task 3", description: "Task 3 description", done: false },
    { id: 4, title: "Task 4", description: "Task 4 description", done: false },
  ]);

  const [searchGlobal, setSearchGlobal] = useState("");
  
  const searchTasks = useMemo(() => {
    console.log("USE MEMO");













    

    if (searchGlobal) {
      const lowerSearch = searchGlobal.toLowerCase();

      return [...tasks].filter((task) => {
        return (
          task.title.toLowerCase().includes(lowerSearch) ||
          task.description.toLowerCase().includes(lowerSearch)
        );
      });
    }

    return tasks;
  }, [tasks, searchGlobal]);

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

  const onDeleteTask = (id) => {
    setTasks([...tasks].filter((task) => task.id !== id));
  };

  return (
    <>
      {searchGlobal}
      <Search setSearchGlobal={setSearchGlobal} />
      <div className="main-wrapper">
        <TaskList
          title="Active"
          tasks={searchTasks}
          changeTask={onUpdateTask}
          deleteTask={onDeleteTask}
        />
        <TaskList
          title="Completed"
          tasks={searchTasks}
          sortBy="done"
          changeTask={onUpdateTask}
          deleteTask={onDeleteTask}
        />
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
