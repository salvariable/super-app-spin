# Tag

Un componente para etiquetar, categorizar u organizar elementos usando palabras clave que los describan

## API

```js
interface TagProps {
  /* ID used for testing. */
  testID?: string;

  /* Sets the title (or text) inside of the tag*/
  text: string;

  /* Sets the variant, by default is 'informational' */
  variant?: keyof typeof TagVariant;

  /* Background color of the tag */
  backgroundColor?: string;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  leftIcon?: ImageSourcePropType;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  rightIcon?: ImageSourcePropType;

  /* Sets the inverted color*/
  inverted?: boolean;

  /* Sets the size, by default is 'small' */
  size?: keyof typeof Size;
}

enum TagVariant {
  'informational',
  'activated',
  'paused',
  'urgent',
  'points',
}

enum Size {
  'small',
  'large',
}
```

## Ejemplo de uso

```js
import React from 'react';
import { Tag } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  return (
    <View>
      <View style={styles.center}>
        <Tag leftIcon={diamond} rightIcon={diamond} text="informational" />
      </View>
      <View style={styles.center}>
        <Tag variant="activated" text="activated" />
      </View>
      <View style={styles.center}>
        <Tag variant="paused" text="paused" />
      </View>
      <View style={styles.center}>
        <Tag variant="urgent" text="urgent" />
      </View>
      <View style={styles.center}>
        <Tag variant="points" text="points" />
      </View>
    </View>
  );
}
```

## Diseño

![Tags](/docs/images/tag.png)
