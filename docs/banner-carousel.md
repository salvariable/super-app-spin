# Banner

Un componente que recibe un objeto de **banners** y acciones clickeables con tiempo de cambio entre ellos.

## API

```js
export interface BannerCarouselProps {
  banners: Banner[];
  /** If not passed, renders default */
  variant?: 'default';

  interSpacing?: number;
  /** Sets space between banners */

  horizontalMargin?: number;
  /** Sets spacin on both sices of the banner carousel */

  isAutoplay?: boolean;
  /** Either the banners should slide automatically */

  movingTime?: number;
  /** Time between automatic slide change */

  bannerWidth?: number | `${number}%`;
  /** Sets the width each banner should have, banner height adjusts itself.
   It can be either a number or a string with a percentage, which sets width relative
   to screen total size*/

  withStepper?: boolean;
  /** Either it should have a stepper or not */

  stepperPosition?: 'left' | 'center' | 'right';

  borderRadius?: number;
}
```

## Ejemplo de uso

```js
import { BannerCarousel } from '@digitaltitransversal/tr_superapp_theme';
import React from 'react';

const banners: Banner[] = [
  {
    id: 1,
    title: 'Vix contenido original',
    image: {
      uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
    },
    onPress: () => console.log('Banner 1'),
  },
  {
    id: 2,
    title: 'Oxxo premia',
    image: {
      uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
    },
    onPress: () => console.log('Banner 2'),
  },
  {
    id: 3,
    title: 'Vips',
    image: {
      uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
    },
    onPress: () => console.log('Banner 3'),
  },
];

export default function App() {
  return (
    <BannerCarousel
      variant="default"
      banners={banners}
      withStepper
      stepperPosition="left"
      bannerWidth={'80%'}
    />
  );
}
```

## Diseño

![Banner](/docs/images/banners.png)
