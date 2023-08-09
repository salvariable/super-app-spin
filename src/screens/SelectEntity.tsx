import React, { useMemo } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import type { TStackBenefits } from '../types/navigation.types';

import { INPUT_BALANCE } from '../constants/screens';

import { useFetchTransactions } from '../hooks/useFetchTransactions';

const ENTITY_LIMIT = 1000;
const ENTITY_MIN = 20;

const EntityItem = ({ entity }: { entity: string }) => {
  const navigation = useNavigation<NavigationProp<TStackBenefits>>();

  const goToInputBalance = () =>
    navigation.navigate(INPUT_BALANCE, {
      entityLimit: ENTITY_LIMIT,
      entityMin: ENTITY_MIN,
    });

  return (
    <TouchableOpacity onPress={goToInputBalance}>
      <Text>{entity}</Text>
    </TouchableOpacity>
  );
};

const SelectEntity = () => {
  const { data, loading } = useFetchTransactions();

  const entities = useMemo(() => {
    const entitiesData = data.map(transaction => transaction.entity);

    return new Set(entitiesData);
  }, [data]);

  return (
    <View>
      {loading ? (
        <ActivityIndicator testID="loader" />
      ) : (
        <FlatList
          testID="entities-list"
          data={Array.from(entities)}
          keyExtractor={item => item}
          renderItem={({ item }) => <EntityItem entity={item} />}
        />
      )}
    </View>
  );
};

export default SelectEntity;
