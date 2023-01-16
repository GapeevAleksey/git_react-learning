import React from 'react';
import styles from './useritem.module.css';

const UsersItem = ({userId,  userName }) => {
  return (
    <li className={styles.userItem} key={userName}>
      <span>{userId}. {userName}</span>
      <span className={styles.delete}>&times;</span>
    </li>
  );
};

export default UsersItem;
