import React from 'react';

import {Provider} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {store} from './store';

import {AppNavigator} from './navigators';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  const onNavigationStateChange = () => {
    // Navigate state changes
  };

  Octicons.loadFont();
  Ionicons.loadFont();
  AntDesign.loadFont();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <AppNavigator onStateChange={onNavigationStateChange} />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
