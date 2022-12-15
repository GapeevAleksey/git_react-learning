import styles from './HeaderNavigation.module.scss'
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <h2>CoctailsBook</h2>
      </div>
      <nav className="headerNav">
        <ul className={styles.list}>
          <li className={styles.item}>
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
