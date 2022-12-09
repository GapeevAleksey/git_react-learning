import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  persons: ['alex', 'Petr'],
  personLoadingStatus: 'void',
};

export const fetchPersons = createAsyncThunk('persons/fetchPersons', async () => {
  const persons = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => response.json()
  );
  return persons;
});

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    personsLoad(state, action) {
      state.persons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersons.fulfilled, (state, action) => {
        state.persons = action.payload;
      })
      .addDefaultCase(() => {});
  },
});

export const actions = personSlice.actions;
console.log(personSlice)
export const personsReducer = personSlice.reducer;

/////////////////////////////////

 