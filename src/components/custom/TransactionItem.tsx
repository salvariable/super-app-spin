import React, { useMemo } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import type { TStackBenefits } from '../../types/navigation.types';
import type { TTransaction } from '../../types/data.types';

import Text from '../Text/Text';

import { TRANSACTION_DETAILS } from '../../constants/screens';
import { IMAGES } from '../../constants/values';

import { formatTransactionDate } from '../../helpers/handleDateFormat';
import { handleFormatPoints } from '../../helpers/handleFormatPoints';

import { INTER } from '../../styles/custom';

type TransactionItemProps = {
  transaction: TTransaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const navigation = useNavigation<NavigationProp<TStackBenefits>>();

  const entityImage = useMemo(
    () => IMAGES[transaction.entity.toLowerCase().split(' ').join('-')],
    [],
  );

  const goToDetails = () =>
    navigation.navigate(TRANSACTION_DETAILS, {
      transaction,
    });

  return (
    <TouchableOpacity
      testID="transaction-item"
      onPress={goToDetails}
      style={styles.container}>
      <Image source={entityImage} style={styles.entityAvatar} />
      <View>
        <Text variant="content-one-regular" style={styles.entityName}>
          {transaction.entity}
        </Text>
        <Text variant="small-body" style={styles.date}>
          {formatTransactionDate(transaction.date)}
        </Text>
      </View>
      <Text variant="small-body" style={styles.points}>
        {transaction.operation === 'earned' ? '+ ' : '- '}
        {handleFormatPoints(transaction.points)}
      </Text>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#e6e6ec',
    alignItems: 'center',
  },
  entityAvatar: {
    borderRadius: 20,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#e6e6ec',
  },
  entityName: {
    fontFamily: INTER,
  },
  date: {
    fontFamily: INTER,
    color: '#69698B',
  },
  points: {
    fontFamily: INTER,
    fontWeight: '600',
    marginLeft: 'auto',
  },
});
