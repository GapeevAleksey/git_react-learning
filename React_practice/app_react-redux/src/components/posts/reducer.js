const initialState = { id: 0, message: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, id: state.id + 1, message: [...state.message, action.payload] };
    case 'REMOVE':
      return { ...state, message: initialState.message };
    default:
      return { ...state };
  }
};

export default reducer;
