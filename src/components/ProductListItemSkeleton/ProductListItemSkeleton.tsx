import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './styles';
import {View} from 'react-native';

export const ProductListItemSkeleton = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width="100%">
          <SkeletonPlaceholder.Item width={'100%'}>
            <SkeletonPlaceholder.Item width={'100%'} height={180} />
            <SkeletonPlaceholder.Item marginTop={6} width={60} height={20} />
            <SkeletonPlaceholder.Item marginTop={6} width={120} height={20} />
            <SkeletonPlaceholder.Item marginTop={6} width={'75%'} height={20} />
            <SkeletonPlaceholder.Item marginTop={6} width={60} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
