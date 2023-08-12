import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';

import type { TStackBenefits } from '../types/navigation.types';
import type { TTransaction } from '../types/data.types';

import BaseCard from '../components/Card/components/BaseCard';
import Text from '../components/Text/Text';

import { TRANSACTION_DETAILS } from '../constants/screens';
import { IMAGES } from '../constants/values';

import handleConvertPointsToAmount from '../helpers/handleConvertPointsToAmount';
import handleDateFormat from '../helpers/handleDateFormat';

import { INTER, POPPINS } from '../styles/custom';

const TransactionDataItem = ({
  testId,
  label,
  value,
}: {
  testId: string;
  label: string;
  value: string;
}) => (
  <View style={styles.transactionDataItem}>
    <Text variant="content-one-regular" style={styles.transactionDataLabel}>
      {label}
    </Text>
    <Text
      testID={testId}
      variant="content-one-regular"
      style={styles.transactionDataValue}>
      {value}
    </Text>
  </View>
);

type Props = StackScreenProps<TStackBenefits, typeof TRANSACTION_DETAILS>;

const TransactionDetails = ({ route }: Props) => {
  const {
    points,
    entity,
    operation,
    transactionNo,
    date,
    expiryDate,
  }: TTransaction = route.params.transaction;

  const operationSign = operation === 'earned' ? '+' : '-';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.baseCardContainer}>
        <BaseCard style={styles.card}>
          <BaseCard style={styles.avatarContainer}>
            <Image
              source={IMAGES[entity.toLowerCase().split(' ').join('-')]}
              style={styles.entityAvatar}
            />
          </BaseCard>
          <View style={styles.entityData}>
            <Text
              variant="headline-medium"
              testID="entity"
              style={styles.entityName}>
              {entity}
            </Text>
            <View style={styles.operationLabel}>
              <Text variant="content-one-regular" style={styles.operationText}>
                {operation === 'earned'
                  ? 'En esta compra ganaste:'
                  : 'En este movimiento usaste:'}
              </Text>
            </View>
            <Text
              variant="headline-extra-large"
              testID="points"
              style={styles.points}>
              {operationSign}
              {points}
            </Text>
          </View>
        </BaseCard>
      </View>
      <View style={styles.transactionData}>
        <TransactionDataItem
          testId="amount"
          label="Monto total:"
          value={handleConvertPointsToAmount(points)}
        />
        <TransactionDataItem
          testId="date"
          label="Fecha:"
          value={handleDateFormat(date)}
        />
        {operation === 'earned' && (
          <TransactionDataItem
            testId="expiry-date"
            label="Úsalos desde el:"
            value={handleDateFormat(expiryDate ?? new Date())}
          />
        )}
      </View>
      <View style={styles.divider} />
      <View style={styles.transactionNo}>
        <Text variant="content-one-regular">Número de transacción</Text>
        <Text
          variant="content-one-regular"
          testID="transaction-number"
          style={styles.transactionNoValue}>
          {transactionNo}
        </Text>
      </View>
    </ScrollView>
  );
};

export default TransactionDetails;

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 52,
  },
  baseCardContainer: {
    paddingHorizontal: 16,
  },
  card: {
    position: 'relative',
    padding: 16,
    alignItems: 'center',
    width: 'auto',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -56,
    left: width / 2 - 74,
    padding: 3,
  },
  entityAvatar: {
    width: 66,
    height: 66,
    borderRadius: 33,
  },
  entityData: {
    alignItems: 'center',
    marginTop: 28,
  },
  entityName: {
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: POPPINS,
  },
  operationLabel: {
    marginBottom: 12,
    marginTop: 8,
    textAlign: 'center',
    backgroundColor: '#f5f5f7',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 16,
  },
  operationText: {
    fontFamily: INTER,
  },
  points: {
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: POPPINS,
  },
  transactionData: {
    padding: 16,
    marginTop: 8,
  },
  transactionDataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  transactionDataLabel: {
    color: '#373764',
    fontFamily: INTER,
  },
  transactionDataValue: {
    fontWeight: '600',
    fontFamily: INTER,
  },
  divider: {
    height: 1,
    backgroundColor: '#f5f5f7',
  },
  transactionNo: {
    padding: 16,
  },
  transactionNoValue: {
    color: '#373764',
    fontFamily: INTER,
  },
});
