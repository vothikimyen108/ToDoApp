import { useTodoContext } from "../../hook/TodoListContext";
import './Footer.scss';

const Footer = () => {
  const { clearCompletedTasks, isCompleted } = useTodoContext();

  const handleclearCompletedTasks = () => {
    clearCompletedTasks();
  };

  return (
    <footer className="task-footer">
      <div className="task-footer-content">
        <div className="task-contract">
          <a
            className="task-social-icon fb-icon"
            href="https://www.facebook.com/vtkyn/"
            target="_blank"
          ></a>
          <a
            className="task-social-icon instagram-icon"
            href="https://www.instagram.com/enlangthangmotminh/"
            target="_blank"
          ></a>
          <a
            className="task-social-icon githubicon"
            href="https://github.com/vothikimyen108"
            target="_blank"
          ></a>
          <span className="app-copyright">copyright by Yenvtk</span>
        </div>
        <div className="task-btn-clear">
          <button
            className="clear-tasks-btn"
            onClick={handleclearCompletedTasks}
            disabled={isCompleted}
          >
            Clear all tasks done
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
