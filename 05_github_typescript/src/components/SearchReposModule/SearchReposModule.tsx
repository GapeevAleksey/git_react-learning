import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetReposQuery } from '../../store/githubApi';
import { IReposItem } from '../../types/IRepos';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import ReposList from '../reposList/ReposList';
import SearchForm from '../searchForm/SearchForm';
import Spinner from '../Spinner/Spinner';

const SearchReposModule: React.FC = () => {
  const { historyActivePoint } = useSelector((state: any) => state.githubReducer);
  const initSearch = () => {
   return historyActivePoint || 'githubApi'
  };

  const [search, setSearch] = useState<string>(initSearch());
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [reposList, setReposList] = useState<IReposItem[]>([]);
  const [getRepos, { data: repos, isFetching, isError }] = useLazyGetReposQuery();
  const searchHandler = (value: string) => {
    setSearch(value);
    setPageNumber(1);
    setReposList([]);
  };
  const LoadMoreButtonHandler = () => {
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    getRepos({ search, page: pageNumber });
  }, [pageNumber, search]);

  useEffect(() => {
    repos && setReposList((prev) => [...prev, ...repos.items]);
  }, [repos]);

  return (
    <>
      <SearchForm searchHandler={searchHandler} />
      <ReposList searchTitle={search} reposList={reposList} />
      {isError && <h3>Something error occurred. Try again later...</h3>}
      {isFetching ? <Spinner /> : <LoadMoreButton LoadMoreButtonHandler={LoadMoreButtonHandler} />}
    </>
  );
};

export default SearchReposModule;
