import React from 'react';
import {FlatList} from 'react-native';
import {useLogic} from './ProductsList.logic';
import {Loader} from '../Loader/Loader';
import {ProductListItem} from '../ProductListItem/ProductListItem';
import {styles} from './styles';

export const ProductsList = () => {
  const {products, isLoading} = useLogic();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlatList
      style={styles.list}
      data={products}
      renderItem={({item}) => <ProductListItem product={item} />}
      initialNumToRender={10}
      numColumns={2}
    />
  );
};
