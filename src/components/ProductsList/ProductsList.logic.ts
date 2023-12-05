import {useEffect, useState} from 'react';
import {Product} from '../../schema';
import {useGetProductsMutation} from '../../services/products.service';
import {response} from '../../mock';

const skeletons = [{}, {}, {}, {}, {}, {}];

export const useLogic = () => {
  const [products] = useState<Product[]>(response.data.items);
  const [isLoading, setIsLoading] = useState(true);

  const [fetchProducts] = useGetProductsMutation();

  useEffect(() => {
    fetchProducts(undefined).then(data => {
      console.log(data);
      setIsLoading(false);
    });
  }, [fetchProducts]);

  return {products, isLoading, skeletons};
};
