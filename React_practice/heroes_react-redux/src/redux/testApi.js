import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: (limit = 5) => ({
        url: `/users${limit && `?_limit=${limit}`}`,
      }),
    }),
    fetchAllPosts: build.query({
      query: () => ({
        url: '/posts',
      }),
    }),
  }),
});

export const { useFetchAllUsersQuery, useFetchAllPostsQuery } = testApi;
