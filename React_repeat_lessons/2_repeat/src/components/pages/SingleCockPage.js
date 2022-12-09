import './SingleCockPage.scss';
import { useParams, Link } from 'react-router-dom';
import useCockServices from '../../services/CockServices';
import { useEffect, useState } from 'react';
import Page404 from './Page404';
import ShowIngs from '../ingredients/Ingredients';

const SingleCockPage = () => {
  const cockServices = useCockServices();
  const { cockID } = useParams();
  const [cock, setCock] = useState(cockID);

  useEffect(() => {
    console.log('CDM_SingleCockPage');
    cockServices
      .getCock(cockID)
      .then((response) => setCock(response.drinks[0]));
  }, [cockID]);

  return (
    <div className="single-comic">
      {!cockServices.loading ? <CockComponent cock={cock} /> : 'Loading...'}
      {/* {cock.idDrink ? <CockComponent cock={cock} /> : <Page404 />} */}

      <Link to="/comics" className="single-comic__back">
        <button className="button button__main button__back">
          <div className="inner">Back to <br/>Coctails</div>
        </button>
      </Link>
    </div>
  );
};

const CockComponent = ({ cock }) => {
  console.log(cock);
  return (
    <>
      <img
        src={cock.strDrinkThumb}
        alt={cock.strDrink}
        className="single-comic__img"
      />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{cock.strDrink}</h2>
        <p className="single-comic__descr">{cock.strInstructions}</p>
        <div className="single-comic__price">{cock.idDrink}</div>
        <div className="char__comics">Ingredients:</div>
        <ShowIngs cock={cock} />
      </div>
    </>
  );
};

export default SingleCockPage;
