import { useEffect, useState } from 'react';
import useCockServices from '../../services/CockServices';
import { Link } from 'react-router-dom';
const CocksList = ({ currentIngredient }) => {
  const emptyCock = {
    idDrink: '',
    strDrinkThumb: 'https://cs8.pikabu.ru/avatars/716/x716911-755377362.png',
    strDrink: '',
  };
  const _initQtyLoad = 18;
  const _cocksInRow = 6;
  const cockServices = useCockServices();
  const [cocks, setCocks] = useState([]);
  const [cocksDB, setCocksDB] = useState([]);
  const [qtyLoad, setQtyLoad] = useState(_initQtyLoad);

  useEffect(() => {
    setQtyLoad(_initQtyLoad);
    cockServices
      .getCocksByIngredient(currentIngredient)
      .then((res) => setCocks(res.drinks));
  }, [currentIngredient]);

  const _transformCocks = (cocks) => {
    const emptyCocks = [];
    const countEmptyCocks = 6 - (cocks.length % _cocksInRow);
    for (let i = countEmptyCocks; i > 0 && i < 6; i--) {
      emptyCocks.push(emptyCock);
    }
    setCocksDB([...cocks, ...emptyCocks]);
  };

  useEffect(() => {
    console.log('change_cocks');

    if (document.querySelector('.list-cocks')) {
      document
          .querySelector('.list-cocks').scrollTop = 0
    }
    setQtyLoad(_initQtyLoad)
    _transformCocks(cocks);
  }, [cocks]);

  useEffect(() => {
    const cocksListDiv = document.querySelector('.list-cocks');
    const cocksListGrid = document.querySelector('.comics__grid');
    console.log('CDM_CocksList');
    const autoLoadCocks = (e) => {
      if (
        cocksListGrid.getBoundingClientRect().bottom <
        cocksListDiv.clientHeight + 150
      ) {
        setQtyLoad((qtyLoad) => qtyLoad + 6);
      }
    };
    cocksListDiv.addEventListener('scroll', autoLoadCocks);
    return () => cocksListDiv.removeEventListener('scroll', autoLoadCocks);
  }, [qtyLoad]);

  // useEffect(() => {
  //   const cocksList = document.querySelector('.list-cocks');
  //   cocksList.scrollTop = cocksList.scrollHeight;
  // }, [qtyLoad]);

  const showCocks = (cocksDB) => {
    return cocksDB.map((cock, i) => {
      if (i < qtyLoad) {
        return (
          <li
            key={cock.idDrink + i}
            className={cock.idDrink ? 'comics__item' : 'comics__item-empty'}
          >
            <Link to={cock.idDrink}>
              <img
                src={cock.strDrinkThumb}
                alt="ultimate war"
                className="comics__item-img"
              />
              <div className="comics__item-name">{cock.strDrink}</div>
              <div className="comics__item-price">{cock.idDrink}</div>
            </Link>
          </li>
        );
      }
    });
  };
  return (
    <>
      {!cocks ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <div
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: '20px',
              borderBottom: '2px solid rgb(218, 218, 218)',
              paddingBottom: 10,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <h2>{currentIngredient}</h2>
          </div>{' '}
          <div className="list-cocks">
            <ul className="comics__grid">{showCocks(cocksDB)}</ul>
            {qtyLoad < cocksDB.length ? (
              <button className="button button__main button__long">
                <div
                  className="inner"
                  onClick={() => {
                    setQtyLoad((qtyLoad) => qtyLoad + 6);
                  }}
                >
                  load more
                </div>
              </button>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default CocksList;
