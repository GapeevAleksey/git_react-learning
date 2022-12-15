import { useRequest } from '../hooks/useRequest';

export const useCocktails = () => {
  const { request } = useRequest();
  const _apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

  const getCocktailsByIngredient = async (ingredient) => {
    const data = await request(`${_apiURL}filter.php?i=${ingredient}`);
    return data;
  };

  const getIngredientsList = async () => {
    const data = await request(`${_apiURL}list.php?i=list`);
    return data;
  };
  const getCocktailInfo = async (cocktailId) => {
    const data = await request(`${_apiURL}lookup.php?i=${cocktailId}`);
    return data.drinks[0];
  };

  return { getCocktailsByIngredient, getIngredientsList, getCocktailInfo };
};
