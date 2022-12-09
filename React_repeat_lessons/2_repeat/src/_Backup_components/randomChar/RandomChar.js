import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component, useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import useCockServices from '../../services/CockServices';

const RandomChar = ({ changeCurrentCock }) => {
  const [cock, setCock] = useState({});

  const cockServices = useCockServices();
  const onCockLoaded = (cock) => {
    setCock(cock);
  };

  const updateCock = () => {
    cockServices.getRandomCock().then((result) => {
      onCockLoaded(result);
    });
  };

  useEffect(() => updateCock(), []);

  return (
    <div className="randomchar">
      {cockServices.loading ? (
        <Spinner />
      ) : (
        <ShowCock cock={cock} changeCurrentCock={changeCurrentCock} />
      )}

      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button className="button button__main" onClick={updateCock}>
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

// class RandomChar extends Component {
//   state = {
//     cock: {},
//     loading: true,
//   };

//   cockServices = new CockServices();

//   onCockLoaded = (cock) => {
//     this.setState({ cock, loading: false });
//   };

//   updateCock = () => {
//     this.setState({ loading: true });
//     this.cockServices.getRandomCock().then((result) => {
//       this.onCockLoaded(result);
//     });
//   };

//   componentDidMount() {
//     this.updateCock();
//   }

//   render() {
//     const { cock, loading } = this.state;
//     const { changeCurrentCock } = this.props;

//     return (
//       <div className="randomchar">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <ShowCock cock={cock} changeCurrentCock={changeCurrentCock} />
//         )}

//         <div className="randomchar__static">
//           <p className="randomchar__title">
//             Random character for today!
//             <br />
//             Do you want to get to know him better?
//           </p>
//           <p className="randomchar__title">Or choose another one</p>
//           <button className="button button__main" onClick={this.updateCock}>
//             <div className="inner">try it</div>
//           </button>
//           <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
//         </div>
//       </div>
//     );
//   }
// }

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
        <div className="randomchar__btns">
          <a href="#" className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href="#" className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
