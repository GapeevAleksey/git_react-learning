export const useRequest = () => {
  const request = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status > 400) {
        throw new Error('Server request error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { request };
};
