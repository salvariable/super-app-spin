import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import Card from '../Card/Card';

interface StackedCardProps {
  title: string;
  icon: JSX.Element;
  onPress?: () => void;
}

interface StackedCardGridProps {
  data: StackedCardProps[];
  idForTestContainer?: string;
  idForTestItems?: string;
  containerStyle?: StyleProp<ViewStyle>;
  itemsStyle?: StyleProp<ViewStyle>;
  numberOfColumns?: 2 | 3;
  titlesSize?: 'small' | 'default' | 'extra-small';
}

function StackedCardGrid({
  data,
  idForTestContainer,
  idForTestItems,
  containerStyle,
  itemsStyle,
  numberOfColumns = 3,
  titlesSize,
}: StackedCardGridProps) {
  const { width } = useWindowDimensions();
  const twoColumnsCardWidth = width / 2 - 20;
  const threeColumnsCardWidth = width / 3 - 10;

  const isValidNumberOfColumns = numberOfColumns === 2 || numberOfColumns === 3;

  if (!isValidNumberOfColumns) {
    throw new Error('Invalid value of numberOfColumns. Please only use 2 or 3');
  }

  return (
    <View
      style={[containerStyle, styles.container]}
      testID={idForTestContainer}
    >
      {data.map((card, i) => (
        <View
          key={i}
          style={[
            itemsStyle,
            { ...styles.cardContainer },
            {
              width:
                numberOfColumns === 2
                  ? twoColumnsCardWidth
                  : threeColumnsCardWidth,
            },
          ]}
        >
          <Card
            variant="content-stacked"
            title={card.title}
            onPress={card.onPress}
            icon={card.icon}
            titleSize={titlesSize}
            testID={idForTestItems}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardContainer: {
    maxWidth: '100%',
  },
});

export default StackedCardGrid;
