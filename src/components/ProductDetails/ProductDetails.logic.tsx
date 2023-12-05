import {useCallback, useEffect, useState} from 'react';
import {Product} from '../../schema';
import {response} from '../../mock';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../routes/schema';
import {IMAGE_ZOOMABLE_SCREEN} from '../../routes/constants';

export const useLogic = (productId: number) => {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const isAvailable = product?.quantity !== undefined && product.quantity > 0;

  useEffect(() => {
    setProduct(
      response.data.items.filter((item: Product) => item.id === productId)[0],
    );

    return () => {};
  }, [productId]);

  const goToZoomableImageScreen = useCallback(
    () =>
      navigate(IMAGE_ZOOMABLE_SCREEN, {
        uri: 'https://www.shutterstock.com/image-vector/stacked-tower-abstract-server-hdd-260nw-2099038765.jpg',
      }),
    [navigate],
  );

  return {product, isAvailable, goToZoomableImageScreen};
};
