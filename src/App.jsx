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
  const editTaskByID = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          taskDesc: updatedTaskDesc,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App flex flex-col justify-start  items-center min-h-screen  w-full">
      <TaskCreate onCreate={createTask} />
      <h1 className="mt-10 mb-10 text-bold">Your Mission</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskByID}
        onUpdate={editTaskByID}
      />
    </div>
  );
}

export default App;
