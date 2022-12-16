import { configureStore } from '@reduxjs/toolkit';
import personsDB from '../reducers/persons';
import todosSlice from '../reducers/todoSlice';
export const store = configureStore({
  reducer: { personsDB, todosSlice },
});
