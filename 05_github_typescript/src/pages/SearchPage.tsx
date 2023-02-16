import React, { useEffect, useState } from 'react';
import ReposList from '../components/reposList/ReposList';
import SearchForm from '../components/searchForm/SearchForm';
import Spinner from '../components/Spinner/Spinner';
import { useLazyGetReposQuery } from '../store/githubApi';
import { IReposItem } from '../types/IRepos';
import styles from './SearchPage.module.scss';

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState<string>('dogs');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [reposList, setReposList] = useState<IReposItem[]>([]);
  const searchHandler = (value: string) => {
    setSearch(value);
    setPageNumber(1);
    setReposList([]);
  };

  const [getRepos, { data: repos, isFetching }] = useLazyGetReposQuery();

  useEffect(() => {
    getRepos({ search, page: pageNumber });
  }, [pageNumber]);

  useEffect(() => {
    repos && setReposList((prev) => [...prev, ...repos.items]);
  }, [repos]);

  return (
    <>
      {/* {console.log(isSuccess)} */}
      <div className="pageContainer">
        <SearchForm searchHandler={searchHandler} />
        {repos && <ReposList reposList={reposList} searchTitle={search} />}
        {isFetching ? (
          <Spinner />
        ) : (
          <div className={styles.loadMoreBtn}>
            <button
              onClick={() => {
                setPageNumber((prev) => prev + 1);
              }}
            >
              load more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
