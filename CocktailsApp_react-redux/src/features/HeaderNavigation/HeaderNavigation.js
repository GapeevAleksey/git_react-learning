import styles from './HeaderNavigation.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <h2>
          <NavLink to="/">CoctailsBook</NavLink>
        </h2>
      </div>
      <nav className="headerNav">
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              Main
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/favorite"
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
