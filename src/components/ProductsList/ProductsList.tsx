import React from 'react';
import {FlatList} from 'react-native';
import {useLogic} from './ProductsList.logic';
import {ProductListItem} from '../ProductListItem/ProductListItem';
import {styles} from './styles';
import {ProductListItemSkeleton} from '../ProductListItemSkeleton/ProductListItemSkeleton';
import {Product} from '../../schema';

export const ProductsList = () => {
  const {products, isLoading, skeletons} = useLogic();

  return (
    <>
      <FlatList
        style={styles.list}
        data={isLoading ? skeletons : products}
        renderItem={({item}) =>
          isLoading ? (
            <ProductListItemSkeleton />
          ) : (
            <ProductListItem product={item as Product} />
          )
        }
        initialNumToRender={10}
        numColumns={2}
      />
    </>
  );
};
