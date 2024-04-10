import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {
  NavigationContainer,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

import {DetailsProps} from '/services/queries/types';

export type AppStackParamList = {
  Demo: undefined;
  Welcome: undefined;
  Details: DetailsProps;
  Stared: undefined;
  Home: NavigatorScreenParams<TabStackParamList>;
};

export type TabStackParamList = {
  Stared: undefined;
  TabHome: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, T>,
    BottomTabScreenProps<TabStackParamList>
  >;

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
