# Progress Bar

Un componente que puede ser llamado para dar feedback visual al usuario, sobre el progreso de una actividad.

## API

### Propiedades

```js

variant: 'default' | 'goalIcon'

percent: number;

goalIcon?: ImageSourcePropType;

firstColor?: string;

secondColor?: string;

testID?: string;

```

## Ejemplo de uso

### En App

Base progress bar

```js
import * as React from 'react';
import {
  Text,
  View
} from '@digitaltitransversal/tr_superapp_core';
import { ProgressBar } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <View>
      <Text>Progress bar step 3</Text>
      <ProgressBar percent={{ currentStep: 3, totalStep: 5 }}>
    <View>
  );
}
```
Progress bar with custom color

```js
import * as React from 'react';
import {
  Text,
  View
} from '@digitaltitransversal/tr_superapp_core';
import { ProgressBar } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <View>
      <Text>Progress bar step 3</Text>
      <ProgressBar percent={{ currentStep: 3, totalStep: 5 }} firstColor='#3A46EA' />
    <View>
  );
}
```

Progress bar with pagination

```js
import * as React from 'react';
import {
  Text,
  View
} from '@digitaltitransversal/tr_superapp_core';
import { ProgressBar } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <View>
      <Text>Progress bar step 3</Text>
      <ProgressBar percent={{ currentStep: 3, totalStep: 5 }} firstColor='#3A46EA' pagination />
    <View>
  );
}
```

Progress bar with gradient custom color

```js
import * as React from 'react';
import {
  Text,
  View
} from '@digitaltitransversal/tr_superapp_core';
import { ProgressBar } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <View>
      <Text>Progress bar step 3</Text>
      <ProgressBar 
        percent={{ currentStep: 3, totalStep: 5 }} 
        firstColor='#3A46EA' 
        secondColor='#B23AEA'
      />
    <View>
  );
}
```
Progress bar with goalIcon

```js
import * as React from 'react';
import {
  Text,
  View
} from '@digitaltitransversal/tr_superapp_core';
import { ProgressBar } from '@digitaltitransversal/tr_superapp_theme';

const iconPresent = require('./iconPresent.png');

export default function App() {
  return (
    <View>
      <Text>Progress bar step 3</Text>
      <ProgressBar 
        variant='goalIcon'
        percent={{ currentStep: 3, totalStep: 5 }} 
        firstColor='#3A46EA' 
        secondColor='#B23AEA'
        goalIcon={iconPresent}
      />
    <View>

## Diseño

![ProgressBar Screen](/docs/images/progressbarScreen.png)
