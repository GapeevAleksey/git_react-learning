import './App.css';
import PostBody from './components/postBody';
import { createContext, useReducer } from 'react';
import reducer from './components/services/reducer';
import StyleContext from './components/services/styleContext';

function App() {

  const initState = {
    fontSize: 14,
    bold: false,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  // function handleClick(type) {
  //   dispatch({ type });
  // }
  const handleClick = (type) => {
    dispatch({ type });
  };

  const value = {
    initState,
    state,
    handleClick,
  };

  return (
    <StyleContext.Provider value={value}>
      <div className="App">
        {console.log(state)}
        <h2>Размер шрифта: {state.fontSize}</h2>
        <PostBody />
      </div>
    </StyleContext.Provider>
  );
}

export default App;
