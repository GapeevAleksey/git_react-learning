import React, { memo } from 'react';
import { IReposItem } from '../../types/IRepos';
import ReposItem from '../reposItem/ReposItem';
import ListEdgeLine from './ListEdgeLine';
import styles from './ReposList.module.scss';

type IReposListProps = {
  searchTitle: string;
  reposList: IReposItem[];
};

const ReposList: React.FC<IReposListProps> = memo(({ searchTitle, reposList = [] }) => {
  return (
    <div className={styles.reposList}>
      <h2 className={styles.reposListTitle}>{searchTitle}</h2>
      <ul>
        {reposList?.map((repo, index) => {
          if (!((index + 1) % 5)) {
            return (
              <div key={repo.forks_count}>
                <ReposItem key={repo.id} searchTitle={searchTitle} repoInfo={repo} />
                <ListEdgeLine numberPage={(index + 1) / 5} />
              </div>
            );
          }
          return <ReposItem key={repo.id} searchTitle={searchTitle} repoInfo={repo} />;
        })}
      </ul>
    </div>
  );
});

export default ReposList;
