import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <button className="header-button">Home</button>
      </Link>
      <Link to="/plan/goal">
        <button className="header-button">Create a Plan</button>
      </Link>
      <Link to="/week">
        <button className="header-button">My Week</button>
      </Link>
    </div>
  );
}

export default Header;