import React from 'react';
import { View, StyleSheet } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps } from '../types';
import Text from '../../../components/Text/Text';

function ContentIconCard(props: BaseCardProps) {
  const themedStyle = useThemedStyles(styles);

  return (
    <BaseCard {...props} style={themedStyle.card}>
      <View style={themedStyle.contentView}>
        {props.image && props.image}
        <Text variant="small-body-bold" numberOfLines={1}>
          {props.title}
        </Text>
        {props.subtitle && (
          <Text variant="overline" numberOfLines={1}>
            {props.subtitle}
          </Text>
        )}
      </View>
    </BaseCard>
  );
}

const styles = () =>
  StyleSheet.create({
    card: {
      height: 120,
      width: 160,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
    },
    cardTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contentView: {
      marginHorizontal: 12,
      marginVertical: 12,
      flexDirection: 'column',
    },
    image: {
      height: 40,
      width: 40,
    },
  });

export default ContentIconCard;
