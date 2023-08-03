import React from "react";
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h2 className="app-title">To-Do List</h2>
      </div>
      <p className="app-quote">
        "Take one small and consistent action each day and see what a huge
        impact you can make."
      </p>
    </header>
  );
};

export default Header;
