import {RouteProp} from '@react-navigation/native';
import {
  HOME_SCREEN,
  IMAGE_ZOOMABLE_SCREEN,
  PRODUCT_DETAILS_SCREEN,
} from './constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Product} from '../schema';

export type RootStackParamsList = {
  [HOME_SCREEN]: undefined;
  [PRODUCT_DETAILS_SCREEN]: {product: Product};
  [IMAGE_ZOOMABLE_SCREEN]: {uri: string};
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamsList>;

export type ProductDetailsScreenRouteType = RouteProp<
  RootStackParamsList,
  typeof PRODUCT_DETAILS_SCREEN
>;

export type ImageZoomableScreenRouteType = RouteProp<
  RootStackParamsList,
  typeof IMAGE_ZOOMABLE_SCREEN
>;
