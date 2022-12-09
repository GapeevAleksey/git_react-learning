import { useState } from 'react';

const useCounter = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const incCounter = (maxLimit) => {
    if (value < maxLimit) {
      setValue((value) => value + 1);
    }
  };

  const decCounter = (minLimit) => {
    if (value > minLimit) {
      setValue((value) => value - 1);
    }
  };

  const rndCounter = (minLimit, maxLimit) => {
    setValue(+(Math.random() * (maxLimit - minLimit) + minLimit).toFixed(0));
  };

  const resetCounter = () => {
    setValue(initialValue);
  };

  return { value, incCounter, decCounter, rndCounter, resetCounter };
};

const Counter = (props) => {
  const counter1 = useCounter(props.counter);
  return (
    <div className="component">
      <div className="counter">{counter1.value}</div>
      <div className="controls">
        <button onClick={() => counter1.incCounter(50)}>INC</button>
        <button onClick={() => counter1.decCounter(-50)}>DEC</button>
        <button onClick={() => counter1.rndCounter(-50, 50)}>RND</button>
        <button onClick={() => counter1.resetCounter()}>RESET</button>
      </div>
    </div>
  );
};

const RndCounter = (props) => {
  const counter2 = useCounter(props.counter);

  return (
    <div className="component">
      <div className="counter">{counter2.value}</div>
      <div className="controls">
        <button onClick={() => counter2.rndCounter(-100, 100)}>RND</button>
        <button onClick={() => counter2.resetCounter()}>RESET</button>
      </div>
    </div>
  );
};

const UseHook = ({ clazz }) => {
  console.log('render_UseHook');
  return (
    <div className={clazz}>
      <Counter counter={10} />
      <RndCounter counter={15} />
    </div>
  );
};

export default UseHook;
