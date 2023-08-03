// components/TaskInput.tsx
import React, { useState } from "react";
import { useTodoContext } from "../../hook/TodoListContext";
import './TaskInput.scss'

const TaskInput = () => {
  const [taskName, setTaskName] = useState("");
  const [showError, setShowError] = useState({ isErr: false, message: "" });
  const { addTask } = useTodoContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      if (taskName.length >= 300) {
        {
          setShowError({
            isErr: true,
            message: "Please enter fewer than 300 characters",
          });
        }
      } else {
        addTask(taskName);
        setTaskName("");
      }
    } else {
      setShowError({
        isErr: true,
        message: "Please do not leave this field empty",
      });
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
    setShowError({ isErr: false, message: "" });
  };

  return (
    <div className="task-input">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="task-input-btn-container">
          <input
            type="text"
            value={taskName}
            onChange={handleOnChange}
            placeholder="What do you want to do?"
            className="task-input-field"
          />
          <input
            type="submit"
            value="Add new task"
            className="task-input-btn"
          />
        </div>
        {showError.isErr && (
          <span className="error-message">{showError.message}</span>
        )}
      </form>
    </div>
  );
};

export default TaskInput;
