import { githubApi } from './githubApi';
import { configureStore } from '@reduxjs/toolkit/';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },

  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    githubApi.middleware,
  ],
});
