# Button

Un componente que el usuario puede presionar para ejecutar una acción.

## API
```js

text: string;

onPress: () => void;

variant?: 'primary' | 'secondary' | 'text-only' // Default: primary

style?: StyleProp<ViewStyle>;

loading?: boolean;

disabled?: boolean;

inverted?: boolean;

testID?: string;

iconName?: string;

iconStyle?: StyleProp<TextStyle>;

size?: string;

```

## Ejemplo de uso

```js
import * as React from 'react';
import { Button } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <Button
      variant="secondary"
      onPress={() => {
        console.log('Hello world');
      }}
      text="Hello world"
      size="small"
    />
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


iOS 
![ios](/docs/images/buttons/ios-1.png)
<br/>
![ios](/docs/images/buttons/ios-2.png)
<br/>
![ios](/docs/images/buttons/ios-inverted.png)

Android

![android](/docs/images/buttons/android-1.png)
<br/>
![android](/docs/images/buttons/android-2.png)
<br/>
![android](/docs/images/buttons/android-inverted.png)


