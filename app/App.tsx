import React from 'react';

import {Provider} from 'react-redux';
import {QueryClientProvider} from '@tanstack/react-query';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {store} from './store';

import queryClient from 'services/api/queryClient';
import {AppNavigator} from './navigators';

const App: React.FC = () => {
  const onNavigationStateChange = () => {
    // Navigate state changes
  };

  Octicons.loadFont();
  Ionicons.loadFont();
  AntDesign.loadFont();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppNavigator onStateChange={onNavigationStateChange} />
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
