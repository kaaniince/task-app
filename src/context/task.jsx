import { createContext } from "react";

import { useState } from "react";
import axios from "axios";
const TasksContext = createContext();
function Provider({ children }) {
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
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskByID,
    editTaskByID,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
