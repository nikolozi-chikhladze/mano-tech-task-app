import {useEffect, useState} from 'react';
import {response} from '../../mock';
import {Product} from '../../schema';

export const useLogic = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(response.data.items);
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return {data, isLoading};
};
