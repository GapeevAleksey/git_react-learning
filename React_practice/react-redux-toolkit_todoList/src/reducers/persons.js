import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialPersons from '../databasePersons/index';
const initialState = {
  persons: [],
  loadingStatus: 'idle',
  errorStatus: null,
};

export const fetchPersons = createAsyncThunk(
  'persons/fetchPersons',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (response.status > 300) {
        throw new Error('Ошибка загрузки!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    addPerson(state, action) {
      state.persons.unshift(action.payload.newPerson);
    },
    removePerson(state, action) {
      state.persons = state.persons.filter(
        (person) => person.id !== action.payload.id
      );
    }, 
  },
  extraReducers: {
    [fetchPersons.pending]: (state) => {
      state.loadingStatus = 'loading';
      state.errorStatus = null;
    },
    [fetchPersons.fulfilled]: (state, action) => {
      state.loadingStatus = 'loaded';
      state.persons = action.payload;
    },
    [fetchPersons.rejected]: (state, action) => {
      state.loadingStatus = 'rejected';
      state.errorStatus = action.payload;
      console.log(state.errorStatus);
    },
  },
});

export const { addPerson, removePerson } = personsSlice.actions;

export default personsSlice.reducer;
