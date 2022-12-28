import { configureStore } from '@reduxjs/toolkit';
import { heroesApi } from '../redux/heroesApi';

// import heroes from '../components/heroesList/heroesSlice';
// import filter from '../components/heroesFilters/filterSlice';

// const strMiddleWare = () => {
//   return (next) => {
//     return (action) => {
//       if (typeof action === 'string') {
//         return next({
//           type: action,
//         });
//       }
//       return next(action);
//     };
//   };
// };

// const store = configureStore({
//   reducer: { heroes, filter },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(strMiddleWare),
//   devTools: process.env.NODE_ENV !== 'production',
// });

const store = configureStore({
  reducer: {
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroesApi.middleware),
});

export default store;
