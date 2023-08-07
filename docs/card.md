# Card

Una card es un componente que sirve como punto de entrada a información más detallada.

## API

```js
children: React.ReactNode;

style?: ViewStyle;

contentStyle?: ViewStyle;

shadowColor?: ColorValue | undefined;

onPress?: () => void;

/**
* elevationIOS is a prop that is only used on iOS.
* This prop accept width and height properties.
**/
elevationIOS?: ElevationIOS;
testID?: string;
```

## Ejemplo de uso

```js
import * as React from 'react';
import { Card } from '@digitaltitransversal/tr_superapp_theme';

export default function Card() {
  return (
    <Card
      onPress={() => console.log('hello world')}
      style={styles.box}
      shadowColor="blue"
    >
    ...
    </Card>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 200,
    width: 200,
    padding: 10,
  },
});
````

## Diseño

![Card](/docs/images/card.png)
