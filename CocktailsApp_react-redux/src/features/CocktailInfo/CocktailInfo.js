import styles from './CocktailInfo.module.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailInfo } from '../../app/coctailsSlice';
import CocktaiIngredients from '../CocktaiIngredients/CocktaiIngredients';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import ModalSkeleton from '../Sketeton/ModalSkeleton/ModalSkeleton';
const CocktailInfo = () => {
  const dispatch = useDispatch();
  const { cocktailInfo, cocktailModal } = useSelector(
    (state) => state.cocktailsSlice
  );
  const { data, cocktailId } = cocktailInfo;
  console.log(data);

  const toggleFavoriteClasses = {
    add: styles.favoriteAdd,
    remove: styles.favoriteRemove,
  };
  const toggleFavoriteTitle = {
    add: 'Add favorite',
    remove: 'Remove favorite',
  };

  useEffect(() => {
    document.querySelector('.activeCardInfo').scrollTop = 0;
    dispatch(fetchCocktailInfo(cocktailId));
  }, [cocktailId]);

  const showCocktailInfo = () => {
    if (cocktailModal && cocktailInfo.loadingStatus !== 'loaded') {
      return <ModalSkeleton />;
    }
    const { strDrinkThumb, strDrink, idDrink, strInstructions, strAlcoholic } =
      data;
    const showInstruction = () => {
      return strInstructions?.length > 400
        ? strInstructions.slice(0, 500) + '...'
        : strInstructions;
    };
    return (
      <div className={styles.body}>
        <div className={styles.image}>
          {strAlcoholic === 'Non alcoholic' ? (
            <span className={styles.marker}></span>
          ) : null}
          <img src={strDrinkThumb} alt={strDrink} />
          <ToggleFavorite
            idDrink={idDrink}
            data={data}
            clazz={toggleFavoriteClasses}
            title={toggleFavoriteTitle}
            render={(handleClick, clazz, title) => {
              return (
                <button className={clazz} onClick={handleClick}>
                  {title}
                </button>
              );
            }}
          />
        </div>

        <div className={styles.textBlock}>
          <div className={styles.description}>
            <h2>{strDrink}</h2>
            <p>{showInstruction()}</p>
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
