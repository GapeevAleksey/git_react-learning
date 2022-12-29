import React from 'react';
import UsersItem from '../components/usersItem/UsersItem';
import { useFetchAllUsersQuery } from '../redux/testApi';

const UsersPage = () => {
  const { data: users, isLoading } = useFetchAllUsersQuery();
  return (
    <div>
      {isLoading ? (
        '...Laoding...'
      ) : (
        <ul>
          {console.log(users)}
          {users?.map((user) => (
            <UsersItem userId={user.id} userName={user.name} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
