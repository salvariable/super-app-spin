# Text

Componente tipográfico para renderizar texto en base a la tipografia definida.

> Actualmente se tiene definido la tipografia 'Poppins'

## API
```js

...TextProps (Léase abajo)

style?: StyleProp<TextStyle>;

variant?: keyof typeof TextVariant;

testID?: string;

children: React.ReactNode;

enum TextVariant {
  'title-one-regular',
  'title-one-medium',
  'title-two-regular',
  'title-two-medium',
  'subtitle',
  'subtitle-medium',
  'content-one-regular',
  'content-one-medium',
  'content-one-semibold',
  'content-two-regular',
  'content-two-medium',
  'content-three-regular',
  'content-three-medium',
  'caption',
  'caption-medium',
  'overline',
  'text-link-one',
  'text-link-two',
  'jumbo-one',
  'jumbo-two',
  'title-one-semibold',
  'title-two-semibold',
  'subtitle-semibold',
  'headline-extra-large',
  'headline-large',
  'headline-medium',
  'headline-small',
  'default-body',
  'small-body',
  'extra-small-body',
  'default-body-bold',
  'small-body-bold',
  'extra-small-body-bold',
  'text-link-default',
  'text-link-small',
  'text-link-extra-small',
}



```

### TextProps

Se añaden todas las `TextProps` de React Native y se pueden consultar en el siguiente enlace:
- https://reactnative.dev/docs/text#props

## Ejemplo de uso

```js
import * as React from 'react';
import { Text } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <Text variant="caption">caption</Text>
  );
}
````
