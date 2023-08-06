import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import React from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import {Button} from './src';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Button text="Hola ironhackers" onPress={() => console.log('yea')} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
