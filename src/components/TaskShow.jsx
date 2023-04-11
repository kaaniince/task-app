import { useState } from "react";
import TaskCreate from "./TaskCreate";

import { useContext } from "react";
import TasksContext from "../context/task";
function TaskShow({ task }) {
  const { deleteTaskByID, editTaskByID } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskByID(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskByID(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div className="w-96 m-5 border p-5 rounded-md shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 flex flex-col items-center text-center">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h2 className="text-bold">Your Mission</h2>
          <label className="task-label">{task.title}</label>
          <h2 className="text-bold">Things To Do</h2>
          <label className="task-label">{task.taskDesc}</label>
          <div className="flex flex-row items-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
            <button
              type="button"
              className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleEditClick}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
