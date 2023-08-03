// TodoContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Task } from "../types/Task";

interface TodoContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  editTask: (taskId: string, newTitle: string) => void;
  checkTask: (taskId: string, completed: boolean) => void;
  deleteTask: (taskId: string) => void;
  clearCompletedTasks: () => void;
  isCompleted: boolean;
}

const TodoContext = createContext<TodoContextType>({
  tasks: [],
  addTask: () => {},
  editTask: () => {},
  checkTask: () => {},
  clearCompletedTasks: () => {},
  deleteTask: () => {},
  isCompleted: false,
});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const tasksJSON = localStorage.getItem("tasks");
  const storedTasks = tasksJSON ? JSON.parse(tasksJSON) : [];
  const [tasks, setTasks] = useState<Task[]>(storedTasks);

  useEffect(() => {
    // Save tasks to local storage 
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    if (title.trim() !== "") {
      const newTaskObj: Task = {
        id: new Date().getTime().toString(),
        taskName: title.trim(),
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const editTask = (taskId: string, newTitle: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, taskName: newTitle } : task
      )
    );
  };

  const checkTask = (taskId: string, completed: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, completed } : task))
    );
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };
  const deleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const isCompleted =
    tasks.filter((task) => task.completed).length <= 0 && true;
  return (
    <TodoContext.Provider
      value={{
        tasks,
        isCompleted,
        addTask,
        editTask,
        checkTask,
        clearCompletedTasks,
        deleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
