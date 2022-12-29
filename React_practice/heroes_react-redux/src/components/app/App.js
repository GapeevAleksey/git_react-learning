import HeroesPage from '../../pages/heroesPage';
import './app.scss';
import { Routes, Route } from 'react-router-dom';
import UsersPage from '../../pages/usersPage';
import Header from '../header/Header';

const App = () => {
  return (
    <main className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route index element={<HeroesPage />} />
          <Route path="/" element={<HeroesPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
