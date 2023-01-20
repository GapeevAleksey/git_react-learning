import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { IProduct } from '../../interfaces/interfaces';
import AboutPage from '../../pages/AboutPage';
import MarketPage from '../../pages/MarketPage';
import TodosPage from '../../pages/TodosPage';
import CreateProduct from '../marketComponents/CreateProduct';
import Modal from '../marketComponents/Modal';
import NavBar from '../navBar/NavBar';

import './app.css';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/market" element={<MarketPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
