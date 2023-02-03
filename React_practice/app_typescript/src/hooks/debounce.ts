import { useState, useEffect } from 'react';
import { useGetUsersQuery } from '../redux/githubApi';

const useDebounce = (value: string, delay: number): string => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounce;
};

export default useDebounce;
