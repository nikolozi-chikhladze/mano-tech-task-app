import {useEffect, useLayoutEffect, useState} from 'react';
import {Product} from '../../schema';
import {useGetProductsMutation} from '../../services/products.service';
import {response} from '../../mock';

const skeletons = [{}, {}, {}, {}, {}, {}];

export const useLogic = () => {
  const [products] = useState<Product[]>(response.data.items);
  const [isLoading, setIsLoading] = useState(true);
import {useAppDispatch} from '../../store/hooks';
import {
  fetchNextPage,
  getCurrentPage,
  getProducts,
  serializeProducts,
  setPage,
} from '../../store/productsSlice';
import {useSelector} from 'react-redux';

export const useLogic = () => {
  const products = useSelector(getProducts);
  const page = useSelector(getCurrentPage);

  const [data, setData] = useState(products);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const [fetchProducts] = useGetProductsMutation();

  useEffect(() => {
    if (page !== 1 && products.length > 0) {
      console.log('fetching more');
      setData(_data => [..._data, ...products]);
    }
  }, [page, products]);

  useEffect(() => {
    console.log('load');
    fetchProducts(undefined).then(_data => {
      // console.log(data.data.data.items);
      dispatch(serializeProducts(_data.data.data.items));
      setIsLoading(false);
      console.log({products});
      setData(products);
    });
  }, [dispatch, fetchProducts, products]);

  const onEndReached = () => {
    console.log('end reached');
    if (data?.length !== 0) {
      dispatch(setPage(page + 1));
    }
  };

  return {data, isLoading, onEndReached, skeletons};
};
