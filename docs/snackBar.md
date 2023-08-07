# SnackBar

Un componente que puede ser llamado para dar información o feedback al usuario.

## API

### Propiedades

```js
text: string;

variant?: 'default' | 'info' |  'success' |'warning' | 'error' 

/**
 * By default is false
 * Whether 'true' is passed, then request an icon.
 */
withIcon?: boolean;

iconName?: string;

/**
 * Duration in milliseconds
 */
duration?: number;

/**
 * When onClose function is passed, then the close icon appears
 * @returns void
 */
onClose?: () => void;

/**
 * Snackbar can display a single text button that lets users take action on a process performed by the app.
 * Snackbar shouldn’t be the only way to access a core use case, to make an app usable.
 */
action?: ActionSnackBar;

/**
  * The position of the snackbar in the page, default is 'top'
*/
position?: 'top' | 'bottom';

testID?: string;

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
import { SnackBar } from '@digitaltitransversal/tr_superapp_theme';

const { Navigator } = createNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Navigator>...</Navigator>
        <SnackBar.Component />
      </Container>
    </ThemeProvider>
  );
}
```

### En el componente donde se quiera usar

Se invoca a través del método Snackbar.show(props)

```js
<Button
  onPress={() => {
    SnackBar.show({
      text: 'Tu texto',
      variant: 'default',
      withIcon: true,
      iconName: 'icon-send',
      duration: 4000,
      onClose: () => {
        Alert.alert('Hola mundo');
      },
    });
  }}
/>
```

## Diseño

![SnackBar Screen](/docs/images/snackbarScreen.png)
![SnackBar Variantes](/docs/images/snackbarVariants.png)

## Notas Técnicas

findLayout: verifica el ancho del texto en relación al ancho del contenedor, para así adaptar el número de líneas del Text. ([documentación de Layout Event](https://reactnative.dev/docs/layoutevent))

```js
const findLayout = (e: LayoutChangeEvent) => {
  const { width } = e.nativeEvent.layout;
  return width;
};

//...

<View onLayout={(e) => setTextContainerWidth(findLayout(e))}>
  <Text
    onLayout={(e) => setTextWidth(findLayout(e))}
    numberOfLines={textWidth > textContainerWidth ? 2 : 1}
  >
    {text}
  </Text>
</View>;
```

onClose: función que se ejecuta al cerrar el snackbar.
