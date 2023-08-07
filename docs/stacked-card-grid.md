# StackedGridView

StackedGridView es un componente de grilla para renderizar dos o tres Cards de tipo _content-stacked_ de forma horizontal.

## API

```js
interface StackedCardProps {
  title: string;
  icon: JSX.Element;
  onPress?: () => void;
  titlesSize?: string;
}

interface StackedCardGridProps {
  data: StackedCardProps[];
  idForTestContainer?: string;
  idForTestItems?: string;
  containerStyle?: StyleProp<ViewStyle>;
  itemsStyle?: StyleProp<ViewStyle>;
  numberOfColumns?: 2 | 3;
}
```

## Ejemplo de uso

```ts

import * as React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Text, Card, Icon } from '@digitaltitransversal/tr_superapp_theme';
import { StackedCardGrid } from '@digitaltitransversal/tr_superapp_theme';

const changePoints = require('./assets/change-points.png');
const sharePoints = require('./assets/send-points.png');
const billTicket = require('./assets/bill-ticket.png');

export default function StackedCardGridView() {
  return (
    <SafeAreaView style={styles.safeArea}>
    /** Grid con 2 cards y titles con tamaño por default**/
      <StackedCardGrid
          data={[
            {
              title: 'Cambiá tus puntos',
              icon: <Image source={changePoints} />
              onPress: {() => console.log('hello word')}
            },
            {
              title: 'Disfruta tus beneficios',
              icon: <Image source={billTicket} />
              onPress: {() => console.log('hello word')}
            },
          ]}
          containerStyle={styles.cardGridContainer}
          itemsStyle={styles.cardItemGridSmall}
          numberOfColumns={2}
      />
    /** Grid con 3 cards y titles con tamaño pequeño**/
      <StackedCardGrid
          data={[
            {
              title: 'Cambiá tus puntos',
              icon: <Image source={changePoints} />,
              onPress: {() => console.log('hello word')}
            },
            {
              title: 'Disfruta tus beneficios',
              icon: <Image source={billTicket} />,
              onPress: {() => console.log('hello word')}
            },
            {
              title: 'Comparte tus puntos',
              icon: <Image source={sharePoints} />,
              onPress: {() => console.log('hello word')}
            }
          ]}
          containerStyle={styles.cardGridContainer}
          itemsStyle={styles.cardItemGridLarge}
          numberOfColumns={3}
          titlesSize='small',
      />
    </SafeAreaView>
  );
}
```

## Diseño

![GridView](/docs/images/stacked-card-grid.png)
