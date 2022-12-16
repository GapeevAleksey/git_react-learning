const useHttp = () => {
  const request = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status > 300) {
        throw new Error('Error request! try later!');
      }
      const data = response.json();

      return data;
    } catch (error) {
      throw error;
    }
  };

  return { request };
};

export default useHttp;
