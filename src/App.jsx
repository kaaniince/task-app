import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];

    setTasks(createdTasks);
  };

  const deleteTaskByID = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTasks);
  };

  return (
    <div className="App flex flex-col justify-start  items-center min-h-screen  w-full">
      <TaskCreate onCreate={createTask} />
      <h1 className="mt-10 mb-10 text-bold">Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskByID} />
    </div>
  );
}

export default App;
