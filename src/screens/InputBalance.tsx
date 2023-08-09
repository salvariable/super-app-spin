import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';

import MaskInput from '../components/atoms/TextInput/MaskInput';
import Button from '../components/Button/Button';

import { useAppContext } from '../context/AppContext';

const InputBalance = () => {
  const { balancePoints } = useAppContext();

  const inputRef = useRef(null);

  const [amount, setAmount] = useState('0');

  const handleOnChangeAmount = (text: string) => setAmount(text);

  return (
    <View testID="input-balance">
      <View testID="header-points">
        <Text testID="points">{balancePoints}</Text>
      </View>
      <Text testID="ínstruction-label"></Text>
      <MaskInput
        testID="input-amount"
        maskType="payment"
        value={amount}
        label="Monto en pesos"
        onChangeText={handleOnChangeAmount}
      />
      <Button
        testID="button"
        variant="primary"
        onPress={() => {
          console.log(inputRef.current);
        }}
        text="Continuar"
      />
    </View>
  );
};

export default InputBalance;
