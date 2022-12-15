import styles from './IngredientFilter.module.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchIngredients,
  setCurrentIngredient,
} from '../../app/ingredientsSlice';

const IngredientFilter = () => {
  const [searchIngredient, setSearchIngredient] = useState('');
  const dispatch = useDispatch();
  const ingredientsSlice = useSelector((state) => state.ingredientsSlice);
  const { ingredients, currentIngredient } = ingredientsSlice;

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
    const ingredientsList = ingredients.drinks.map(
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

  return (
    <div className={styles.filterPanel}>
      <input
        className={styles.inputSearch}
        value={searchIngredient}
        type="text"
        placeholder="Search ingridient"
        // onChange={(e) => dispatch(setCurrentIngredient(e.target.value))}
        onChange={(e) => setSearchIngredient(e.target.value)}
      />
      <ul className={styles.list}>{showIngredientsList(searchIngredient)}</ul>
    </div>
  );
};

export default IngredientFilter;
