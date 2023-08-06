import React from 'react';
import { View, StyleSheet } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps } from '../types';
import Text from '../../../components/Text/Text';

function QuickActionCard(props: BaseCardProps) {
  const themedStyle = useThemedStyles(styles);

  return (
    <BaseCard {...props} style={themedStyle.card}>
      <View style={themedStyle.contentView}>
        <Text>{props.title}</Text>
        <Text>{props.subtitle}</Text>
      </View>
    </BaseCard>
  );
}

const styles = () =>
  StyleSheet.create({
    card: {
      height: 96,
      width: 113,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
    },
    contentView: {
      marginHorizontal: 16,
      marginVertical: 16,
      flexDirection: 'row',
    },
  });

export default QuickActionCard;
