import { lazy, Suspense, useEffect } from 'react';
import AppHeader from '../appHeader/AppHeader';
// import MainPage from '../pages/MainPage';
// import CocksByIngsPage from '../pages/CocksByIngsPage';
// import SingleCockPage from '../pages/SingleCockPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AAAMain } from '../aaTest/aaaMain';
import InfoPanel from '../aaTest/AaTest'; 
import AcRef from '../aaTest/acRef';
import ChangeStyle from '../aaTest/adUseReducer';

const Page404 = lazy(() => import('../pages/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CocksByIngsPage = lazy(() => import('../pages/CocksByIngsPage'));
const SingleCockPage = lazy(() => import('../pages/SingleCockPage'));
const App = () => {
  
  return (
    <BrowserRouter>
      <div className="app">
        {/* -----------  Раздел для тестовых модулей  -----------*/}
  
        {/* -------------------------------------------------------- */}
    {/* <ChangeStyle/> */}
        {/* -------------------------------------------------------- */}
        <AppHeader />
        <main>
          <Suspense fallback={<span>Loading...111</span>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<CocksByIngsPage />} />
              <Route path="/comics/:cockID" element={<SingleCockPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
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

const CountOfLikes = ({ countOfLikes }) => {
  return <h3>Amount of likes: {countOfLikes}</h3>;
};

const CurrentDate = ({ currentDate }) => {
  return <h3>Current date is : {currentDate}</h3>;
};

// ----------------------------------------

export default App;
