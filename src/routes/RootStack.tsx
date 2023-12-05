import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './constants';
import {HomeScreen} from '../screens/Home.screen';
import {ItemDetailsScreen} from '../screens/ItemDetails.screen';

const {Navigator, Screen} = createNativeStackNavigator();

export const RootStack = () => (
  <Navigator
    initialRouteName={Routes.HOME}
    screenOptions={{headerShown: false}}>
    <Screen name={Routes.HOME} component={HomeScreen} />
    <Screen name={Routes.ITEM_DETAILS} component={ItemDetailsScreen} />
  </Navigator>
);
