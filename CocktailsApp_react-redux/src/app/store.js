import { configureStore } from '@reduxjs/toolkit';
import cocktailsSlice from './coctailsSlice';
import ingredientsSlice from './ingredientsSlice';
export const store = configureStore({
  reducer: { cocktailsSlice, ingredientsSlice },
});
