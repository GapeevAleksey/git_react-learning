import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import decoration from '../../resources/img/vision.png';
import { Component, useEffect, useState } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import InfoPanel from '../aaTest/AaTest';
import MainDiv from '../aaTest/abTest';
import AcRef from '../aaTest/acRef';
import UseHook from '../aaTest/adUseHook';
import useCockServices from '../../services/CockServices';

const App = () => {
  const [cocks, setCocks] = useState([]);
  const [currentCock, setCurrentCock] = useState({});
  const [loadingAllCocks, setLoadingAllCocks] = useState(true);
  // const [loadingCurrentCock, setLoadingCurrentCock] = useState(true);
  const cockServices = useCockServices();

  const loadAllCocks = () => {
    console.log('loadAllCocks');
    cockServices.getAllCocks().then((res) => {
      setCocks(shuffleCocks(res));
      setLoadingAllCocks(false);
    });
  };

  const changeCurrentCock = (idCock) => {
    if (idCock === currentCock.idDrink) {
      return;
    }
    // setLoadingCurrentCock(true);
    cockServices.getCock(idCock).then((res) => {
      setCurrentCock(res.drinks[0]);
      // setLoadingCurrentCock(false);
    });
  };
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

  useEffect(() => {
    console.log('didMount_App');
    console.dir(changeCurrentCock);
    loadAllCocks();
    changeCurrentCock('11008');
  }, []);

  return (
    <div className="app">
      {/* -----------  Раздел для тестовых модулей  -----------*/}
      {/* <InfoPanel
          render={(countOfLikes, currentDate) => (
            <>
              <CountOfLikes countOfLikes={countOfLikes} />
              <CurrentDate currentDate={currentDate} />
            </>
          )}
        /> */}
      {/* -------------------------------------------------------- */}
      {/* <MainDiv /> */}
      {/* <AcRef /> */}
      {/* <UseHook/> */}
      {/* -------------------------------------------------------- */}
      <AppHeader />
      <main>
        <RandomChar changeCurrentCock={changeCurrentCock} />
        <div className="char__content">
          <CharList
            cocks={cocks}
            changeCurrentCock={changeCurrentCock}
            loading={loadingAllCocks}
          />
          <ErrorBoundary>
            <CharInfo
              currentCock={currentCock}
              loading={cockServices.loading}
              clazz={'bordered1'}
            />
          </ErrorBoundary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

// --- Классовый компонент ---

// class App extends Component {
//   state = {
//     cocks: [],
//     currentCock: {},
//     loadingAllCocks: true,
//     loadingCurrentCock: true,
//   };

//   cockServices = new CockServices();

//   loadAllCocks = () => {
//     console.log('loadAllCocks');
//     this.cockServices
//       .getAllCocks()
//       .then((res) =>
//         this.setState({ cocks: this.shuffleCocks(res), loadingAllCocks: false })
//       );
//   };

//   changeCurrentCock = (idCock) => {
//     if (idCock === this.state.currentCock.idDrink) {
//       return;
//     }
//     this.setState({ loadingCurrentCock: true });
//     this.cockServices
//       .getCock(idCock)
//       .then((res) =>
//         this.setState({ currentCock: res.drinks[0], loadingCurrentCock: false })
//       );
//   };
//   shuffleCocks = (cocks) => {
//     let j, temp;
//     for (let i = cocks.length - 1; i > 0; i--) {
//       j = Math.floor(Math.random() * (i + 1));
//       temp = cocks[j];
//       cocks[j] = cocks[i];
//       cocks[i] = temp;
//     }
//     return cocks;
//   };

//   componentDidMount() {
//     console.log('didMount_App');
//     console.dir(this.changeCurrentCock);
//     this.loadAllCocks();
//     this.changeCurrentCock('11008');
//   }

//   render() {

//     const { cocks, currentCock, loadingAllCocks, loadingCurrentCock } =
//       this.state;

//     return (
//       <div className="app">
//         {/* -----------  Раздел для тестовых модулей  -----------*/}
//         {/* <InfoPanel
//           render={(countOfLikes, currentDate) => (
//             <>
//               <CountOfLikes countOfLikes={countOfLikes} />
//               <CurrentDate currentDate={currentDate} />
//             </>
//           )}
//         /> */}
//         {/* -------------------------------------------------------- */}
//         {/* <MainDiv /> */}
//         <AcRef />
//         {/* -------------------------------------------------------- */}
//         <AppHeader />
//         <main>
//           <RandomChar changeCurrentCock={this.changeCurrentCock} />
//           <div className="char__content">
//             <CharList
//               cocks={cocks}
//               changeCurrentCock={this.changeCurrentCock}
//               loading={loadingAllCocks}
//             />
//             <ErrorBoundary>
//               <CharInfo
//                 currentCock={currentCock}
//                 loading={loadingCurrentCock}
//                 clazz={'bordered1'}
//               />
//             </ErrorBoundary>
//           </div>
//           <img className="bg-decoration" src={decoration} alt="vision" />
//         </main>
//       </div>
//     );
//   }
// }

// -------- PROPS для InfoPanel --------

// const CountOfLikes = ({ countOfLikes }) => {
//   return <h3>Amount of likes: {countOfLikes}</h3>;
// };

// const CurrentDate = ({ currentDate }) => {
//   return <h3>Current date is : {currentDate}</h3>;
// };

// ----------------------------------------

export default App;
