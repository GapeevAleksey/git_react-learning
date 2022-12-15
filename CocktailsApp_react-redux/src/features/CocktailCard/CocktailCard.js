import styles from './CocktailCard.module.scss';
import addFavoriteIcon from '../../images/balloon-heart.svg';
import removeFavoriteIcon from '../../images/balloon-heart-fill.svg';

import { useDispatch, useSelector } from 'react-redux';
import { openCocktailModal, setCocktailId } from '../../app/coctailsSlice';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
const CocktailCard = ({ strDrink, strDrinkThumb, idDrink }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li
        className={styles.item}
        onClick={() => {
          dispatch(openCocktailModal());
          dispatch(setCocktailId(idDrink));
        }}
      >
        <ToggleFavorite
          idDrink={idDrink}
          data={{ strDrink, strDrinkThumb, idDrink }}
          clazz={{ add: styles.favoriteAdd, remove: styles.favoriteRemove }}
          title={{ add: addFavoriteIcon, remove: removeFavoriteIcon }}
          render={(handleClick, clazz, title) => {
            return (
              <div className={clazz} onClick={handleClick}>
                <img src={title} alt="" />
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
