import React, { memo } from 'react';
import { IReposItem } from '../../types/IRepos';
import ReposItem from '../reposItem/ReposItem';
import styles from './ReposList.module.scss';

type IReposListProps = {
  searchTitle: string;
  reposList: IReposItem[];
};

const ReposList: React.FC<IReposListProps> = memo(({ searchTitle, reposList = [] }) => {
  console.log('RL_DM', reposList);
  return (
    <div className={styles.reposList}>
      <h2 className={styles.reposListTitle}>{searchTitle}</h2>
      <ul>
        {reposList?.map((repo) => (
          <ReposItem key={repo.id} searchTitle={searchTitle} repoInfo={repo} />
        ))}
      </ul>
    </div>
  );
});

export default ReposList;
