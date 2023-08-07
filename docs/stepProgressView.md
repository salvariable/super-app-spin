# StepProgressView

Un componente que recibe un numero de pasos a presentar y el paso actual a resaltar.

## API
```js

  steps: number;
  
  currentStep: number;

```

## Ejemplo de uso

```js
import * as React from 'react';
import { StepProgressView } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <StepProgressView steps={3} currentStep={1} />
  );
}
````

## Diseño

![StepProgressView](/docs/images/stepProgressView.png)
