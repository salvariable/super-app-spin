# Spinner

Un componente de espera o carga de algún proceso.

## API

```js


style?: StyleProp<ViewStyle>;

testID?: string;

label?: string | undefined;

inverse?: boolean;

label?: string;

inverse?: boolean;

size?: 'large' | 'medium' | 'small'



```

## Ejemplo de uso

```js
import * as React from 'react';
import { Spinner } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <View style={styles.lottieContainer}>
      <Spinner inverse label={'Loading...'} size={'medium'} />
    </View>
  );
}

const styles = StyleSheet.create({
  lottieContainer: {
    flex: 1,
    height: 100,
  },
});
```
