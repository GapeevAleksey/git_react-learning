import { useState } from 'react';

const useHttp = () => {
  const [err, setErr] = useState(null);
  const request = async () => {
    const _url = 'https://jsonplaceholder.typicode.com/users/d'
    try {
      console.log('TRY...');
      const data = await fetch(_url);
      if (!data.ok) {
        throw new Error('Ошибка запроса!');
      }
      return data.json();
    } catch (e) {
      setErr(e.message);
      throw e;
    }
  };
  return { request, err };
};

export default useHttp;
