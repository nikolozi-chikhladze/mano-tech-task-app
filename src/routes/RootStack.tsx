import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HOME_SCREEN,
  IMAGE_ZOOMABLE_SCREEN,
  PRODUCT_DETAILS_SCREEN,
  ROOT_STACK,
} from './constants';
import {HomeScreen} from '../screens/Home.screen';
import {ItemDetailsScreen} from '../screens/ItemDetails.screen';
import {ImageZoomableScreen} from '../screens/ImageZoomable.screen';

const {Navigator, Screen} = createNativeStackNavigator();

export const RootStack = () => (
  <Navigator
    id={ROOT_STACK}
    initialRouteName={HOME_SCREEN}
    screenOptions={{headerShown: false}}>
    <Screen name={HOME_SCREEN} component={HomeScreen} />
    <Screen
      name={PRODUCT_DETAILS_SCREEN}
      component={ItemDetailsScreen}
      options={{headerShown: true, headerTitle: 'Product Details'}}
    />
    <Screen name={IMAGE_ZOOMABLE_SCREEN} component={ImageZoomableScreen} />
  </Navigator>
);
