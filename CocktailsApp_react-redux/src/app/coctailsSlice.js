import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useCocktails } from '../services/useCocktails';

const initialState = {
  cocktailModal: false,
  cocktailsByIngredient: {
    cocktails: null,
    loadingStatus: null,
    errorStatus: null,
  },
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
      state.cocktailsByIngredient.loadingStatus = 'loading';
      state.cocktailsByIngredient.errorStatus = null;
    },
    [fetchCockailsByIngredient.fulfilled]: (state, action) => {
      state.cocktailsByIngredient.cocktails = action.payload;
      state.cocktailsByIngredient.loadingStatus = 'loaded';
    },
    [fetchCockailsByIngredient.rejected]: (state) => {
      state.cocktailsByIngredient.loadingStatus = null;
      state.cocktailsByIngredient.errorStatus = 'Some error has occurred';
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
      state.cocktailInfo.loadingStatus = 'loaded';
    },
  },
});

export const { openCocktailModal, closeCocktailModal, setCocktailId } =
  cocktailsSlice.actions;

export default cocktailsSlice.reducer;
