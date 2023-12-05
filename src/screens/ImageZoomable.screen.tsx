import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ImageZoomableScreenRouteType} from '../routes/schema';

export const ImageZoomableScreen = () => {
  const {
    params: {uri},
  } = useRoute<ImageZoomableScreenRouteType>();

  return <ImageZoom source={{uri}} minScale={1} resizeMode="contain" />;
};
