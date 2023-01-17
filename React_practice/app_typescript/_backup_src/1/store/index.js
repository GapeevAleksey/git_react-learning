import { configureStore } from '@reduxjs/toolkit';
import heroes from '../components/heroesList/heroesSlice'
import filter from '../components/heroesFilters/filterSlice'

const strMiddleWare = () => {
  return (next) => {
    return (action) => {
      if (typeof action === 'string') {
        return next({
          type: action,
        });
      }
      return next(action);
    };
  };
};

// const store = createStore(
//   combineReducers({ heroes, filter }),
//   compose(
//     applyMiddleware(ReduxThunk, strMiddleWare),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = configureStore({
  reducer: { heroes, filter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(strMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
