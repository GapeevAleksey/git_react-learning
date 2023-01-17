import { configureStore } from '@reduxjs/toolkit';
import { heroesApi } from '../redux/heroesApi';
import { marketApi } from '../redux/marketApi';
import { testApi } from '../redux/testApi';

const store = configureStore({
  reducer: {
    [heroesApi.reducerPath]: heroesApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [marketApi.reducerPath]: marketApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    heroesApi.middleware,
    testApi.middleware,
    marketApi.middleware,
  ],
});

export default store;
