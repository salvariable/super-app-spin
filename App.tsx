import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import ThemeProvider from './src/theme/ThemeProvider';
import { Button } from './src';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/screens/Home';
import { HOME } from './src/constants/screens';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

const App = () => {

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
