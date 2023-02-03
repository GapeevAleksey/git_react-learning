import { githubApi } from './githubApi';
import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './github.slice';

const store: any = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    githubApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
