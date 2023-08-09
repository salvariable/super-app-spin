import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { TStackBenefits } from '../types/navigation.types';

import { TRANSACTION_DETAILS } from '../constants/screens';
import handleConvertPointsToAmount from '../helpers/handleConvertPointsToAmount';
import handleDateFormat from '../helpers/handleDateFormat';
import { TTransaction } from '../types/data.types';

type Props = NativeStackScreenProps<TStackBenefits, typeof TRANSACTION_DETAILS>;

const TransactionDetails = ({ route }: Props) => {
  const { points, entity, operation, transactionNo, date, expiryDate }: TTransaction = route.params.transaction

  const operationSign = operation === 'earned' ? '+' : '-';

  return (
    <View>
      <Text testID="entity">{entity}</Text>
      <Text testID="points">{operationSign}{points}</Text>
      <Text testID="amount">{handleConvertPointsToAmount(points)}</Text>
      <Text testID="date">{handleDateFormat(date)}</Text>
      <Text testID="expiry-date">{handleDateFormat(expiryDate ?? new Date())}</Text>
      <Text testID="transaction-number">{transactionNo}</Text>
    </View>
  );
};

export default TransactionDetails;
