const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: '',
  filter: 'all',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'HERO_REMOVE':
      return { ...state, heroes: action.payload };
    case 'HERO_ADD':
      return { ...state, heroes: [...state.heroes, action.payload] };
    case 'HERO_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
