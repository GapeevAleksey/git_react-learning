import React, { useEffect } from 'react';
import { fetchCockailsByIngredient } from '../../app/coctailsSlice';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';

const CocktailCardList = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(
    (state) => state.cocktailsSlice.cocktails.drinks
  );
  useEffect(() => {
    dispatch(fetchCockailsByIngredient('gin'));
  }, []);

  return (
    <div className="coctails">
      <div className="titleIngridient">
        <span>Ingridient</span>
      </div>
      <ul>
        {cocktails?.map(({ strDrink, strDrinkThumb }) => (
          <CocktailCard
            key={strDrink}
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
          />
        ))}
      </ul>
    </div>
  );
};

export default CocktailCardList;
