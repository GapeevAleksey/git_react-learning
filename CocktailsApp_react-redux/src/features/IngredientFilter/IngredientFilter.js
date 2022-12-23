import styles from './IngredientFilter.module.scss';
import searchIcon from '../../images/searchSymbol.png';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchIngredients,
  setCurrentIngredient,
} from '../../app/ingredientsSlice';
import LoadingPlug from '../LoadingPlug/LoadingPlug';

const IngredientFilter = () => {
  const [searchIngredient, setSearchIngredient] = useState('');
  const dispatch = useDispatch();
  const ingredientsSlice = useSelector((state) => state.ingredientsSlice);
  const { ingredients, currentIngredient, loadingStatus, errorStatus } =
    ingredientsSlice;
  const [filterPanel, setFilterPanel] = useState(false);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  useEffect(() => {
    const activeIngredient = document.querySelector('.activeItem');
    setTimeout(() => {
      if (activeIngredient) {
        console.log(activeIngredient);
        activeIngredient.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }
    }, 500);
  }, [ingredients]);

  const showIngredientsList = (filter) => {
    if (!ingredients) {
      return;
    }
    const ingredientsList = ingredients.map(
      (ingredient) => ingredient.strIngredient1
    );
    ingredientsList.sort();
    return ingredientsList.map((ingredient) => {
      if (ingredient.toLowerCase().indexOf(filter.toLowerCase(), 0) === 0) {
        return (
          <li
            onClick={() => {
              ingredient.toLowerCase() !== currentIngredient.toLowerCase() &&
                dispatch(setCurrentIngredient(ingredient));
              setFilterPanel(false);
            }}
            className={
              ingredient.toLowerCase() === currentIngredient.toLowerCase()
                ? `${styles.item} ${styles.active} activeItem`
                : styles.item
            }
            key={ingredient}
          >
            {ingredient}
          </li>
        );
      }
    });
  };

  const filterHOC = () => {
    if (errorStatus) {
      return <h2>{errorStatus}</h2>;
    } else if (loadingStatus === 'loading') {
      return <LoadingPlug />;
    } else {
      return (
        <ul className={styles.list}>{showIngredientsList(searchIngredient)}</ul>
      );
    }
  };

  return (
    <div className={`${styles.filterBlock} ${filterPanel && styles.active}`}>
      <span
        className={styles.searchIcon}
        onClick={() => {
          setFilterPanel(!filterPanel);
        }}
      >
        <img src={searchIcon} alt="search" />
      </span>

      <input
        className={`${styles.inputSearch} ${filterPanel && styles.active}`}
        value={searchIngredient}
        type="text"
        placeholder="Search..."
        // onChange={(e) => dispatch(setCurrentIngredient(e.target.value))}
        onChange={(e) => setSearchIngredient(e.target.value)}
      />
      <div className={`${styles.filterPanel} ${filterPanel && styles.active}`}>
        {filterHOC()}
      </div>
    </div>
  );
};

export default IngredientFilter;
