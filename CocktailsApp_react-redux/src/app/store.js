import { configureStore } from '@reduxjs/toolkit';
import cocktailsSlice from './coctailsSlice';
import ingredientsSlice from './ingredientsSlice';
import favoriteSlice from './favoriteSlice';
export const store = configureStore({
  reducer: { cocktailsSlice, ingredientsSlice, favoriteSlice },
});
