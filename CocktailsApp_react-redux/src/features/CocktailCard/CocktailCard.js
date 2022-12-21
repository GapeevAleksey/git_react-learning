import styles from './CocktailCard.module.scss';
import addFavoriteIcon from '../../images/heart.png';
import removeFavoriteIcon from '../../images/heartPink.png';

import { useDispatch, useSelector } from 'react-redux';
import { openCocktailModal, setCocktailId } from '../../app/coctailsSlice';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
const CocktailCard = ({ strDrink, strDrinkThumb, idDrink }) => {
  const dispatch = useDispatch();

  const toggleFavoriteClasses = {
    add: styles.favoriteAddRemove,
    remove: styles.favoriteAddRemove,
  };
  const toggleFavoriteTitle = {
    add: addFavoriteIcon,
    remove: removeFavoriteIcon,
  };

  return (
    <>
      <li
        className={styles.item}
        onClick={() => {
          dispatch(openCocktailModal());
          dispatch(setCocktailId(idDrink));
        }}
      >
        <span className={styles.marker}></span>
        <ToggleFavorite
          idDrink={idDrink}
          data={{ strDrink, strDrinkThumb, idDrink }}
          clazz={toggleFavoriteClasses}
          title={toggleFavoriteTitle}
          render={(handleClick, clazz, title) => {
            return (
              <div className={clazz} onClick={handleClick}>
                <img src={title} alt="*" />
              </div>
            );
          }}
        />
        <div className={styles.image}>
          <img src={strDrinkThumb} alt="" />
        </div>
        <span>{strDrink}</span>
      </li>
    </>
  );
};

export default CocktailCard;
