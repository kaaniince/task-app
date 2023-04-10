import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const createTask = (title, taskDesc) => {
    console.log(title, taskDesc);
  };

  return (
    <div className="App flex flex-col justify-center h-screen min-h-0 items-center">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
