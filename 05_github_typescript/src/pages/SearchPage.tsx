import React, { useState } from 'react';
import ReposList from '../components/reposList/ReposList';
import SearchForm from '../components/searchForm/SearchForm';

const SearchPage = () => {
  const [search, setSearch] = useState<string>('tetris');
  const searchHandler = (value: string) => setSearch(value);

  return (
    <div className="pageContainer">
      <SearchForm searchHandler={searchHandler}/>
      <ReposList search={search} />
    </div>
  );
};

export default SearchPage;
