import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component, useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import useCockServices from '../../services/CockServices';

const RandomChar = ({ changeCurrentCock }) => {
  const cockServices = useCockServices();
  const [cock, setCock] = useState({});

  const updateCock = () => {
    cockServices.getRandomCock().then((result) => {
      setCock(result);
    });
  };

  useEffect(() => {
    console.log('CDM_RandomChar');
    updateCock();
  }, []);

  return (
    <div className="randomchar">
      {cockServices.loading ? (
        <Spinner />
      ) : (
        <ShowCock cock={cock} changeCurrentCock={changeCurrentCock} />
      )}

      <div className="randomchar__static">
        {/* <p className="randomchar__title">Click and get a random cocktail</p> */}
        <button className="button button__main button__random" onClick={updateCock}>
          <div className="inner">Click and get<br/>a random cocktail</div>
        </button>
        {/* <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" /> */}
      </div>
    </div>
  );
};

const ShowCock = ({ cock, changeCurrentCock }) => {
  const { strDrinkThumb, strDrink, strInstructions, idDrink } = cock;
  return (
    <div className="randomchar__block">
      <img
        src={strDrinkThumb}
        alt="Random character"
        className="randomchar__img"
        onClick={() => changeCurrentCock(idDrink)}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{strDrink}</p>
        <p className="randomchar__descr">{strInstructions}</p>
        {/* <div className="randomchar__btns">
          <a href="#" className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href="#" className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default RandomChar;
