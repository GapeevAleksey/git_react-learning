import { useEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.development';

const AcRef = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);
  useEffect(() => {
    myRef.current = count;
    console.log(myRef.current, count);
  }, [count]);
  return (
    <>
      <div>count: {count}</div>
      <div>myRef: {myRef.current}</div>
      {/* <button onClick={() => myRef.current++}>Increment myRef</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>count</button>
    </>
  );
};

export default AcRef;
