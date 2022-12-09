import './App.css';
import PostBody from './components/postBody';
import { createContext, useReducer } from 'react';
import reducer from './components/services/reducer';

const StyleContext = createContext();

function App() {
  const initState = {
    fontSize: 14,
    bold: false,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <div className="App">
      {console.log(state)}
      <span>Размер шрифта: {state.fontSize}</span>
      <PostBody handleClick={handleClick} state={state} />
    </div>
  );
}

export default App;
