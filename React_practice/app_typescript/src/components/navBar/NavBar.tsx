import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1 px1">
        <NavLink to="/" className="brand-logo">
          React + TypeScript
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список задач</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>
          </li>
          <li>
            <NavLink to="/market">Маркет</NavLink>
          </li>
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
          <li>
            <NavLink to="/typescript">TypeScript</NavLink>
          </li>
          <li>
            <NavLink to="/javascript">JavaScript</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
