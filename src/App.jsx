import "./App.css";
import Task from "./components/Task/Task";

function App() {
  return (
    <div>
      <Task title="Task 1" description="Task 1 description"/>
      <Task title="Task 2" description="Task 2 description"/>
      <Task title="Task 3" description="Task 3 description"/>
      <Task title="Task 4" description="Task 4 description"/>
    </div>
  );
}

export default App;
