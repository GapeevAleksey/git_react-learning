import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});

export const { useFetchAllUsersQuery } = testApi;
