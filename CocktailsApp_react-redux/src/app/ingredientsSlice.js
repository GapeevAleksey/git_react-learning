import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useCocktails } from '../services/useCocktails';
const initialState = {
  ingredients: null,
  currentIngredient: 'Amaretto',
  loadingStatus: null,
  errorStatus: null,
};

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  () => {
    const { getIngredientsList } = useCocktails();
    return getIngredientsList();
  }
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setCurrentIngredient: (state, action) => {
      state.currentIngredient = action.payload;
    },
  },
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.errorStatus = null
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.ingredients = action.payload;
      state.loadingStatus = 'loaded';
    },
    [fetchIngredients.rejected]: (state, action) => { 
      state.loadingStatus = null;
      state.errorStatus = 'Some error has occurred'
    },
  },
});

export const { setCurrentIngredient } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
