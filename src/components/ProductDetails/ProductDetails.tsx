import React from 'react';
import {useLogic} from './ProductDetails.logic';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Typography} from '../shared/Typography/Typography';
import {Tag} from '../shared/Tag/Tag';

export const ProductDetails = () => {
  const {product, isAvailable, goToZoomableImageScreen} = useLogic();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToZoomableImageScreen}>
        <Image
          source={{uri: product?.images[0].original}}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Tag
          label={isAvailable ? 'In Stock' : 'Out of stock'}
          isPositive={isAvailable}
        />
        <Typography type="title" style={styles.title}>
          {product?.title}
        </Typography>
        <Typography type="description" style={styles.text}>
          Brand: {product?.brand}
        </Typography>
        <Typography type="description" style={styles.text}>
          Quantity: {product?.quantity}
        </Typography>
        <Typography type="accent">{product?.price}$</Typography>
      </View>
    </View>
  );
};
