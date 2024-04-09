import React from 'react';
import {useColorScheme} from 'react-native';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

import {AppStack} from './AppNavigator';
import {darkTheme, defaultTheme} from 'styles/themes';
import {AppStackParamList, NavigationProps} from './navigator.types';

const navigationRef = createNavigationContainerRef<AppStackParamList>();

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? darkTheme : defaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
