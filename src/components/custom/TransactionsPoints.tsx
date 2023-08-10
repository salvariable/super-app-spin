import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { TStackBenefits } from '../../types/navigation.types';

import BaseCard from '../Card/components/BaseCard';
import Text from '../Text/Text';

import { SELECT_ENTITY, TRANSACTIONS } from '../../constants/screens';

const starImg = require('../../assets/Images/star.png');
const ticketImg = require('../../assets/Images/ticket.png');

type TransactionsPointsProps = {
  style?: StyleProp<ViewStyle>;
};

const TransactionsPoints = ({ style }: TransactionsPointsProps) => {
  const navigation = useNavigation<NavigationProp<TStackBenefits>>();

  return (
    <View testID="grid" style={[styles.container, style]}>
      <BaseCard
        onPress={() => navigation.navigate(TRANSACTIONS)}
        style={styles.baseCard}
        contentStyle={styles.cardContent}>
        <Image source={ticketImg} style={styles.cardImage} />
        <Text
          variant="small-body-bold"
          numberOfLines={2}
          style={styles.cardTitle}>
          Consulta tu historial
        </Text>
      </BaseCard>
      <BaseCard
        onPress={() => navigation.navigate(SELECT_ENTITY)}
        style={styles.baseCard}
        contentStyle={styles.cardContent}>
        <Image source={starImg} style={styles.cardImage} />
        <Text
          variant="small-body-bold"
          numberOfLines={2}
          style={styles.cardTitle}>
          Cambia tus puntos
        </Text>
      </BaseCard>
    </View>
  );
};

export default TransactionsPoints;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 16,
  },
  baseCard: {
    height: 205,
    flex: 1,
    alignItems: 'center',
    borderRadius: 16,
  },
  cardContent: {
    justifyContent: 'center',
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  cardImage: {
    width: 124,
    height: 124,
  },
  cardTitle: {
    textAlign: 'center',
    marginTop: 16,
  },
});
