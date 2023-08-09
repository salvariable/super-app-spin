import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { TStackBenefits } from '../types/navigation.types';

import { TRANSACTION_DETAILS } from '../constants/screens';

type Props = NativeStackScreenProps<TStackBenefits, typeof TRANSACTION_DETAILS>;

const TransactionDetails = ({ route }: Props) => {
  // const { transaction } = route.params;

  return (
    <View testID="transaction-details">
      {/* <Text testID="entity">{transaction.entity}</Text> */}
    </View>
  );
};

export default TransactionDetails;
