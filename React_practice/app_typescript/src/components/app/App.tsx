import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ModalState } from '../../context/ModalContext';
import AboutPage from '../../pages/AboutPage';
import GithubPage from '../../pages/GithubPage';
import JavaScriptTrainingPage from '../../pages/JavaScriptTrainingPage';
import MarketPage from '../../pages/MarketPage';
import TodosPage from '../../pages/TodosPage';
import TypeScriptTrainingPage from '../../pages/TypeScriptTrainingPage';
import store from '../../redux/store';

import NavBar from '../navBar/NavBar';

import './app.css';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ModalState>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<TodosPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/github" element={<GithubPage />} />
            <Route path="/typescript" element={<TypeScriptTrainingPage />} />
            <Route path="/javascript" element={<JavaScriptTrainingPage />} />
          </Routes>
        </div>
      </ModalState>
    </Provider>
  );
};

export default App;
