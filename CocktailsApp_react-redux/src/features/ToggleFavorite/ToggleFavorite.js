import styles from './ToggleFavorite.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteCocktail,
  removeFavoriteCocktail,
} from '../../app/favoriteSlice';

const ToggleFavorite = ({ idDrink, data }) => {
  const { favoriteCocktails } = useSelector((state) => state.favoriteSlice);
  const dispatch = useDispatch();
  const addFavoriteButton = () => {
    return <button
      onClick={() =>
        // Сделать проверку повторного нажатия
        dispatch(addFavoriteCocktail({ id: idDrink, cocktail: data }))
      }
      className={styles.add}
    >
      Add to favorite
    </button>;
  };
  const removeFavoriteButton = () => {
    return <button
      onClick={() =>
        // Сделать проверку повторного нажатия
        dispatch(removeFavoriteCocktail({ id: idDrink }))
      }
      className={styles.remove}
    >
      Remove to favorite
    </button>;
  };

  return (
    <>
      {favoriteCocktails[idDrink]
        ? removeFavoriteButton()
        : addFavoriteButton()}
    </>
  );
};

export default ToggleFavorite;
