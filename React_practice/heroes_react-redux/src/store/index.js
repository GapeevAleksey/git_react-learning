import { configureStore } from '@reduxjs/toolkit';
import { heroesApi } from '../redux/heroesApi';
import { testApi } from '../redux/testApi';

const store = configureStore({
  reducer: {
    [heroesApi.reducerPath]: heroesApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    heroesApi.middleware,
    testApi.middleware,
  ],
});

export default store;
