import styles from './MainPage.module.scss';
import React from 'react';
import CoctailCardList from '../features/CocktailCardList/CocktailCardList';
import IngredientFilter from '../features/IngredientFilter/IngredientFilter';

const MainPage = () => {
  return (
    <>
      <div className={styles.contentBody}>
        <IngredientFilter />
        <CoctailCardList />
      </div>
    </>
  );
};

export default MainPage;
