import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { useState } from 'react';

const MainPage = () => {
  const [currentCock, setCurrentCock] = useState('17266');

  const changeCurrentCock = (idCock) => {
    if (idCock === currentCock) {
      return;
    }
    setCurrentCock(idCock); 
  };

  localStorage.clear();
  return (
    <>
      <RandomChar changeCurrentCock={changeCurrentCock} />
      <div className="char__content">
        <CharList changeCurrentCock={changeCurrentCock} />
        <ErrorBoundary>
          <CharInfo currentCock={currentCock} />
        </ErrorBoundary>
      </div>
      {/* <img className="bg-decoration" src={decoration} alt="vision" /> */}
    </>
  );
};

export default MainPage;
