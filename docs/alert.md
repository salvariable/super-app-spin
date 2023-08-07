# Alert

Una alerta proporciona información breve como respuesta a una tarea o acción del usuario y enfoca la atención del mismo para garantizar que se aborde su contenido.

La naturaleza del contenido a comunicar determina la variante del componente: información, éxito, advertencia o error, a los cuales se le suma una variante por default, que no tiene color y puede incluir un icono customizado.

Siempre flota sobre el resto del contenido de la pantalla y persiste hasta que el usuario presione el botón de cierre.

Debe contener un título y un detalle, ambos campos tienen un límite de dos líneas (si el texto es más largo aplicará ellipsis).

## API

### Propiedades

```js

title: string;

details: string;

variant?: 'default' | 'info' | 'success' | 'warning' | 'error';

iconName?: string; // Only for default variant

testID?: string;

```

## Ejemplo de uso

### En App

Es importante colocar justo antes del cierre del Container de navegación

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
        <Alert.Component />
      </Container>
    </ThemeProvider>
  );
}
```

### En el componente donde se quiera usar

Se invoca a través del método Alert.show(props)

```js
<Button
  onPress={() => {
    Alert.show({
      title: 'Título del alert',
      details: 'Detalle del alert',
      variant: 'success',
    });
  }}
/>
```

## Diseño

![Alert Screen](/docs/images/alert/alert-screen.png)
<br/>
![Alert Variants](/docs/images/alert/alert-variants.png)
