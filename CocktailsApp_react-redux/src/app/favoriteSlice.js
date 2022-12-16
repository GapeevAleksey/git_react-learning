import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteCocktails: {},
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteCocktail: (state, action) => {
      state.favoriteCocktails[action.payload.id] = action.payload.cocktail;
    },
    removeFavoriteCocktail: (state, action) => {
      delete state.favoriteCocktails[action.payload.id];
    },
  },
});

export const { addFavoriteCocktail, removeFavoriteCocktail } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
