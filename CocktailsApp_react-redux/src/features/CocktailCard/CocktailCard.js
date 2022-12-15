import styles from './CocktailCard.module.scss'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCocktailModal, setCocktailId } from '../../app/coctailsSlice';
const CocktailCard = ({ strDrink, strDrinkThumb, idDrink }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}
      onClick={() => {
        dispatch(openCocktailModal());
        dispatch(setCocktailId(idDrink))
      }}
    >
      <div className={styles.image}>
        <img src={strDrinkThumb} alt="" />
      </div>
      <span>{strDrink}</span>
    </li>
  );
};

export default CocktailCard;
