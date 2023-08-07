# Email TextInput

Un componente que permite a los usuarios ingresar texto.

Cuando se utiliza el variant: 'email' se debe agregar domainList que imprime en forma de botones los dominios que se le pasen, y onValidation para verificar que el formato de correo que se le pase sea el correcto.

## API

```js
style?: StyleProp<ViewStyle>;

testID?: string;

placeHolder: string;

error?: string;

value: string;

onChangeText: (text: string) => void;

onEditFinish?: () => void;

variant?: string;

domainList?: string[];

onValidation?: (isValid: boolean[]) => void;

```

## Ejemplo de uso

```js
import React, { useState } from 'react';
import { TextInput } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  const [cardTextInput, setCardTextInput] = useState('');
  const domainList = ['@gmail.com', '@yahoo.com', '@outlook.com'];

  return (
    <TextInput
      variant="email"
      placeHolder="Ingresa tu correo"
      maxLength={10}
      domainList={domainList}
      value={cardTextInput}
      onChangeText={setCardTextInput}
      onValidation={(isValid) => {
        console.log(isValid); // [true] or [false]
      }}
    />
  );
}
```

## Diseño

![input](/docs/images/inputEmail.png)
