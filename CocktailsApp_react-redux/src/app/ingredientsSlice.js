import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredients: [],
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
});

export const {} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
