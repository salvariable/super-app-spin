# Chip

Un componente usado para mostrar contenido en bloques pequeños.

## API
```js

  /* ID used for testing. */
  testID?: string;

  /* Sets the title (or text) inside of the chip*/
  text: string;

  variant?: 'default' | 'outline';

  /* Indicate if a chip is selected */
  selected?: boolean;

  /* Indicate if a chip is disabled */
  disabled?: boolean;

  /* Callback when the chip is pressed */
  onPress?: () => void;

  /* Background color of the chip */
  backgroundColor?: string;

  /* Styles that are applied to the text of the chip */
  textStyle?: StyleProp<TextStyle>;

  /* Styles that are applied to the outline of the chip */
  style?: StyleProp<ViewStyle>;

/* Sets the outline color of the chip */
  borderColor?: string;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  leftIcon?: ImageSourcePropType;

```

## Ejemplo de uso

```js
import * as React from 'react';
import { Chip } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <Chip
        style={styles.chipStyle}
        backgroundColor="black"
        textStyle={styles.textColor}
        text="Custom background"
      />
  );
}

const styles = StyleSheet.create({
  chipStyle: {
    marginTop: 10,
  },
});
````

## Diseño

![Chip](/docs/images/chip.png)


