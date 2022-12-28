import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    heroFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { heroFilter } = filterSlice.actions;
