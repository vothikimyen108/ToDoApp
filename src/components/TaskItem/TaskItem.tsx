// components/TaskItem.tsx
import React, { useState } from "react";
import { Task } from "../../types/Task";
import { useTodoContext } from "../../hook/TodoListContext";
import "./TaskItem.scss";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(task.taskName);
  const [showError, setShowError] = useState({ isErr: false, message: "" });
  const [isChecked, setIsChecked] = useState(task.completed);
  const { editTask, checkTask, deleteTask } = useTodoContext();

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleEditSave = () => {
    if (updatedTaskName.trim() !== "") {
      if (updatedTaskName.length >= 70) {
        {
          setShowError({
            isErr: true,
            message: "Please enter fewer than 70 characters",
          });
        }
      } else {
        setIsEdit(false);
        editTask(task.id, updatedTaskName);
      }
    } else {
      setShowError({
        isErr: true,
        message: "Please do not leave this field empty",
      });
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTaskName(e.target.value);
    setShowError({ isErr: false, message: "" });
  };

  const onDeleteTask = () => {
    deleteTask(task.id);
  };

  const onCheckTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    checkTask(task.id, e.target.checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEditSave();
    }
  };

  return (
    <div className="task-item">
      <div className="task-checkbox">
        <input
          type="checkbox"
          id={String(task.id)}
          className="task-checkbox-input"
          checked={isChecked}
          onChange={onCheckTask}
        />
        <label
          htmlFor={String(task.id)}
          className="task-checkbox-label"
        ></label>
      </div>
      {!isEdit ? (
        <>
          <div className="task-title">
            <span className={`task-name ${isChecked && "completed"}`}>
              {task.taskName}
            </span>
          </div>
          <div className="task-actions">
            <button
              className="task-action-btn edit-button"
              data-tooltip="Edit"
              onClick={handleEditClick}
            ></button>
            <button
              className="task-action-btn delete-button"
              data-tooltip="Delete"
              onClick={onDeleteTask}
            ></button>
          </div>
        </>
      ) : (
        <>
          <div className="task-title-edit">
            <input
              type="text"
              defaultValue={task.taskName}
              onChange={handleOnChange}
              onBlur={handleEditSave}
              onKeyDown={handleKeyDown}
            />
            {showError.isErr && (
              <span className="error-message">{showError.message}</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
