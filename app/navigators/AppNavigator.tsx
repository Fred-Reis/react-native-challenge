import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MyTabs} from './Tabnavigator';
import {AppStackParamList} from './navigator.types';
import {Details} from '/screens';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
