import {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ProductDetailsScreenRouteType,
  RootStackNavigationProps,
} from '../../routes/schema';
import {IMAGE_ZOOMABLE_SCREEN} from '../../routes/constants';
import {Product} from '../../schema';
import {useGetProductByIdQuery} from '../../services/products.service';

export const useLogic = () => {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const {
    params: {productId},
  } = useRoute<ProductDetailsScreenRouteType>();

  const {data: product, isLoading} = useGetProductByIdQuery(productId);

  const isAvailable = product?.quantity !== undefined && product?.quantity > 0;

  const goToZoomableImageScreen = useCallback(
    () =>
      navigate(IMAGE_ZOOMABLE_SCREEN, {
        uri:
          product?.images?.length > 0
            ? product?.images[0]?.original
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png',
      }),
    [navigate, product?.images],
  );

  return {product, isAvailable, goToZoomableImageScreen, isLoading};
};
