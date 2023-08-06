import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Text from '../../../components/Text/Text';

export interface NumbersCardsProps {
  cardNumber: string;
  hiddenNumbers?: number;
  onChangeCardNumber?: (newCardNumber: string) => void;
  maxCardNumberLenght?: number;
}

const NumbersCards = ({
  cardNumber,
  hiddenNumbers = 12,
  onChangeCardNumber,
  maxCardNumberLenght = 16,
}: NumbersCardsProps) => {
  const [customCardNumber, setCustomCardNumber] = useState('');

  const hideCardNumber = (number: string, position: number) => {
    let asteriskCardNumber = '';
    const cardNumberArray = number.split('');

    for (let i = 0; i < cardNumberArray.length; i++) {
      if (i % 4 === 0) {
        asteriskCardNumber = `${asteriskCardNumber} `;
      }

      if (i >= position) {
        asteriskCardNumber = `${asteriskCardNumber}${cardNumberArray[i]}`;
      } else {
        asteriskCardNumber = `${asteriskCardNumber}*`;
      }
    }
    return asteriskCardNumber;
  };

  useEffect(() => {
    const value = cardNumber.replaceAll(' ', '');
    if (value.length <= hiddenNumbers) {
      setCustomCardNumber(hideCardNumber(value, value.length - 1));
      const timer = setTimeout(() => {
        setCustomCardNumber(hideCardNumber(value, hiddenNumbers));
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCustomCardNumber(hideCardNumber(value, hiddenNumbers));
    }
    if (value.length > maxCardNumberLenght) {
      const filteredValue = value.substring(0, maxCardNumberLenght);
      onChangeCardNumber && onChangeCardNumber(filteredValue);
      setCustomCardNumber(hideCardNumber(filteredValue, hiddenNumbers));
    }
    return;
  }, [cardNumber, hiddenNumbers, maxCardNumberLenght, onChangeCardNumber]);

  return (
    <Text variant="content-two-regular" style={styles.ownerLastFourNumber}>
      {customCardNumber}
    </Text>
  );
};

export default NumbersCards;

const styles = StyleSheet.create({
  ownerLastFourNumber: {
    color: 'white',
  },
});
