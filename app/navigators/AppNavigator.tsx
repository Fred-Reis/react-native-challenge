import React from 'react';
import {useColorScheme} from 'react-native';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {Welcome, Demo, Home, Details} from '/screens';
import {darkTheme, defaultTheme} from '/styles/themes';

const navigationRef = createNavigationContainerRef<AppStackParamList>();

export type AppStackParamList = {
  Welcome: undefined;
  Demo: undefined;
  Home: undefined;
  Details: undefined;
  // 🔥 Your screens go here
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

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
