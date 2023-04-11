function TaskShow({ task }) {
  return (
    <div className="w-96 m-5 border p-5 rounded-md shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 flex flex-col items-center">
      <h2 className="text-bold">Göreviniz</h2>
      <label className="task-label">{task.title}</label>
      <h2 className="text-bold">Yapılacaklar</h2>
      <label className="task-label">{task.taskDesc}</label>

      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Update
      </button>
      <button
        type="button"
        className="mt-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Update
      </button>
    </div>
  );
}

export default TaskShow;
