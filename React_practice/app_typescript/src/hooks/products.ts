import { useState, useEffect } from 'react';
import { IProduct } from '../interfaces/interfaces';
import axios, { AxiosError } from 'axios';
export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [product, ...prev]);
  };

  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products/'
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      const errorMessage = error as AxiosError;
      setError(errorMessage.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return { products, loading, error, addProduct };
};
