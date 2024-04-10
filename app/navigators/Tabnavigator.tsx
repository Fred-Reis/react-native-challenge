import React from 'react';

import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Stared, Home} from 'screens';
import {TabStackParamList} from './navigator.types';
import {CustomTabIcon} from './components/CustomTabIcon';
import {View} from 'react-native';

const Tab = createBottomTabNavigator<TabStackParamList>();

export const MyTabs = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: colors.inputBackground,
          shadowColor: colors.inputBackground,
          borderTopColor: colors.inputBackground,
          borderTopWidth: 1,
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.7,
          elevation: 4,
          height: 100,
        },
      }}>
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon focused={focused} icon="home" text="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Stared"
        component={Stared}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon focused={focused} icon="star" text="Stared" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
