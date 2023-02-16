import { IRepos } from './../types/IRepos';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IQuery {
  search: string;
  page: number;
}

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    getRepos: build.query<IRepos, IQuery>({
      query: ({ search, page }) => ({
        url: `search/repositories`,
        params: {
          q: search,
          per_page: 10,
          page,
          
        },
      }),
    }),
  }),
});

export const { useGetReposQuery, useLazyGetReposQuery } = githubApi;
