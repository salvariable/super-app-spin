# Gradient

Wrapper que entrega estilo de gradiente alrededor de cualquier componente children

## API

```ts
/* element to be wrap */
children: JSX.Element;
/* bolean to handle if wrap is active or not */
isActive?: boolean;
/* colors of the wrap when is active */
activeColors: string[];
/* colors of the wrap when is not active */
notActiveColors: string[];
/* initial point of gradient */
start?: { x: number; y: number };
/* final point of gradient */
end?: { x: number; y: number };
/* string used to test componente */
testID?: string;
/* styles of the component */
style?: StyleProp<ViewStyle>;

```
Tambien esta disponible las props de [`react-native-linear-gradient`](https://github.com/react-native-linear-gradient/react-native-linear-gradient#props)

## Ejemplo de uso

```ts
import React, { useState } from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Text, Card, Gradient } from '@digitaltitransversal/tr_superapp_theme';

export default function CardsScreen() {
  const [active, setActive] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text variant="title-one-regular">Gradient</Text>
          <Gradient
            activeColors={['#3A46EA', '#B23AEA']}
            notActiveColors={['#ffffff', '#ffffff']}
            isActive={active}
          >
            <Card
              onPress={() => setActive(!active)}
              style={styles.box}
              shadowColor="blue"
            >
              <Text variant="subtitle">Click me to see gradient Wrapper</Text>
            </Card>
          </Gradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 200,
    width: 200,
    padding: 10,
    borderRadius: 10,
  },
});
```

## Diseño

![Gradient](/docs/images/gradient.png)
