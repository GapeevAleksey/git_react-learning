import styles from './CocktailCardList.module.scss';
import React, { useEffect, useState } from 'react';
import { fetchCockailsByIngredient } from '../../app/coctailsSlice';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPlug from '../LoadingPlug/LoadingPlug';

const CocktailCardList = () => {
  const dispatch = useDispatch();
  const { cocktailsByIngredient } = useSelector(
    (state) => state.cocktailsSlice
  );
  const { currentIngredient } = useSelector((state) => state.ingredientsSlice);

  const _initialQtyLoadCocktails = 24;
  const [qtyLoadCocktails, setQtyLoadCocktails] = useState(
    _initialQtyLoadCocktails
  );

  useEffect(() => {
    setQtyLoadCocktails(_initialQtyLoadCocktails);
    document.querySelector('.activeBlock').scrollTop = 0;
    dispatch(fetchCockailsByIngredient(currentIngredient));
  }, [currentIngredient]);

  useEffect(() => {
    const cocktailsListDiv = document.querySelector('.activeBlock');
    const cocktailsListUl = document.querySelector('.cocktailsListUl');
    const autoLoadCocktails = () => {
      if (
        cocktailsListUl?.getBoundingClientRect().bottom <
        cocktailsListDiv.clientHeight + 350
      ) {
        setQtyLoadCocktails((qtyLoadCocktails) => {
          if (cocktailsByIngredient.cocktails?.length > qtyLoadCocktails) {
            return qtyLoadCocktails + 6;
          } else {
            return qtyLoadCocktails;
          }
        });
      }
    };
    cocktailsListDiv.addEventListener('scroll', autoLoadCocktails);
    return () =>
      cocktailsListDiv.removeEventListener('scroll', autoLoadCocktails);
  }, [qtyLoadCocktails, cocktailsByIngredient]);

  const showCocktails = () => {
    return (
      <ul className={`${styles.list} cocktailsListUl`}>
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
    );
  };

  const cocktailsHOC = () => {
    if (cocktailsByIngredient.errorStatus) {
      return <h2>{cocktailsByIngredient.errorStatus}</h2>;
    } else if (cocktailsByIngredient.loadingStatus === 'loading') {
      return <LoadingPlug />;
    } else {
      return showCocktails();
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <span>{currentIngredient}</span>
      </div>
      <div className={`${styles.contentBlock} activeBlock`}>
        {cocktailsHOC()}
      </div>
    </div>
  );
};

export default CocktailCardList;
