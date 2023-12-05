import {useLayoutEffect, useState} from 'react';
import {useGetProductsMutation} from '../../services/products.service';

import {useAppDispatch} from '../../store/hooks';
import {
  getCurrentPage,
  getFeed,
  serializeProducts,
  setPage,
} from '../../store/productsSlice';
import {useSelector} from 'react-redux';
import {Product} from '../../schema';

const skeletons = [{}, {}, {}, {}, {}, {}];

export const useLogic = () => {
  const page = useSelector(getCurrentPage);
  const data = useSelector(getFeed);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const [fetchProducts] = useGetProductsMutation();

  useLayoutEffect(() => {
    fetchProducts({}).then(_data => {
      console.log({_data});
      dispatch(serializeProducts(_data));
      setIsLoading(false);
    });
  }, [dispatch, fetchProducts]);

  const onEndReached = () => {
    if (data?.length !== 0) {
      dispatch(setPage(page + 1));
    }
  };

  return {data, isLoading, onEndReached, skeletons};
};
