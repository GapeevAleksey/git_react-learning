import { configureStore } from '@reduxjs/toolkit';
import { socialApi } from './socialApi';
const store = configureStore({
  reducer: {
    [socialApi.reducerPath]: socialApi.reducer,
  },
  middleware: (getDefauiltMiddleware) => [
    ...getDefauiltMiddleware(),
    socialApi.middleware,
  ],
});

export default store;
