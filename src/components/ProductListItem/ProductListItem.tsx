import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Product} from '../../schema';
import {styles} from './styles';
import {Typography} from '../shared/Typography/Typography';
import {Tag} from '../shared/Tag/Tag';

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({product}: ProductListItemProps) => {
  const isAvailable = product?.quantity > 0;
  return (
    <TouchableOpacity style={styles.container}>
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