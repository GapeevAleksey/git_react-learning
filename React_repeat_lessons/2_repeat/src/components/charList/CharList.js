import './charList.scss';
import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import useCockServices from '../../services/CockServices';

const CharList = ({ changeCurrentCock }) => {
  const cockServices = useCockServices();
  const myRefs = {};
  const [cocks, setCocks] = useState([]);
  const [qtyLoad, setQtyLoad] = useState(6);
  const [activeCard, setActiveCard] = useState(null);

  const shuffleCocks = (cocks) => {
    let j, temp;
    for (let i = cocks.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cocks[j];
      cocks[j] = cocks[i];
      cocks[i] = temp;
    }
    return cocks; 
  };

  const showCocks = () => {

    return cocks.map((item, index) => {
      if (index < qtyLoad) {
        return (
          <li
            // ref={(e) => (myRefs[index] = e)}
            className={
              activeCard === index ? 'char__item_selected' : 'char__item'
            }
            tabIndex={0}
            key={index}
            onClick={() => {
              setActiveCard(index);
              changeCurrentCock(item.idDrink);
            }}
          >
            <img src={item.strDrinkThumb} alt={item.strDrink} />
            <div className="char__name">{item.strDrink}</div>
          </li>
        );
      }
    });
  };

  useEffect(() => {
    cockServices
      .getAllCocks()
      .then((response) => setCocks(shuffleCocks(response)));
  }, []);

  return (
    <div className="char__list">
      {!cockServices.loading ? (
        <ul className="char__grid">{showCocks()}</ul>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Spinner />
        </div>
      )}

      <button className="button button__main button__long">
        <div
          className="inner"
          onClick={() => setQtyLoad((prevState) => prevState + 3)}
        >
          load more
        </div>
      </button>
    </div>
  );
};

export default CharList;
