import { useEffect, useReducer, useState } from 'react';
import { useRef } from 'react/cjs/react.development';

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { autoInc: state.autoInc - state.autoInc * 2 };
    case 'inc10':
      return { autoInc: state.autoInc + 10 };
    case 'square':
      return { autoInc: state.autoInc * state.autoInc };
    default:
      throw new Error();
  }
}

const AcRef = () => {
  const [count, setCount] = useState(0);
  const [autoInc, dispatch] = useReducer(reducer, { autoInc: 0 });
  const myRef = useRef(0);
  useEffect(() => {
    myRef.current = count;
    console.log(myRef.current, count);
  }, [count]);
  return (
    <>
      <div>count: {count}</div>
      {/* <div>myRef: {myRef.current}</div> */}
      <div>REDUCER: {autoInc.autoInc}</div>

      {/* <button onClick={() => myRef.current++}>Increment myRef</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>count</button>
      <button onClick={() => dispatch({ type: 'toggle' })}>toggle</button>
      <button onClick={() => dispatch({ type: 'inc10' })}>+10</button>
      <button onClick={() => dispatch({ type: 'square' })}>^2</button>
    </>
  );
};

export default AcRef;
