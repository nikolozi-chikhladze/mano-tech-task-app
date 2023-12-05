import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ProductDetails} from '../components/ProductDetails/ProductDetails';
import {ProductDetailsScreenRouteType} from '../routes/schema';

export const ItemDetailsScreen = () => {
  const {
    params: {productId},
  } = useRoute<ProductDetailsScreenRouteType>();

  return <ProductDetails productId={productId} />;
};
