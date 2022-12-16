import styles from './FavoritePage.module.scss'
import {useSelector } from 'react-redux';
import CocktailCard from '../features/CocktailCard/CocktailCard';
const FavoritePage = () => {
  const { favoriteCocktails } = useSelector((state) => state.favoriteSlice);
  const favoriteCocktailsArray = Object.values(favoriteCocktails);
  return (
    <div className={styles.body}>
      {favoriteCocktailsArray?.map((cocktail) => {
        return (
          <CocktailCard
            key={cocktail.strDrink}
            strDrink={cocktail.strDrink}
            strDrinkThumb={cocktail.strDrinkThumb}
            idDrink={cocktail.idDrink}
          />
        );
      })}
    </div>
  );
};

export default FavoritePage;
