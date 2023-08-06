import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ThemeContext from './ThemeContext';
import { getColors, getTypography } from '../styles';
import { ThemeVariant } from './types';
import { StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
  variant?: ThemeVariant;
}

function ThemeProvider({ children, variant = ThemeVariant.SpinPlus }: Props) {
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme((previousState) => !previousState);

  const theme = {
    variant,
    colors: getColors(isLightTheme, variant),
    typography: getTypography(variant),
    toggleTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        {children}
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});

export default ThemeProvider;
