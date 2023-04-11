import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/task", {
      title,
      taskDesc,
    });
    const createdTasks = [...tasks, response.data];

    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/task");
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskByID = async (id) => {
    await axios.delete(`http://localhost:3000/task/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTasks);
  };
  const editTaskByID = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/task/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
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
