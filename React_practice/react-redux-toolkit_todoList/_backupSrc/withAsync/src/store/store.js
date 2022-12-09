import { configureStore } from '@reduxjs/toolkit';
import { personsReducer } from '../reducers/persons';

export const store = configureStore({
  reducer: { personsDB: personsReducer },
});
