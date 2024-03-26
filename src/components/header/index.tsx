import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <button className="header-button">Home</button>
      </Link>
      <Link to="/plan/goal">
        <button className="header-button">Create a Plan</button>
      </Link>
    </div>
  );
}

// add some routes: https://reactrouter.com/en/main/route/route

export default Header;