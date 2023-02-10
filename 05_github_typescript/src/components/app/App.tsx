import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/FavoritesPage';
import HistoryPage from '../../pages/HistoryPage';
import SearchPage from '../../pages/SearchPage';
import ContentBody from '../ContentBody/ContentBody';
import Header from '../header/Header';
import { store } from '../../store/store';
import './app.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <Header />
        <ContentBody>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </ContentBody>
      </Provider>
    </div>
  );
};

export default App;
