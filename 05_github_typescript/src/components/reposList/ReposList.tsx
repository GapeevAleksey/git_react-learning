import React, { useEffect, useState } from 'react';
import { useGetReposQuery, useLazyGetReposQuery } from '../../store/githubApi';
import { IReposItem } from '../../types/IRepos';
import ReposItem from '../reposItem/ReposItem';
import styles from './ReposList.module.scss';

type IReposList = {
  reposList: IReposItem[];
  searchTitle: string;
};

const ReposList: React.FC<IReposList> = ({ reposList = [], searchTitle }) => {
  return (
    <div className={styles.reposList}>
      <h2 className={styles.reposListTitle}>{searchTitle}</h2>
      <ul>
        {reposList?.map((repo) => (
          <ReposItem
            key={repo.id}
            language={repo.language}
            name={repo.name}
            likes={repo.stargazers_count}
            avatar={repo.owner.avatar_url}
            login={repo.owner.login}
            htmlUrl={repo.owner.html_url}
            description={repo.description}
            updated={repo.updated_at}
            forks={repo.forks_count}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReposList;
