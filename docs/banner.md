# Banner

Un componente que el recibe un listado de banners con imagenes acciones clickeables y tiempo de cambio entre imagenes.

## API

```js
export interface BannerProps {
  banners: Banners[];
  /** If not passed, renders default */
  variant?: 'default';

  containerStyle?: object;

  loading?: boolean;

  onPress: () => void;

  onChangeIndex?: (index: number) => void;

  movingTime?: number;

  isAutoplay?: boolean;

  bannerStyle?: object;
  /** Default is device width, use in cases where the banner is narrower/wider */
  bannerWidth?: number;
  /** Default is device width, use in cases where the banner is narrower/wider to calculate translation */
  bannerTranslation?: number;

  stepperContainerStyles?: object;

  imageStyles?: object;

  /* Enable shadow in container of banners */
  enableShadow?: boolean;
}
```

## Ejemplo de uso

```js
import * as React, { useState } from 'react';
import { Alert } from 'react-native';
import { Banner } from '@digitaltitransversal/tr_superapp_theme';

const vix = require('../src/assets/vix.png');
const vips = require('../src/assets/vips.png');
const banners = [
  {
    id: 1,
    title: 'Vix contenido original',
    banner: {
      image: vix,
      type: 'visit_landing',
      url: 'https://vix.com/es-es/canales',
    },
  },
  {
    id: 2,
    title: 'Oxxo premia',
    banner: {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png',
      },
      type: 'allied_link',
      url: 'https://vips.com.mx/cupone',
    },
  },
  {
    id: 3,
    title: 'Vips',
    banner: {
      image: vips,
      type: 'promo_instruction',
      url: 'https://wwww.allied-landing.com',
    },
  },
  {
    id: 4,
    title: 'Vix contenido original',
    banner: {
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDVTDKuRhLPXoVo1iZM5Fm_LW9lvaU6jMQQ&usqp=CAU',
      },
      type: 'generate_code',
      url: 'https://wwww.allied-landing.com',
    },
  },
];

export default function App() {
  const [bannerIndex, setBannerIndex] = useState(0);

  const onBannerPress = () => {
    Alert.alert('Banner Clicked');
  };
  return (
    <Banner
        banners={banners}
        loading={false}
        onPress={() => onBannerPress()}
        movingTime={2000}
        onChangeIndex={(index) => setBannerIndex(index)}
    />
  );
}
```

## Diseño

![Banner](/docs/images/banners.png)
