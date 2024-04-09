import React from 'react';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  NavigationContainer,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type AppStackParamList = {
  Demo: undefined;
  Welcome: undefined;
  Details: {
    backdrop_path: string;
    overview: string;
    homepage?: string;
    title: string;
    ratings?: number;
    genres: number[];
    date: number;
    type: string;
  };
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

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
