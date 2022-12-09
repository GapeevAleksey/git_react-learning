import './charInfo.scss';
import { Component, useEffect } from 'react';
import Spinner from '../spinner/Spinner';

const CharInfo = (props) => {
  const { currentCock, loading, clazz } = props;
  const showIngs = (cock) => {
    const ings = [];
    let numberOfIng = 1;

    for (let key in cock) {
      if (key.includes('strIngredient' + numberOfIng) && cock[key]) {
        ings.push(
          <li key={key} className="char__comics-item">
            {key.slice(-1)}. {cock[key]} -{' '}
            {cock['strMeasure' + numberOfIng]
              ? cock['strMeasure' + numberOfIng]
              : 'OPTIONAL'}
          </li>
        );
        numberOfIng++;
      }
    }
    return ings;
  };

  useEffect(() => {
    console.log('useEffect');
  }, [currentCock]);

  return loading ? (
    <div className="char__info">
      <Spinner />
    </div>
  ) : (
    <div className={'char__info ' + clazz}>
      {/* <div className= 'char__info'> */}
      <div className="char__basics">
        <img src={currentCock.strDrinkThumb} alt={currentCock.strDrink} />
        <div>
          <div className="char__info-name">
            {currentCock.strDrink}
            {currentCock.strAlcoholic === 'Alcoholic' ? ' (18+)' : null}
          </div>
          <div className="char__btns">
            <a href="#" className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href="#" className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{currentCock.strInstructions}</div>
      <div className="char__comics">Ingredients:</div>
      <ul className="char__comics-list">{showIngs(currentCock)}</ul>
    </div>
  );
};

export default CharInfo;
