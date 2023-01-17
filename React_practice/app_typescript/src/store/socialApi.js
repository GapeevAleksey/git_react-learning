import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const socialApi = createApi({
  reducerPath: 'social',
  tagTypes: ['Social'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({ url: `posts` }),
      providesTags: ['Social'],
    }),
    removePost: build.mutation({
      query: (id) => ({ url: `posts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Social'],
    }),
    addPost: build.mutation({
      query: (post) => ({ url: `posts`, method: 'POST', body: post }),
      invalidatesTags: ['Social'],
    }),
  }),
});

export const { useGetPostsQuery, useRemovePostMutation, useAddPostMutation } =
  socialApi;
