import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

const HeaderNav = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.navMenu}>
        <li className={styles.navMenuItem}>
          <NavLink to="/">Posts</NavLink>
        </li>
        <li className={styles.navMenuItem}>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className={styles.navMenuItem}>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
