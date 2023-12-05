import React, {useCallback} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Product} from '../../schema';
import {styles} from './styles';
import {Typography} from '../shared/Typography/Typography';
import {Tag} from '../shared/Tag/Tag';
import {useNavigation} from '@react-navigation/native';

import {PRODUCT_DETAILS_SCREEN} from '../../routes/constants';
import {RootStackNavigationProps} from '../../routes/schema';

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({product}: ProductListItemProps) => {
  const isAvailable = product?.quantity > 0;
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const goToProductDetails = useCallback(
    () => navigate(PRODUCT_DETAILS_SCREEN, {productId: product.id}),
    [navigate, product.id],
  );

  return (
    <TouchableOpacity style={styles.container} onPress={goToProductDetails}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: product.images[0].thumbnail}}
        />
      </View>
      <View style={styles.content}>
        <Tag
          label={isAvailable ? 'In Stock' : 'Unavailable'}
          isPositive={isAvailable}
        />
        <Typography type="title" numberOfLines={2}>
          {product.title}
        </Typography>
        <Typography type="accent">{Math.round(product.price)}$</Typography>
      </View>
    </TouchableOpacity>
  );
};
