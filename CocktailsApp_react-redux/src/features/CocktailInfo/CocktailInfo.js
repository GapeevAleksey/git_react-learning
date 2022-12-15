import styles from './CocktailInfo.module.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailInfo } from '../../app/coctailsSlice';
import CocktaiIngredients from '../CocktaiIngredients/CocktaiIngredients';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import ModalSkeleton from '../Sketeton/ModalSkeleton/ModalSkeleton';
const CocktailInfo = () => {
  const { cocktailInfo, cocktailModal } = useSelector(
    (state) => state.cocktailsSlice
  );
  const { data, cocktailId } = cocktailInfo;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktailInfo(cocktailId));
  }, [cocktailId]);

  const showCocktailInfo = () => {
    if (cocktailModal && cocktailInfo.loadingStatus !== 'loaded') {
      console.log(data);
      return <ModalSkeleton />;
    }
    const { strDrinkThumb, strDrink, idDrink, strInstructions } = data;
    return (
      <div className={styles.body}>
        <div className={styles.image}>
          <img src={strDrinkThumb} alt={strDrink} />
          <ToggleFavorite
            idDrink={idDrink}
            data={data}
            render={(data) => {
              <button
                onClick={(handleClick) => {
                  handleClick();
                }}
              />;
            }}
          />
        </div>

        <div className={styles.textBlock}>
          <div className={styles.description}>
            <h2>{strDrink}</h2>
            <p>{strInstructions}</p>
            <div>{idDrink}</div>
          </div>
          <div className={styles.ingredients}>
            <h3 className={styles.title}>Ingredients:</h3>
            <CocktaiIngredients cocktail={data} />
          </div>
        </div>
      </div>
    );
  };

  return showCocktailInfo();
};

export default CocktailInfo;
