import React from 'react';
import { useSelector } from 'react-redux';
import { IReposItem } from '../../types/IRepos';
import ReposItem from '../reposItem/ReposItem';
import styles from './HistoryRepos.module.scss';

const HistoryRepos = () => {
  const { history, historyActivePoint } = useSelector((state: any) => state.githubReducer);
  return (
    <div className={styles.historyRepos}>
      <ul>
        {history[historyActivePoint]?.map((historyRepoItem: IReposItem) => (
          <ReposItem
            key={historyRepoItem.id}
            searchTitle={historyActivePoint}
            repoInfo={historyRepoItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default HistoryRepos;
