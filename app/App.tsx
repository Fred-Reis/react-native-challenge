import React, {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {store} from './store';
import {AppNavigator} from './navigators/AppNavigator';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App: React.FC = () => {
  const onNavigationStateChange = () => {
    // Navigate state changes
  };

  Octicons.loadFont();
  AntDesign.loadFont();

  return (
    // <StrictMode>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <AppNavigator onStateChange={onNavigationStateChange} />
      </Provider>
    </SafeAreaProvider>
    // </StrictMode>
  );
};

export default App;
