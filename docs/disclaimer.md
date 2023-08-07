# Disclaimer

Un disclaimer es un componente que sirve como aviso al usuario de sobre algún evento en particular.

## API
```js

text: string;
variant: 'notification' | 'warning' | 'alert' | 'custom'
testID?: string;
icon?: ImageSourcePropType;
iconColor?: string;
backgroundColor?: string;
textColor?: string;

```

## Ejemplo de uso

```js
import * as React from 'react';
import { Disclaimer } from '@digitaltitransversal/tr_superapp_theme';

export default function Disclaimer() {
  return (
    <Disclaimer
      variant="notification"
      text="Texto aviso para el usuario"
      backgroundColor="lightBlue"
      textColor="black"
      iconColor="blue"
      icon=""
    />
  );
}

````

## Diseño

![Disclaimer](/docs/images/disclaimer.png)
