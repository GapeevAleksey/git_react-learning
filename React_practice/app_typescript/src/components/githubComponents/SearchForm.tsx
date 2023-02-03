import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/debounce';
import {
  useGetUsersQuery,
  useLazyGetUserReposQuery,
} from '../../redux/githubApi';
import RepoCard from './RepoCard';
import UsersList from './UsersList';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounce = useDebounce(search, 500);
  const {
    isLoading,
    isError,
    data: users,
  } = useGetUsersQuery(debounce, {
    skip: debounce.length < 3,
  });

  const [fetchRepos, { data: repos, isLoading: isReposLoading }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounce.length > 3 && users?.length! > 0);
  }, [debounce]);

  console.log(repos);
  return (
    <>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="col s2"></div>
            <div className="input-field col s8 ">
              <input
                placeholder="Введите имя пользователя..."
                id="last_name"
                type="text"
                className="validate"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </div>
            <div className="col s2"></div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col s2"></div>
        <div className="col s8">
          {isError && <h4>Error response!</h4>}
          {isLoading && <h6>Loading...</h6>}
          {dropdown && (
            <UsersList
              users={users}
              fetchRepos={fetchRepos}
              setDropdown={setDropdown}
            />
          )}
          {repos && <RepoCard repos={repos} />}
        </div>
        <div className="col s2"></div>
      </div>
    </>
  );
};

export default SearchForm;
