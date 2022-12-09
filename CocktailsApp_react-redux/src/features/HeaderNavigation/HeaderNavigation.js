import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderNavigation = () => {
  return (
    <div className="header">
      <div className="headerText">
        <h2>CoctailsBook</h2>
      </div>
      <nav className="headerNav">
        <ul>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
