import {useState} from 'react'
const useHttp = () => {
  const [error, setError] = useState(null)
  const _url = 'https://jsonplaceholder.typicode.com/';
  const request = async (resource) => {
    try {
      const response = await fetch(`${_url}${resource}`);
      if (response.status !== 200) {
        throw new Error('Bad Status!');
      }
      let data = await response.json();
      if (!Array.isArray(data)) {
        return [data];
      }
      return data;
    } catch (e) {
      setError(e.message)
    }
  };
  return { request, error };
};
export default useHttp;
