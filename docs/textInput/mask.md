# Mask TextInput

Un componente que permite a los usuarios ingresar texto.

Cuando se utiliza el variant:'mask' se puede utilizar el maskType:'payment' él formatea el value del input simulando una tarjeta de
Crédito, teniendo un espacio cada 4 dígitos.

## Tipos de variantes del MaskType

-  payment


## API
```js
style?: StyleProp<ViewStyle>;

testID?: string;

placeHolder: string;

error?: string;

numericInput?: boolean;

secureInput?: boolean;

value: string;

maxLength?: number;

onChangeText: (text: string) => void;

onEditFinish?: () => void;

variant?: string;

maskType?: string;

```

## Ejemplo de uso

```js

import React, { useState } from 'react';
import { TextInput } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  const [cardTextInput, setCardTextInput] = useState('');

  return (
    <TextInput
      variant="mask"
      maskType="payment"
      placeHolder="Número de tarjeta de crédito"
      maxLength={10}
      value={cardTextInput}
      onChangeText={setCardTextInput}
    />
  );
}
````

## Diseño

![input](/docs/images/input-mask-payment.png)
