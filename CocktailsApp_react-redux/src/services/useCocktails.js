import { useRequest } from '../hooks/useRequest';

export const useCocktails = () => {
  const { request } = useRequest();
  const _apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

  const getCocktailsByIngredient = async (ingredient) => {
    const data = await request(`${_apiURL}search.php?s=${ingredient}`);
    return data;
  };

  return { getCocktailsByIngredient };
};
