import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  tagTypes: ['Heroes'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getHeroes: builder.query({
      query: (qty) => `heroes${qty && `?_limit=${qty}`}`,
      providesTags: ['Heroes'],
    }),
    addHero: builder.mutation({
      query: (body) => ({
        url: 'heroes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Heroes'],
    }),
    deleteHero: builder.mutation({
      query(id) {
        return {
          url: `heroes/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Heroes'],
    }),
  }),
});
// console.log(heroesApi);
export const { useGetHeroesQuery, useAddHeroMutation, useDeleteHeroMutation } =
  heroesApi;
