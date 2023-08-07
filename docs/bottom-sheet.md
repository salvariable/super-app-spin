# Bottom Sheet

Un componente que permite mostrar información y/o tomar decisiones en una ventana emergente apareciendo desde la parte inferior del dispositivo.

## API

### Propiedades

```js
/** Set title of bottom sheet */
title: string;

/** Set variant of bottom sheet */
variant?: 'default'

/** Set children on bottom sheet body */
children: React.ReactNode;

/** Set ID used for testing */
testID?: string;

/** Set styles that are applied to the bottom sheet body  */
contentStyle?: StyleProp<ViewStyle>;

/** Set background color that is applied to the bottom sheet header */
headerBackgroundColor?: string;

/** Set background color that is applied to the bottom sheet body */
bodyBackgroundColor?: string;

/** Set position of close icon, by default is 'right' */
closeIconPosition?: 'left' | 'right';

/** Callback when bottom sheet has been close */
onClose?: () => void

/**
 * An array of Actions that have a text and onPress property.
 * @summary: Only supports three action buttons [primary, secondary, hyperlink]
 */
buttons?: ActionsBottomSheet[];

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
import { BottomSheet } from '@digitaltitransversal/tr_superapp_theme';

const { Navigator } = createNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Navigator>...</Navigator>
        <BottomSheet.Component />
      </Container>
    </ThemeProvider>
  );
}
```

### En el componente donde se quiera usar

Se invoca a través del método BottomSheet.show(props)

```js
<Button
  onPress={() => {
    BottomSheet.show({
      title: 'A title',
      children: <FlatList data={[1, 2]} renderItem={(data) => children()} />,
      headerBackgroundColor: '#cccccc',
      bodyBackgroundColor: '#cccccc',
      contentStyle: {
        paddingHorizontal: 50,
      },
    });
  }}
/>
```

## Diseño

![Bottom Sheet con icono de cerrar a la izquierda (default)](/docs/images/bottom-sheet/with-close-icon-to-left.png)
![Bottom Sheet con icono de cerrar a la derecha](/docs/images/bottom-sheet/with-close-icon-to-right.png)
![Bottom Sheet con una lista de 1 item como hijo](/docs/images/bottom-sheet/with-one-item-list-child.png)
![Bottom Sheet con una lista de muchos items como hijo](/docs/images/bottom-sheet/with-many-items-list-child.png)
![Bottom Sheet con estilos personalizados](/docs/images/bottom-sheet/with-customs-styles.png)
