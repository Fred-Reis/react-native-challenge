import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {QueryClientProvider} from '@tanstack/react-query';

// import SplashScreen from 'react-native-splash-screen';
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

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

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
