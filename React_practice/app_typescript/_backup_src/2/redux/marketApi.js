import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const marketApi = createApi({
  reducerPath: 'marketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (build) => ({
    getAllGoods: build.query({
      query: () => ({
        url: 'products',
      }),
    }),
  }),
});

export const { useGetAllGoodsQuery } = marketApi;