import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLastSearchItem } from '../../store/github.slice';
import { useLazyGetReposQuery } from '../../store/githubApi';
import { IReposItem } from '../../types/IRepos';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import ReposList from '../reposList/ReposList';
import SearchForm from '../searchForm/SearchForm';
import Spinner from '../Spinner/Spinner';

const SearchReposModule: React.FC = () => {
  const { historySearch } = useSelector((state: any) => state.githubReducer);
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>(historySearch.lastSearch);
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
    return () => {
      setReposList([]);
      // console.log('CDU', reposList);
    };
  }, []);

  useEffect(() => {
    // console.log('SM_DM', reposList);
    getRepos({ search, page: pageNumber });
  }, [pageNumber, search]);

  useEffect(() => {
    // console.log(repos?.items);
    repos && setReposList((prev) => [...prev, ...repos.items]);
    dispatch(addLastSearchItem(search));
  }, [repos?.items]);

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
