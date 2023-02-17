import { githubReducer } from './github.slice';
import { githubApi } from './githubApi';
import { configureStore } from '@reduxjs/toolkit/';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    githubReducer,
  },

  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    githubApi.middleware,
  ],
});
