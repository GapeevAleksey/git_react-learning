import React from 'react';
import styles from './LoadMoreButton.module.scss';

type LoadMoreButtonProps = {
  LoadMoreButtonHandler: () => void;
};

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({LoadMoreButtonHandler}) => {
  return (
    <div className={styles.loadMoreBtn}>
      <button onClick={LoadMoreButtonHandler}>load more</button>
    </div>
  );
};

export default LoadMoreButton;
