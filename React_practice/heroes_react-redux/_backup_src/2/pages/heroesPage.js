import React from 'react';
import HeroesAddForm from '../components/heroesAddForm/HeroesAddForm';
import HeroesFilters from '../components/heroesFilters/HeroesFilters';
import HeroesList from '../components/heroesList/HeroesList';

const HeroesPage = () => {
  return (
    <>
      <HeroesList />
      <div className="content__interactive">
        <HeroesAddForm />
        <HeroesFilters />
      </div>
    </>
  );
};

export default HeroesPage;