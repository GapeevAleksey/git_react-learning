import React, { useState } from 'react';
import s from './News.module.css';

const News = (props) => {
  let [player1Counter, setPlayer1Counter] = useState(10);
  let [player2Counter, setPlayer2Counter] = useState(10);
  console.log('NEWS is rendered!');
  return (
    <div className="news">
      <div>
        <div>Player1</div>
        <div>{player1Counter}</div>

        <button
          className={s.btnPlus}
          onClick={() => {
            setPlayer1Counter((actual) => actual + 1);
          }}
        >
          +
        </button> 
      </div>
      <hr />
      <div>
        <div>Player2</div>
        <div>{player2Counter}</div>

        <button
          className={s.btnPlus}
          onClick={() => {
            setPlayer2Counter((actual) => actual + 1);
          }}
        >
          +
        </button>
      </div>
      <hr />
      <button
        className={s.btnMinus}
        onClick={() => {
          setPlayer1Counter((actual) => actual - 1);
          setPlayer2Counter((actual) => actual - 1);
        }}
      >
        -
      </button>
      <button
        className={s.btnMinus}
        onClick={() => {
          setPlayer1Counter(10);
          setPlayer2Counter(10);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default News;
