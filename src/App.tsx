import "./App.scss";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import { useTodoContext } from "./hook/TodoListContext";
import { getCurrentDate } from "./types/dateUtils";
const App = () => {
  const { tasks } = useTodoContext();

  return (
    <div className="app">
      <Header></Header>
      <div className="task-container">
        <h3 className="task-date">Today, {getCurrentDate()}</h3>
        <TaskInput />
        <h3>Your task {tasks.length > 0 && `(${tasks.length})`}</h3>
        <TaskList listTask={tasks} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
