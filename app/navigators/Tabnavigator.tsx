import React from 'react';

import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Details, Home} from 'screens';
import {TabStackParamList} from './navigator.types';
import {CustomTabIcon} from './components/CustomTabIcon';

const Tab = createBottomTabNavigator<TabStackParamList>();

export const MyTabs = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: colors.inputBackground,
          // borderRadius: 40,
          shadowColor: colors.inputBackground,
          borderTopColor: colors.inputBackground,
          borderTopWidth: 1,
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.7,
          // shadowRadius: 3.5,
          elevation: 4,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="TabHome"
        // @ts-ignore
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon focused={focused} icon="home" text="Home" />
          ),
        }}
      />
      {/* <Tab.Screen
        // @ts-ignore
        name="Details"

        component={Details}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <CustomTabIcon focused={focused} icon="home" text="Home" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
