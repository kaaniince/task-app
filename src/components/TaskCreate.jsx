import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";
function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskDesc = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);

      // editTaskByID(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="w-full ">
          <h2 className="text-bol text-bold">Please Edit the Task!</h2>
          <form className="flex flex-col">
            <label className="task-label text-bold">Edit Header</label>
            <input
              value={title}
              onChange={handleChange}
              className="p-5 border border-black  border-gradient-to-r from-green-400 via-green-500 to-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
            />
            <label className="task-label text-bold">Edit Task</label>
            <textarea
              onChange={handleTaskDesc}
              value={taskDesc}
              rows={5}
              className="p-5 border border-black  border-gradient-to-r from-green-400 via-green-500 to-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
            />
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="w-96 mt-5 border p-5 rounded-md shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 ">
          <h2 className="text-bol text-bold">Enter the Task!</h2>
          <form className="flex flex-col">
            <label className="task-label text-bold">Header</label>
            <input
              value={title}
              onChange={handleChange}
              className="p-5 border border-black  border-gradient-to-r from-green-400 via-green-500 to-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
            />
            <label className="task-label text-bold">Task</label>
            <textarea
              onChange={handleTaskDesc}
              value={taskDesc}
              rows={5}
              className="p-5 border border-black  border-gradient-to-r from-green-400 via-green-500 to-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
            />
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
