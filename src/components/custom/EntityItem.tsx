import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import type { TEntity } from '../../types/data.types';
import type { TStackBenefits } from '../../types/navigation.types';

import BaseCard from '../Card/components/BaseCard';
import Text from '../Text/Text';

import { INPUT_BALANCE } from '../../constants/screens';

export const ENTITY_LIMIT = 1000;
export const ENTITY_MIN = 20;

const IMAGES: Record<string, ImageSourcePropType> = {
  volaris: require('../../assets/Images/volaris.png'),
  'smart-fit': require('../../assets/Images/smart-fit.png'),
  vix: require('../../assets/Images/vix.png'),
  oxxo: require('../../assets/Images/oxxo.png'),
  'oxxo-gas': require('../../assets/Images/oxxo-gas.png'),
};

const CATEGORIES: Record<string, string> = {
  fuel: 'Combustible',
  flight: 'Vuelos',
  fitness: 'Deportes',
  entertainment: 'Entretenimiento',
  groceries: 'Supermercado',
};

const EntityItem = ({ entity }: { entity: TEntity }) => {
  const navigation = useNavigation<NavigationProp<TStackBenefits>>();

  const goToInputBalance = () =>
    navigation.navigate(INPUT_BALANCE, {
      entityLimit: ENTITY_LIMIT,
      entityMin: ENTITY_MIN,
    });

  return (
    <BaseCard
      testID="entity-item"
      onPress={goToInputBalance}
      style={styles.container}>
      <View style={styles.entityData}>
        <Image source={IMAGES[entity.avatar]} style={styles.avatar} />
        <View>
          <Text variant="content-one-regular">{entity.name}</Text>
          <Text>{CATEGORIES[entity.category]}</Text>
        </View>
      </View>
    </BaseCard>
  );
};

export default EntityItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  entityData: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    borderRadius: 20,
  },
});
