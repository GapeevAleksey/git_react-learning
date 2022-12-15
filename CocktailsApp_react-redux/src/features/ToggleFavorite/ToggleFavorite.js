import styles from './ToggleFavorite.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteCocktail,
  removeFavoriteCocktail,
} from '../../app/favoriteSlice';

const ToggleFavorite = ({ idDrink, data, render, clazz, title }) => {
  const { favoriteCocktails } = useSelector((state) => state.favoriteSlice);
  const dispatch = useDispatch();
  const addFavoriteButton = () => {
    const handleClickAdd = (e) => {
      e.stopPropagation();
      dispatch(addFavoriteCocktail({ id: idDrink, cocktail: data }));
    };
    return render(handleClickAdd, clazz.add, title.add);
  };
  const removeFavoriteButton = () => {
    const handleClickRemove = (e) => {
      e.stopPropagation();
      dispatch(removeFavoriteCocktail({ id: idDrink }));
    };

    return render(handleClickRemove, clazz.remove, title.remove);
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
