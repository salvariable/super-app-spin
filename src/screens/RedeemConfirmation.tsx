import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { TStackBenefits } from '../types/navigation.types';
import { FEED, REDEEM_CONFIRMATION } from '../constants/screens';
import { TTransaction } from '../types/data.types';
import handleConvertPointsToAmount from '../helpers/handleConvertPointsToAmount';
import handleDateFormat from '../helpers/handleDateFormat';
import Button from '../components/Button/Button';
import BottomSheet from '../components/atoms/BottomSheet';
import { StackScreenProps } from '@react-navigation/stack';

import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../constants/values';
import Text from '../components/Text/Text';
import BaseCard from '../components/Card/components/BaseCard';


const RedeemConfirmation = ({ navigation, route }: StackScreenProps<TStackBenefits, typeof REDEEM_CONFIRMATION>) => {
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

  const goToFeed = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: FEED,
          },
        ],
      })
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BaseCard contentStyle={styles.headerCard}>
        <Image source={IMAGES[entity.toLowerCase().split(' ').join('-')]} style={styles.avatar} />
        <Text variant='content-one-semibold' testID="entity">{entity}</Text>
        <Text variant='extra-small-body' style={styles.label}>
          Toca el ícono para copiar el certificado de regalo o escríbelo desde la app o página web de Volaris
        </Text>
        <View style={styles.certificate}>
          <Text variant='label-extra-small'>Certificado de regalo</Text>
          <Text variant='label-default-bold' testID="gift-code">{giftCode}</Text>
        </View>
      </BaseCard>

      <Button testID='info-button' text='¿Cómo usar mi certificado de regalo?' variant='text-only' onPress={() => { }} />

      <View>
        <View style={styles.row}>
          <Text>
            Puntos cambiados:
          </Text>
          <Text style={styles.key} testID="points">{points}</Text>
        </View>

        <View style={styles.row}>
          <Text>
            Valen:
          </Text>
          <Text style={styles.key} testID="amount">{handleConvertPointsToAmount(points)}</Text>
        </View>

        <View style={styles.row}>
          <Text>
            Fecha:
          </Text>
          <Text style={styles.key} testID="date">{handleDateFormat(date)}</Text>
        </View>

        <View style={styles.row}>
          <Text>
            Válido hasta el:
          </Text>
          <Text style={styles.key} testID="expiry-date">{handleDateFormat(expiryDate ?? new Date())}</Text>
        </View>
      </View>

      <View testID='transaction-text' style={styles.transaction}>
        <Text>Número de transacción</Text>
        <Text testID="transaction-number">{transactionNo}</Text>
      </View>


      <View style={styles.buttonWrap}>
        <Button testID='certificate-button' text='Usar certificado de regalo' onPress={handleModal} />
      </View>
      <View>
        <Button testID='save-button' text='Guardar para otro momento' variant='secondary' onPress={goToFeed} />
      </View>
    </ScrollView>
  );
};

export default RedeemConfirmation;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff'
  },
  headerCard: {
    alignItems: 'center',
    padding: 8
  },
  avatar: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e6e6ec',
  },
  label: {
    marginVertical: 16
  },
  certificate: {
    backgroundColor: 'silver',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'stretch'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  key: {
    fontWeight: 'bold'
  },
  transaction: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: 'silver',
    borderTopColor: 'silver',
    marginVertical: 16,
    paddingVertical: 16
  },
  buttonWrap: {
    marginVertical: 8
  }
})
