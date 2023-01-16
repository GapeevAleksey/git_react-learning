import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li>
          <NavLink to="/">Heroes</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/goods">Goods</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
