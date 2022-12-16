import styles from './CocktailCardList.module.scss';
import React, { useEffect } from 'react';
import { fetchCockailsByIngredient } from '../../app/coctailsSlice';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';

const CocktailCardList = () => {
  const dispatch = useDispatch();
  const { cocktailsByIngredient } = useSelector(
    (state) => state.cocktailsSlice
  );
  const { currentIngredient } = useSelector((state) => state.ingredientsSlice);

  useEffect(() => {
    dispatch(fetchCockailsByIngredient(currentIngredient));
  }, [currentIngredient]);

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <span>{currentIngredient}</span>
      </div>
      <ul className={styles.list}>
        {cocktailsByIngredient.errorStatus && (
          <h2>{cocktailsByIngredient.errorStatus}</h2>
        )}
        {cocktailsByIngredient.cocktails?.map(
          ({ strDrink, strDrinkThumb, idDrink }) => (
            <CocktailCard
              key={strDrink}
              idDrink={idDrink}
              strDrink={strDrink}
              strDrinkThumb={strDrinkThumb}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default CocktailCardList;
