import { useState } from "react";
function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskDesc = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className="w-4/12">
      <h2>Task Giriniz!</h2>
      <form className="flex flex-col">
        <label className="task-label">Başlık</label>
        <input
          value={title}
          onChange={handleChange}
          className="p-5 border border-black  border-gradient-to-r from-green-400 via-green-500 to-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
        />
        <label className="task-label">Task</label>
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
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
