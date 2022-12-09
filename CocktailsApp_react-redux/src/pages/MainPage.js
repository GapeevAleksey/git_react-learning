import React from 'react';
import CoctailCardList from '../features/CocktailCardList/CocktailCardList';
import IngredientFilter from '../features/IngredientFilter/IngredientFilter';

const MainPage = () => {
  return (
    <>
      <div className="contentBody">
        <IngredientFilter />
        <CoctailCardList />
      </div>
    </>
  );
};

export default MainPage;
