# Barcode

Un componente que permite renderizar un código de barras.

## API
```js
style?: ViewStyle;

width?: number;

maxWidth?: number;

height?: number;

value: string;

lineColor?: string;

background?: string;

onError?: (err: any) => void;

format: Format; // Vea los formatos soportados;
```

## Ejemplo de uso

```js
import React from 'react';
import { Barcode } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <Barcode value="12345" format="CODE128" />
  );
}
````

## Formatos soportados
* CODE39
* CODE128
* CODE128A
* CODE128B
* CODE128C
* EAN13
* EAN8
* EAN5
* EAN2
* UPC
* UPCE
* ITF14
* ITF
* MSI
* MSI10
* MSI11
* MSI1010
* MSI1110
* pharmacode
* codabar

## Diseño

![Buttons](/docs/images/barcode.png)
