import { IReposItem } from './../types/IRepos';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ActionPayLoadHistory = {
  searchTitle: string;
  repoInfo: IReposItem;
};

type HistoryType = {
  [key: string]: IReposItem[];
};

const initialState = {
  history: {} as HistoryType,
  historyActivePoint: '' as string,
  //   favorite: [],
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<ActionPayLoadHistory>) => {
      if (state.history[action.payload.searchTitle]) {
        if (
          !state.history[action.payload.searchTitle].find((item: IReposItem) => item.id === action.payload.repoInfo.id)
        ) {
          state.history[action.payload.searchTitle] = [
            ...state.history[action.payload.searchTitle],
            action.payload.repoInfo,
          ];
        }
      } else {
        state.history[action.payload.searchTitle] = [action.payload.repoInfo];
      }
    },
    setHistoryActivePoint: (state, action: PayloadAction<string>) => {
      state.historyActivePoint = action.payload;
    },
  },
});

export const { addToHistory, setHistoryActivePoint } = githubSlice.actions;

export const githubReducer = githubSlice.reducer;
