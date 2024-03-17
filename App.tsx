import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Navigator from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
