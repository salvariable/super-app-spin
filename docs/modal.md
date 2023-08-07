# Modal

Un componente que permite mostrar información y/o tomar decisiones en una ventana emergente.

## API

### Propiedades

```js
title: string;

variant?: 'default' | 'one-button' | 'two-button'

description?: string;

testID?: string;

style?: StyleProp<ViewStyle>;

titleStyle?: StyleProp<TextStyle>;

descriptionStyle?: StyleProp<TextStyle>;

defaultStyle?: StyleProp<ViewStyle>;

defaultTitleStyle?: StyleProp<TextStyle>;

defaultDescriptionStyle?: StyleProp<TextStyle>;

firstButtonProps?: ButtonProps & { enableCloseOnPress?: boolean };

secondButtonProps?: ButtonProps & { enableCloseOnPress?: boolean };

onClose?: () => void

showCloseBtn?: boolean (default true)
```

## Ejemplo de uso

### En App

Importante colocar justo antes del cierre del Container de navegación

```js
import * as React from 'react';
import {
  Container,
  createNavigator,
} from '@digitaltitransversal/tr_superapp_core';
import { Modal } from '@digitaltitransversal/tr_superapp_theme';

const { Navigator } = createNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Navigator>...</Navigator>
        <Modal.Component />
      </Container>
    </ThemeProvider>
  );
}
```

### En el componente donde se quiera usar

Se invoca a través del método Modal.show(props)

```js
<Button
  onPress={() => {
    Modal.show({
      title: 'Un titulo',
      variant: 'two-button',
      description: 'Una descripción',
      firstButtonProps: {
        variant: 'primary',
        text: 'Botón 1',
        onPress: () => console.log('Se presiono el botón 1'),
        enableCloseOnPress: true,
      },
      secondButtonProps: {
        variant: 'primary',
        text: 'Botón 2',
        onPress: () => console.log('Se presiono el botón 2'),
      },
    });
  }}
/>
```

## Diseño

![Modal por defecto](/docs/images/modal/por-defecto.png)
![Modal con un botón](/docs/images/modal/con-un-boton.png)
![Modal con dos botones](/docs/images/modal/con-dos-botones.png)
![Modal con descripción y dos botones](/docs/images/modal/con-dos-botones-y-descripcion.png)
