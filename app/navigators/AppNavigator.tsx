import React from 'react';
import {useColorScheme} from 'react-native';

import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  useTheme,
  NavigationContainer,
  CompositeScreenProps,
  NavigatorScreenParams,
  createNavigationContainerRef,
} from '@react-navigation/native';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {Welcome, Demo, Home, Details} from '/screens';
import {darkTheme, defaultTheme} from '/styles/themes';

const navigationRef = createNavigationContainerRef<AppStackParamList>();

export type AppStackParamList = {
  Demo: undefined;
  Welcome: undefined;
  Details: undefined;
  Home: NavigatorScreenParams<TabStackParamList>;
};

export type TabStackParamList = {
  TabHome: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, T>,
    BottomTabScreenProps<TabStackParamList>
  >;

const Tab = createBottomTabNavigator<TabStackParamList>();

const MyTabs = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderRadius: 40,
          height: 90,
        },
      }}>
      {/* @ts-ignore */}
      <Tab.Screen name="TabHome" component={Home} />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Details" component={Details} />
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
