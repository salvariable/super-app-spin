import React, { useState, useRef } from 'react';
import { View, Text, Alert } from 'react-native';

import TextInput from '../components/atoms/TextInput';
import Button from '../components/Button/Button';

import { useAppContext } from '../context/AppContext';
import handleConvertPointsToAmount from '../helpers/handleConvertPointsToAmount';
import { errorMaxLabel, errorMinLabel } from '../constants/inputs';
import { TTransaction } from '../types/data.types';
import { NavigationProp } from '@react-navigation/native';
import { TStackBenefits } from '../types/navigation.types';
import { INPUT_BALANCE, REDEEM_CONFIRMATION } from '../constants/screens';
import { M } from 'msw/lib/glossary-de6278a9';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// const AmountButton = ()

const InputBalance = ({ navigation }: NativeStackScreenProps<TStackBenefits, typeof INPUT_BALANCE>) => {
  const { balancePoints } = useAppContext();

  const inputRef = useRef(null);

  const [amount, setAmount] = useState('0');

  const handleOnChangeAmount = (text: string) => setAmount(text);

  const errorMin = parseFloat(amount) < 20 ? errorMinLabel : '';
  const errorMax = parseFloat(amount) > 1000 ? errorMaxLabel : '';

  const goToConfirmation = (transaction: TTransaction) => navigation.navigate(REDEEM_CONFIRMATION, { transaction })

  const handleRedeemPoints = async () => {
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

  return (
    <View testID="input-balance">
      <View testID="header-points">
        <Text testID="points">{balancePoints}</Text>
        <Text testID="points-value">Valen {handleConvertPointsToAmount(balancePoints)}</Text>
      </View>
      <Text testID="ínstruction-label">Escribe el valor de los puntos que quieres cambiar</Text>
      {
        balancePoints >= 1000 && (
          <View>
            <View testID='amount-button'>
              <Text>
                Button 1
              </Text>
            </View>
            <View testID='amount-button'>
              <Text>
                Button 2
              </Text>
            </View>
            {balancePoints >= 10000 && <View testID='amount-button'><Text>Button 3</Text></View>}
            {balancePoints >= 10000 && <View testID='amount-button'><Text>Button 4</Text></View>}
          </View>
        )
      }
      <TextInput
        testID="input-amount"
        variant="default"
        value={amount}
        label="Monto en pesos"
        keyboardType='numeric'
        onChangeText={handleOnChangeAmount}
        error={errorMin || errorMax}
      />
      <Button
        testID="button"
        variant="primary"
        onPress={handleRedeemPoints}
        text="Continuar"
        disabled={!amount || parseFloat(amount) === 0}
      />
    </View>
  );
};

export default InputBalance;
