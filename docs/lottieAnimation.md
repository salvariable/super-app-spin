# LottieAnimation

La documentación oficial de Lottie que se esta implementando se puede encontrar en https://github.com/lottie-react-native/lottie-react-native.

## API

```js
  source: string | AnimationObject | { uri: string };

  autoplay?: boolean; // default true

  loop?: boolean; // default true

  style?: StyleProp<ViewStyle>;

  testID?: string;
```

## Ejemplo de uso

```js
import * as React from 'react';
import { Card } from '@digitaltitransversal/tr_superapp_theme';

const exampleAnimation = require('./assets/animations/example.json');

export default function LottieAnimation() {
  return (
    <View style={styles.lottieContainer}>
      <LottieAnimation
        source={exampleAnimation}
        loop={false}
        autoplay={false}
        style={styles.customLottie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lottieContainer: {
    flex: 1,
    height: 100,
  },
  customLottie: {
    transform: [{ rotate: '45deg' }],
  },
});
```

## Diseño

![LottieAnimation](/docs/images/lottieAnimation.png)
