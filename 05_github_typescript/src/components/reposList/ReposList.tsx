import React, { useEffect, useState } from 'react';
import { useGetReposQuery, useLazyGetReposQuery } from '../../store/githubApi';
import { IReposItem } from '../../types/IRepos';
import ReposItem from '../reposItem/ReposItem';
import styles from './ReposList.module.scss'

type Search = {
  search: string;
};

const ReposList: React.FC<Search> = ({ search }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [reposList, setReposList] = useState<IReposItem[]>([]);
  const {
    data: repos,
    isLoading,
    isError,
  } = useGetReposQuery({ search, page: pageNumber });

  const [getMoreRepos, { data: reposMore, isLoading: isReposLoading }] =
    useLazyGetReposQuery();

  useEffect(() => {
    if (repos) {
      setReposList((prev) => [...prev, ...repos.items]);
    }
  }, [repos]);

  useEffect(() => {
    getMoreRepos({ search, page: pageNumber });
  }, [pageNumber]);

  return (
    <div className={styles.reposList}>
      <h2 className={styles.reposListTitle}>{search}</h2>
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
      <button
        onClick={() => {
          setPageNumber((prev) => prev + 1);
        }}
      >
        load more
      </button>
    </div>
  );
};

export default ReposList;
