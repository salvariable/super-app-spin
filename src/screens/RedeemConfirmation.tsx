import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { TStackBenefits } from '../types/navigation.types';
import { REDEEM_CONFIRMATION } from '../constants/screens';
import { TTransaction } from '../types/data.types';
import handleConvertPointsToAmount from '../helpers/handleConvertPointsToAmount';
import handleDateFormat from '../helpers/handleDateFormat';

const RedeemConfirmation = ({ route }: NativeStackScreenProps<TStackBenefits, typeof REDEEM_CONFIRMATION>) => {
  const { points, entity, transactionNo, date, expiryDate, giftCode }: TTransaction = route.params.transaction

  return (
    <View>
      <Text testID="entity">{entity}</Text>
      <Text testID="points">{points}</Text>
      <Text testID="amount">{handleConvertPointsToAmount(points)}</Text>
      <Text testID="date">{handleDateFormat(date)}</Text>
      <Text testID="expiry-date">{handleDateFormat(expiryDate ?? new Date())}</Text>
      <Text testID="gift-code">{giftCode}</Text>
      <Text testID="transaction-number">{transactionNo}</Text>
    </View>
  );
};

export default RedeemConfirmation;
