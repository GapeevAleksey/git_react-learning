import React from 'react';
import { IUser } from '../../models/models';
import { useLazyGetUserReposQuery } from '../../redux/githubApi';
import '../app/app.css';

const UsersList: React.FC<IUser[] | any> = ({ users, fetchRepos, setDropdown }) => {
  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <div>
      <ul className="dropdown">
        {users?.map((user: IUser) => (
          <li key={user.id} onClick={() => clickHandler(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
