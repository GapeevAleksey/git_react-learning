import styles from './CocktailCardList.module.scss'
import React, { useEffect } from 'react';
import { fetchCockailsByIngredient } from '../../app/coctailsSlice';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';

const CocktailCardList = () => {
  const dispatch = useDispatch();
  const cocktailsSlice = useSelector((state) => state.cocktailsSlice);
  const ingredientsSlice = useSelector((state) => state.ingredientsSlice);
  const { currentIngredient } = ingredientsSlice;

  useEffect(() => {
    dispatch(fetchCockailsByIngredient(currentIngredient));
  }, [currentIngredient]);

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <span>{currentIngredient}</span>
      </div>
      <ul className={styles.list}>
        {cocktailsSlice.errorStatus && <h2>{cocktailsSlice.errorStatus}</h2>}
        {cocktailsSlice.cocktails.drinks?.map(({ strDrink, strDrinkThumb, idDrink }) => (
          <CocktailCard
            key={strDrink}
            idDrink={idDrink}
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}

          />
        ))}
      </ul>
    </div>
  );
};

export default CocktailCardList;
