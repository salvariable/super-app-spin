import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import type { TEntity } from '../../types/data.types';
import type { TStackBenefits } from '../../types/navigation.types';

import BaseCard from '../Card/components/BaseCard';
import Text from '../Text/Text';

import { INPUT_BALANCE } from '../../constants/screens';
import {
  CATEGORIES,
  ENTITY_LIMIT,
  ENTITY_MIN,
  IMAGES,
} from '../../constants/values';

import { INTER } from '../../styles/custom';

const chevronRight = require('../../assets/rightArrow.png');

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
          <Text variant="content-one-regular" style={styles.entityName}>
            {entity.name}
          </Text>
          <Text variant="small-body" style={styles.category}>
            {CATEGORIES[entity.category]}
          </Text>
        </View>
        <Image source={chevronRight} style={styles.chevron} />
      </View>
    </BaseCard>
  );
};

export default EntityItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    width: 'auto',
  },
  entityData: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e6e6ec',
  },
  entityName: {
    fontWeight: '600',
    fontFamily: INTER,
  },
  category: {
    color: '#69698B',
    fontFamily: INTER,
  },
  chevron: {
    marginLeft: 'auto',
  },
});
