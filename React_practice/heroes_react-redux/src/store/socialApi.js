import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const socialApi = createApi({
  reducerPath: 'social',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({ url: `/posts` }),
    }),
  }),
});

export const { useGetPostsQuery } = socialApi;
