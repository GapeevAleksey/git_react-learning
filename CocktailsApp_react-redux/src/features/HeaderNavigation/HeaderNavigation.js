import styles from './HeaderNavigation.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import favoriteSlice from '../../app/favoriteSlice';

const HeaderNavigation = () => {
  const countFavorite = useSelector(
    (state) => state.favoriteSlice.favoriteCocktails
  );
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <h2 className={styles.bigTitle}>
          <NavLink to="/">CoctailsBook</NavLink>
        </h2>
        <h2 className={styles.smallTitle}>
          <NavLink to="/">CB</NavLink>
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
            <span className={styles.countFavorite}>
              {Object.keys(countFavorite).length}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
