import React, { useRef, useEffect, useState } from 'react';
import { View, TextStyle, Animated, StyleSheet, ViewStyle } from 'react-native';
import FrontCard from './components/FrontCard';
import type { HeaderCardProps, Gradient } from './types';
import BackCard from './components/BackCard';
import type { BarcodeFormat } from '../types';

interface PaymentCardProps {
  frontCard: {
    testID?: string;
    ownerName?: string;
    cardNumber: string;
    onChangeCardNumber?: (newCardNumber: string) => void;
    maxCardNumberLenght?: number;
    hiddenNumbers?: number;
    toggleSwitch?: (value: boolean) => void;
    toggleActive?: boolean;
  };
  header: HeaderCardProps;
  backCard: {
    testID?: string;
    barcodeValue: string;
    barcodeFormat: BarcodeFormat;
    customHeader?: React.ReactNode;
  };
  textStyle?: TextStyle;
  flip?: boolean;
  gradient: Gradient;
  style?: ViewStyle;
}

const DURATION_ANIMATION = 300;

function PaymentCard({
  header,
  frontCard,
  backCard,
  textStyle,
  flip,
  gradient,
  style,
}: PaymentCardProps) {
  const [disabled, setDisabled] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const onFlip = (value: number) => {
    Animated.timing(animatedValue, {
      toValue: value,
      duration: DURATION_ANIMATION,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (flip) {
      onFlip(180);
    } else {
      onFlip(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flip]);

  return (
    <View style={[styles.content, style]}>
      <FrontCard
        testID={frontCard.testID}
        header={header}
        textStyle={textStyle}
        cardNumber={frontCard.cardNumber}
        onChangeCardNumber={frontCard.onChangeCardNumber}
        maxCardNumberLenght={frontCard.maxCardNumberLenght}
        hiddenNumbers={frontCard.hiddenNumbers}
        ownerName={frontCard.ownerName}
        animated={animatedValue}
        toggleActive={frontCard.toggleActive}
        toggleSwitch={(value) => {
          setDisabled(!disabled);
          frontCard.toggleSwitch && frontCard.toggleSwitch(value);
        }}
        disabled={disabled}
        gradient={gradient}
      />

      <BackCard
        testID={backCard?.testID}
        header={header}
        customHeader={backCard?.customHeader}
        textStyle={textStyle}
        animated={animatedValue}
        disabled={disabled}
        gradient={gradient}
        barcodeFormat={backCard.barcodeFormat}
        barcodeValue={backCard.barcodeValue}
      />
    </View>
  );
}

export default PaymentCard;

const styles = StyleSheet.create({
  content: {
    position: 'relative',
  },
});
