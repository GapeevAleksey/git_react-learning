// import AAAComponent from '../AAAComponent/AAAComponent';
// import BBBComponent from '../AAAComponent/BBBComponent';
import CCC from '../AAAComponent/CCC';
import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Forma from '../AAAComponent/DDD';
import Applic from '../AABHooks/aaUseState';

class App extends Component {
  state = {
    selectedChar: null,
  };
  buttons = [
    { id: 1, name: 'users', title: 'Users', filterType: 'name' },
    { id: 2, name: 'posts', title: 'Posts', filterType: 'title' },
    { id: 3, name: 'todos', title: 'ToDos', filterType: 'title' },
    { id: 4, name: 'albums', title: 'Albums', filterType: 'title' },
  ];
  onCharSelected = (id) => {
    this.setState({ selectedChar: id });
  };

  render() {
    return (
      <div className="app">
        {/* <AAAComponent /> */}
        {/* <BBBComponent /> */}
        <CCC buttons={this.buttons} />
        {/* <Forma>
          <h1>Hello</h1>
          <h2>Bye!!!</h2>
        </Forma> */}
        {/* <AppHeader /> */}
        {/* <Applic /> */}
        <main>
          {/* <RandomChar />
          <div className="char__content">
            <CharList onCharSelected={this.onCharSelected} />
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" /> */}
        </main>
      </div>
    );
  }
}

export default App;
