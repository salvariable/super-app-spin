# Icon
Un componente para renderizar iconos.

## API

 ```js
  /* Nombre del ícono de tipo Typography, visualizar en https://digitalfemsa.atlassian.net/wiki/spaces/SAPP/pages/331579442/Uso+de+Icon+fonts **/
  name: string;
  /* Text style en caso que isTypography sea true **/
  iconTypographyStyle?: StyleProp<TextStyle>;
 ```
 ## Ejemplo de uso de iconos provenientes de Icon font.


 ```js
 import * as React from 'react';
 import { Icon } from '@digitaltitransversal/tr_superapp_theme';

 export default function App() {
    return (
     <Icon
        name={'icon-profile-active'}
        iconTypographyStyle={{color: 'red'}}
      />
    )
 }
  ```
