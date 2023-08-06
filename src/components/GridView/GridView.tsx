import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  StyleProp,
  ViewStyle,
  FlatListProps,
} from 'react-native';

interface Props extends Partial<FlatListProps<JSX.Element>> {
  data: JSX.Element[];
  idForTestContainer?: string;
  idForTestItems?: string;
  containerStyle?: StyleProp<ViewStyle>;
  itemsStyle?: StyleProp<ViewStyle>;
}

function GridView({
  data,
  idForTestContainer,
  idForTestItems,
  containerStyle,
  itemsStyle,
  ...restProps
}: Props) {
  const containerStyleUsed = containerStyle ? containerStyle : styles.container;
  const itemsStyleUsed = itemsStyle ? itemsStyle : styles.items;

  return (
    <View style={containerStyleUsed} testID={idForTestContainer}>
      <FlatList
        {...restProps}
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View testID={`${idForTestItems} ${index}`} style={itemsStyleUsed}>
            {item}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  items: {
    flexBasis: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GridView;
