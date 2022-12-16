import './charInfo.scss';
import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import useCockServices from '../../services/CockServices';
import ShowIngs from '../ingredients/Ingredients';

const CharInfo = (props) => {
  // console.log(props.currentCock);
  const cockServices = useCockServices();
  const [cock, setCock] = useState(props.currentCock);
  const { currentCock, clazz } = props;


  useEffect(() => {
    console.log('CDM_CharInfo');
    cockServices
      .getCock(currentCock)
      .then((response) => setCock(response.drinks[0]));
  }, [currentCock]);

  return cockServices.loading ? (
    <div className="char__info">
      <Spinner />
    </div>
  ) : (
    
    <div className={'char__info'}>
      {/* <div className= 'char__info'> */}
      <div className="char__basics">
        <img src={cock.strDrinkThumb} alt={cock.strDrink} />
        <div>
          <div className="char__info-name">
            {cock.strDrink}
            {cock.strAlcoholic === 'Alcoholic' ? ' (18+)' : null}
          </div>
        </div>
      </div>
      <div className="char__descr">{cock.strInstructions}</div>
      <div className="char__comics">Ingredients:</div>
      <ShowIngs cock={cock}/>
    </div>
  );
};

export default CharInfo;
