import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useCocktails } from '../services/useCocktails';

const initialState = {
  cocktails: [],
};

export const fetchCockailsByIngredient = createAsyncThunk(
  'cocktails/fetchByIngredient',
  (ingredient) => {
    const { getCocktailsByIngredient } = useCocktails();
    const cocktails = getCocktailsByIngredient(ingredient);
    return cocktails;
  }
);

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCockailsByIngredient.fulfilled]: (state, action) => {
      state.cocktails = action.payload;
    },
  },
});

export const {} = cocktailsSlice.actions;

export default cocktailsSlice.reducer;
