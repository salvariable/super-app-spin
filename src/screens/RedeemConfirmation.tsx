import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TStackBenefits } from '../types/navigation.types';
import { FEED, REDEEM_CONFIRMATION } from '../constants/screens';
import { TTransaction } from '../types/data.types';
import handleConvertPointsToAmount from '../helpers/handleConvertPointsToAmount';
import handleDateFormat from '../helpers/handleDateFormat';
import Button from '../components/Button/Button';
import BottomSheet from '../components/atoms/BottomSheet';


const RedeemConfirmation = ({ navigation, route }: NativeStackScreenProps<TStackBenefits, typeof REDEEM_CONFIRMATION>) => {
  const { points, entity, transactionNo, date, expiryDate, giftCode }: TTransaction = route.params.transaction;

  const handleModal = () => BottomSheet.show({
    title: 'A title',
    children: <View>
      <Text>
        Hello world!
      </Text>
    </View>,
    headerBackgroundColor: '#cccccc',
    bodyBackgroundColor: '#cccccc',
    contentStyle: {
      paddingHorizontal: 50,
    },
  });

  const goToFeed = () => navigation.navigate(FEED);

  return (
    <View>
      <Text testID="entity">{entity}</Text>
      <Text testID="points">{points}</Text>
      <Text testID="amount">{handleConvertPointsToAmount(points)}</Text>
      <Text testID="date">{handleDateFormat(date)}</Text>
      <Text testID="expiry-date">{handleDateFormat(expiryDate ?? new Date())}</Text>
      <Text testID="gift-code">{giftCode}</Text>
      <Text testID="transaction-number">{transactionNo}</Text>

      <Button testID='certificate-button' text='Usar certificado de regalo' onPress={handleModal} />
      <Button testID='save-button' text='Guardar para otro momento' variant='secondary' onPress={goToFeed} />
    </View>
  );
};

export default RedeemConfirmation;
