// components/TaskList.tsx
import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Task } from "../../types/Task";
import './TaskList.scss'

interface TaskListProps {
  listTask: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ listTask }) => {
  return (
    <div className="task-list">
      {listTask.map((task) => (
        <TaskItem task={task} key={task.id}></TaskItem>
      ))}
    </div>
  );
};

export default TaskList;
