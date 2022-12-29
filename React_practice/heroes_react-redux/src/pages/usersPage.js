import React from 'react';
import { useFetchAllUsersQuery } from '../redux/testApi';

const UsersPage = () => {
  const { data, isLoading } = useFetchAllUsersQuery();
  return (
    <div>
      {isLoading ? (
        '...Laoding...'
      ) : (
        <ul>
          {console.log(data)}
          {data?.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
