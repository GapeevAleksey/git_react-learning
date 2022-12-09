import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useHttp from '../hooks/useHttp';

const initialState = {
  todos: [],
  loadingStatusTodos: 'idle',
  errorStatusTodos: '',
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', () => {
  const { request } = useHttp();
  const todos = request('https://jsonplaceholder.typicode.com/todos?_limit=7');
  return todos;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.loadingStatusTodos = 'loading';
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.loadingStatusTodos = 'loaded';
    },
    [fetchTodos.rejected]: (state, action) => {
      console.log(action);
      state.loadingStatusTodos = 'rejected';
      state.errorStatusTodos = action.error.message;
    },
  },
});

// export const {} = todoSlice.actions;

export default todoSlice.reducer;
