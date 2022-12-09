import { useReducer } from 'react';

const style = {
  fontSize: 14,
  color: 'black',
  fontWeight: 400,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'fontSize':
      return {
        ...state,
        fontSize: Math.floor(Math.random() * 20 + payload),
      };
    case 'color':
      return {
        ...state,
        color: state.color === 'black' ? 'green' : 'black',
      };
    case 'fontWeight':
      return {
        ...state,
        fontWeight: Math.floor(Math.random() * 10) * 100,
      };
    default:
      return { ...state };
  }
}

function fontSize(payload) {
  return {
    type: 'fontSize',
    payload,
  };
}

const ChangeStyle = () => {
  const [styleText, dispatch] = useReducer(reducer, style);

  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      <p style={styleText}>This style of text you can change!</p>
      <button onClick={() => dispatch(fontSize(50))}>Change SIZE</button>
      <button
        onClick={() => {
          dispatch({ type: 'color' });
        }}
      >
        Change COLOR
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'fontWeight' });
        }}
      >
        Change WEIGHT
      </button>
    </div>
  );
};

export default ChangeStyle;
