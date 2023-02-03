import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IInitState {
  favoritesRepos: string[];
}

const LS_FAV_KEY: string = 'rfk';

const initialState: IInitState = {
  favoritesRepos: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<string>) => {
      state.favoritesRepos.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favoritesRepos));
    },
  },
});

export const { addToFavorite } = githubSlice.actions;

export default githubSlice.reducer;
