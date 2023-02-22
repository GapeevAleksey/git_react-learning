import React from 'react';
import styles from './ReposList.module.scss';

type InumberPage = {
  numberPage: number;
};

const ListEdgeLine: React.FC<InumberPage> = ({ numberPage }) => {
  return (
    <div className={styles.edgeLine}>
      <div>{numberPage}</div>
    </div>
  );
};

export default ListEdgeLine;
