import React from 'react';
import './App.scss';
import HeaderNavigation from './features/HeaderNavigation/HeaderNavigation';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <HeaderNavigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
