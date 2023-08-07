# Stepper

Un componente que el usuario puede usar para incrementar o disminuir un valor numérico.

## API
```js
max?: number;

min?: number;

variant?: 'default' | 'bordered';

stepperContainerStyle?: object;

selectorStyle?: object;

disabledSelectorStyle?: object;

onIncrement: () => void;

onDecrement: () => void;

value: number;

```

## Ejemplo de uso

```js
import React, { useState } from 'react';
import { Stepper } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  const [value, setValue] = useState<number>(0);
  const min = 0;
  const max = 5;

  const handlerAdd = () => {
    setValue((prev) => (prev += 1));
  };

  const handleSubtract = () => {
    setValue((prev) => (prev -= 1));
  };
  return (
    <Stepper
      value={value}
      min={min}
      max={max}
      onDecrement={handleSubtract}
      onIncrement={handlerAdd}
      variant="bordered"
     />
  );
}
````

## Diseño


![Steppers](/docs/images/stepper.png)


