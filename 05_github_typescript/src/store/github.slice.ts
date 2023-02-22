import { IReposItem } from './../types/IRepos';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ActionPayLoadHistory = {
  searchTitle: string;
  repoInfo: IReposItem;
};

type HistorySearch = {
  lastSearch: string;
};

type HistoryType = {
  [key: string]: IReposItem[];
};

type IinitState = {
  historySearch: HistorySearch;
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
  historySearch: { lastSearch: 'githubApi' },
  history: JSON.parse(localStorage.getItem('history') || '{}'),
  historyActivePoint: historyActivePointDefault(),
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
    addLastSearchItem: (state, action: PayloadAction<string>) => {
      state.historySearch.lastSearch = action.payload;
    },
  },
});

export const { addToHistory, setHistoryActivePoint, addLastSearchItem } = githubSlice.actions;

export const githubReducer = githubSlice.reducer;
