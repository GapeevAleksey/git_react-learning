import React from 'react';
import styles from './CocktaiIngredients.module.scss';
const CocktaiIngredients = ({ cocktail }) => {
  const CocktaiIngredientsList = (cocktail) => {
    const ingredients = [];
    let numberOfIngredient = 1;

    for (let key in cocktail) {
      if (key.includes('strIngredient' + numberOfIngredient) && cocktail[key]) {
        ingredients.push(
          <li key={key} className={styles.item}>
            {numberOfIngredient}. {cocktail[key]} -{' '}
            {cocktail['strMeasure' + numberOfIngredient]
              ? cocktail['strMeasure' + numberOfIngredient]
              : 'OPTIONAL'}
          </li>
        );
        numberOfIngredient++;
      }
    }
    return ingredients;
  };

  return <ul className={styles.list}>{CocktaiIngredientsList(cocktail)}</ul>;
};

export default CocktaiIngredients;
