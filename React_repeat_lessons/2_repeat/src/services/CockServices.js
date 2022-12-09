import useHttp from '../hooks/http.hook';

const useCockServices = () => {
  const { loading, request, error } = useHttp(); 

  const _apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

  const getAllCocks = async () => {
    const res = await request(`${_apiURL}filter.php?a=Alcoholic`);
    return res.drinks.map(_transformDB);
  };

  const getCock = async (idDrink) => {
    return await request(`${_apiURL}lookup.php?i=${idDrink}`); 
  };

  const getRandomCock = async () => {
    const res = await request(`${_apiURL}random.php`);
    return _transformDB(res.drinks[0]);
  };

  const getIngredientsList = async () => {
    return await request(`${_apiURL}list.php?i=list`);
  };

  const getCocksByIngredient = async (ingredient) => {
    return await request(`${_apiURL}filter.php?i=${ingredient}`);
  };

  const _transformDB = (cock) => {
    const strInstructions = cock.strInstructions
      ? cock.strInstructions
      : 'Описание отсутствует';
    return {
      idDrink: cock.idDrink,
      strDrink: cock.strDrink,
      strInstructions:
        strInstructions.length > 450
          ? strInstructions.slice(0, 450) + '...'
          : strInstructions,
      strDrinkThumb: cock.strDrinkThumb,
      strIngredients: null,
    };
  };
  return {
    loading,
    error,
    getAllCocks,
    getCock,
    getRandomCock,
    getIngredientsList,
    getCocksByIngredient,
  };
};

export default useCockServices;
