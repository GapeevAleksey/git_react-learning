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

type IinitState = {
  history: HistoryType;
  historyActivePoint: string;
};

const historyActivePointDefault = () => {
  const historyData = JSON.parse(localStorage.getItem('history') || '{}');
  if (historyData) {
    const keysHistory = Object.keys(historyData);
    return keysHistory[keysHistory.length - 1];
  }
  return '';
};

const initialState: IinitState = {
  history: JSON.parse(localStorage.getItem('history') || '{}'),
  historyActivePoint: historyActivePointDefault(),
  //   favorite: [],
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<ActionPayLoadHistory>) => {
      if (state.history[action.payload.searchTitle]) {
        state.history[action.payload.searchTitle] = [
          ...state.history[action.payload.searchTitle],
          action.payload.repoInfo,
        ];
      } else {
        state.history[action.payload.searchTitle] = [action.payload.repoInfo];
      }
      localStorage.setItem('history', JSON.stringify(state.history));
    },
    setHistoryActivePoint: (state, action: PayloadAction<string>) => {
      state.historyActivePoint = action.payload;
    },
  },
});

export const { addToHistory, setHistoryActivePoint } = githubSlice.actions;

export const githubReducer = githubSlice.reducer;
