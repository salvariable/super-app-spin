import React from 'react';
import { SafeAreaView } from 'react-native';

import AppProvider from './src/context/AppContext';
import ThemeProvider from './src/theme/ThemeProvider';

import Navigation from './Navigation';

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
        </SafeAreaView>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
