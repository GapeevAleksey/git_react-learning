import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useCocktails } from '../services/useCocktails';

const initialState = {
  cocktails: {},
  cocktailModal: false,
  loadingStatus: null,
  errorStatus: null,
  cocktailInfo: {
    data: {},
    cocktailId: '',
    loadingStatus: null,
    errorStatus: null,
  },
};

export const fetchCockailsByIngredient = createAsyncThunk(
  'cocktails/fetchByIngredient',
  (ingredient) => {
    const { getCocktailsByIngredient } = useCocktails();
    const cocktails = getCocktailsByIngredient(ingredient);
    return cocktails;
  }
);
export const fetchCocktailInfo = createAsyncThunk(
  'cocktails/fetchCocktailInfo',
  (cocktailId) => {
    const { getCocktailInfo } = useCocktails();
    const cockailInfo = getCocktailInfo(cocktailId);
    return cockailInfo;
  }
);

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    openCocktailModal: (state) => {
      state.cocktailModal = true;
    },
    closeCocktailModal: (state) => {
      state.cocktailModal = false;
    },
    setCocktailId: (state, action) => {
      state.cocktailInfo.cocktailId = action.payload;
    },
  },
  extraReducers: {
    [fetchCockailsByIngredient.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.errorStatus = null;
    },
    [fetchCockailsByIngredient.fulfilled]: (state, action) => {
      state.cocktails = action.payload;
      state.loadingStatus = 'loaded';
    },
    [fetchCockailsByIngredient.rejected]: (state) => {
      state.errorStatus = 'Some error has occurred';
    },
    [fetchCocktailInfo.pending]: (state) => {
      state.cocktailInfo.loadingStatus = 'loading';
      state.cocktailInfo.errorStatus = null;
    },
    [fetchCocktailInfo.fulfilled]: (state, action) => {
      state.cocktailInfo.data = action.payload;
      state.cocktailInfo.loadingStatus = 'loaded';
    },
    [fetchCocktailInfo.rejected]: (state) => {
      state.cocktailInfo.errorStatus = 'Some error has occurred';
    },
  },
});

export const { openCocktailModal, closeCocktailModal, setCocktailId } =
  cocktailsSlice.actions;

export default cocktailsSlice.reducer;
