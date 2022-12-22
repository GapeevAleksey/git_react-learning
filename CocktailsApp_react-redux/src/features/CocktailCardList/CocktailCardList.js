import styles from './CocktailCardList.module.scss';
import React, { useEffect, useState } from 'react';
import { fetchCockailsByIngredient } from '../../app/coctailsSlice';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';

const CocktailCardList = () => {
  const dispatch = useDispatch();
  const { cocktailsByIngredient } = useSelector(
    (state) => state.cocktailsSlice
  );
  const { currentIngredient } = useSelector((state) => state.ingredientsSlice);
  const initialQtyLoadCocktails = 24;
  const [qtyLoadCocktails, setQtyLoadCocktails] = useState(
    initialQtyLoadCocktails
  );

  useEffect(() => {
    setQtyLoadCocktails(initialQtyLoadCocktails);
    document.querySelector('.activeBlock').scrollTop = 0;
    dispatch(fetchCockailsByIngredient(currentIngredient));
  }, [currentIngredient]);

  useEffect(() => {
    const cocktailsListDiv = document.querySelector('.activeBlock');
    const cocktailsListUl = document.querySelector('.cocktailsListUl');
    const autoLoadCocktails = () => {
      if (
        cocktailsListUl.getBoundingClientRect().bottom <
        cocktailsListDiv.clientHeight + 350
      ) {
        setQtyLoadCocktails((qtyLoadCocktails) => qtyLoadCocktails + 6);
      }
    };
    cocktailsListDiv.addEventListener('scroll', autoLoadCocktails);
    return () =>
      cocktailsListDiv.removeEventListener('scroll', autoLoadCocktails);
  }, [qtyLoadCocktails]);

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <span>{currentIngredient}</span>
      </div>
      <div className={`${styles.contentBlock} activeBlock`}>
        <ul className={`${styles.list} cocktailsListUl`}>
          {cocktailsByIngredient.errorStatus && (
            <h2>{cocktailsByIngredient.errorStatus}</h2>
          )}
          {cocktailsByIngredient.cocktails?.map(
            ({ strDrink, strDrinkThumb, idDrink }, index) => {
              if (index < qtyLoadCocktails) {
                // console.log(qtyLoadCocktails, index);
                return (
                  <CocktailCard
                    key={strDrink}
                    idDrink={idDrink}
                    strDrink={strDrink}
                    strDrinkThumb={strDrinkThumb}
                  />
                );
              }
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default CocktailCardList;
