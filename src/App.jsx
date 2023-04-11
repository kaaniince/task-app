import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TasksContext from "./context/task";

function App() {
  const { fetchTasks } = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App flex flex-col justify-start  items-center min-h-screen  w-full">
      <TaskCreate />
      <h1 className="mt-10 mb-10 text-bold">Your Mission</h1>
      <TaskList />
    </div>
  );
}

export default App;
