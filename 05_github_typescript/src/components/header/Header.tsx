import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <p className={styles.logo}>
          GitHub<span>searcher</span>
        </p>
      </NavLink>

      <ul className={styles.navbar}>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
