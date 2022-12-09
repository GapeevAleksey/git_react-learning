const initialState = {
    filter: 'all',
  };
  
  const filter = (state = initialState, action) => {
    switch (action.type) {
      case 'HERO_FILTER':
        return { ...state, filter: action.payload };
      default:
        return state;
    }  
  };
  
  export default filter;
  