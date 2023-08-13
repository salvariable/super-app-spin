import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';

import TextInput from '../components/atoms/TextInput';
import Button from '../components/Button/Button';

import { useAppContext } from '../context/AppContext';
import { errorMaxLabel, errorMinLabel } from '../constants/inputs';
import { TTransaction } from '../types/data.types';
import { TStackBenefits } from '../types/navigation.types';
import { INPUT_BALANCE, REDEEM_CONFIRMATION } from '../constants/screens';
import MyPoints from '../components/custom/MyPoints';
import Chip from '../components/atoms/Chip';
import { StackScreenProps } from '@react-navigation/stack';
import { fontFamily } from '../styles/spinplus/Typography';
import { INTER } from '../styles/custom';
import Text from '../components/Text/Text';


const InputBalance = ({ navigation, route }: StackScreenProps<TStackBenefits, typeof INPUT_BALANCE>) => {
  let { balancePoints } = useAppContext();

  const [amount, setAmount] = useState<string>('');

  const handleOnChangeAmount = (text: string) => setAmount(text);

  const errorMin = parseFloat(amount) < 20 ? errorMinLabel : '';
  const errorMax = parseFloat(amount) > 1000 ? errorMaxLabel : '';

  const amountsList = ['50', '100', '200', '500'];
  const availableAmounts = balancePoints >= 10000 ? amountsList : balancePoints >= 1000 ? amountsList.splice(0, 2) : [];

  const goToConfirmation = (transaction: TTransaction) => navigation.navigate(REDEEM_CONFIRMATION, { transaction })

  const handleRedeemPoints = async () => {
    console.log(`Cambiando ${amount} pesos...`)
    try {
      const response = await fetch('http://localhost:3001/history/5');

      const data: TTransaction = await response.json();
      goToConfirmation(data)
    } catch (e) {
      Alert.alert('Algo salió mal', 'Por favor intenta de nuevo más tarde', [
        {
          text: 'Entiendo',
        }
      ])
    }
  }

  const instructionPrefix = balancePoints >= 1000 ? 'Elige o escribe' : 'Escribe';
  const handleAmountSelected = (selected: string) => setAmount(selected);

  return (
    <View testID="input-balance" style={styles.container}>
      <MyPoints />

      <Text variant="content-one-regular"
        testID='instruction-label'
        style={styles.label}
      >
        {instructionPrefix} el valor de los puntos que quieres cambiar
      </Text>
      <View style={styles.buttonsWrap}>
        {
          availableAmounts.map(amount => (
            <Chip variant='default' text={`$${amount}`} style={styles.chip} onPress={() => handleAmountSelected(amount)} key={amount} />
          ))
        }
      </View>

      <Text variant="content-one-regular"
        testID='instruction-label'
        style={styles.label}>
        Otro:
      </Text>
      <TextInput
        testID="input-amount"
        variant="default"
        value={amount}
        label='Monto en pesos'
        keyboardType='numeric'
        onChangeText={handleOnChangeAmount}
        error={errorMin || errorMax}
      />

      <View style={styles.button}>
        <Button
          testID="button"
          variant="primary"
          onPress={handleRedeemPoints}
          text="Continuar"
          disabled={
            !amount
            || parseFloat(amount) === 0
            || Boolean(errorMin)
            || Boolean(errorMax)
          }
        />
      </View>

    </View>
  );
};

export default InputBalance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },
  label: {
    marginVertical: 16,
    fontFamily: INTER
  },
  buttonsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  chip: {
    width: 156,
    height: 40,
  },
  button: {
    position: 'absolute',
    padding: 16,
    bottom: 0,
    left: 0,
    right: 0
  },
})