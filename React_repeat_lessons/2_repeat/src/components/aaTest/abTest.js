import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './test.scss';
const MainDiv = () => {
  const [showClickModule, setShowClickModule] = useState(true);
  const [counterClick, setCounterClick] = useState(0);
  const buttonTitle = showClickModule ? 'hide' : 'show';
  const calcDiffValue = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, [showClickModule]);
  const countRender = useRef(0);

  const randomColor = useCallback(() => {
    console.log('--------- randomColor ---------');
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  }, [showClickModule]);

  console.log(countRender.current.innerHTML);
  return (
    <div className="test-block">
      <div>{counterClick}</div>
      <div ref={countRender}>{calcDiffValue}</div>
      <button
        onClick={() => {
          setShowClickModule(!showClickModule);
        }}
      >
        {buttonTitle}
      </button>
      {showClickModule ? (
        <ClickModule
          counterClick={counterClick}
          setCounterClick={setCounterClick}
          randomColor={randomColor}
        />
      ) : null}
    </div>
  );
};

const ClickModule = ({ counterClick, setCounterClick, randomColor }) => {
  const handleClick = () => {
    setCounterClick(counterClick + 1);

    console.log('Clicked');
  };
  const [rndColor, setRndColor] = useState('rgb(179, 175, 175)');
  useEffect(() => {
    const testBlockElement = document.querySelector('.test-block');
    testBlockElement.addEventListener('click', handleClick);
    return () => {
      testBlockElement.removeEventListener('click', handleClick);
      console.log('removeEventListener');
    };
  }, [counterClick]);

  useEffect(() => {
    const styleColor = randomColor();
    setRndColor(styleColor);
  }, [randomColor]);
  return (
    <div className="colored-div" style={{ backgroundColor: rndColor }}>
      <span>Click me!</span>
    </div>
  );
};

export default MainDiv;
