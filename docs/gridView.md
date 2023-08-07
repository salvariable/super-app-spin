# GridView

GridView es un componente FlatList genérico desplegado en 2 columnas.

## API

```
data: JSX.Element[]
```

## Ejemplo de uso

```ts
import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Text, GridView } from '@digitaltitransversal/tr_superapp_theme';

export default function GridViewScreen() {
  const card1 = (
    <View>
      <Text variant="title-one-regular">Cards</Text>
    </View>
  );

  const card2 = (
    <View>
      <Text variant="title-one-regular">Card 2</Text>
    </View>
  );

  const card3 = (
    <View>
      <Text variant="title-one-regular">Card 3</Text>
    </View>
  );

  const cards = [];
  cards.push(card1);
  cards.push(card2);
  cards.push(card3);

  return (
    <SafeAreaView style={styles.content}>
      <GridView data={cards} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
```

## Diseño

![GridView](/docs/images/gridView.png)
