import React, { useState } from 'react';
import { View, TextStyle, StyleSheet, ViewStyle } from 'react-native';
import FrontCardWithoutFlip from './components/FrontCardWithoutFlip';
import BackCardWithoutFlip from './components/BackCardWithoutFlip';
import type { HeaderCardProps, Gradient } from '../PaymentCard/types';
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
    customHeader?: React.ReactNode;
    initValue?: boolean;
    styleToggle?: ViewStyle;
  };
  header: HeaderCardProps;
  backCard: {
    testID?: string;
    barcodeValue: string;
    barcodeFormat: BarcodeFormat;
    customHeader?: React.ReactNode;
    initValue?: boolean;
  };
  textStyle?: TextStyle;
  flip?: boolean;
  gradient: Gradient;
  style?: ViewStyle;
  gradientStart?: AxisProp;
  gradientEnd?: AxisProp;
}
interface AxisProp {
  x: number;
  y: number;
}

function PaymentCardWithoutAnimated({
  header,
  frontCard,
  backCard,
  textStyle,
  flip,
  gradient,
  style,
  gradientStart,
  gradientEnd,
}: PaymentCardProps) {
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={[styles.content, style]}>
      {flip === false ? (
        <FrontCardWithoutFlip
          testID={frontCard.testID}
          header={header}
          textStyle={textStyle}
          cardNumber={frontCard.cardNumber}
          onChangeCardNumber={frontCard.onChangeCardNumber}
          maxCardNumberLenght={frontCard.maxCardNumberLenght}
          hiddenNumbers={frontCard.hiddenNumbers}
          ownerName={frontCard.ownerName}
          toggleActive={frontCard.toggleActive}
          toggleSwitch={(value) => {
            setDisabled(!disabled);
            frontCard.toggleSwitch && frontCard.toggleSwitch(value);
          }}
          initValue={frontCard.initValue}
          style={frontCard.styleToggle}
          disabled={disabled}
          gradient={gradient}
          customHeader={frontCard.customHeader}
          gradientStart={{
            x: gradientStart ? gradientStart?.x : 0,
            y: gradientStart ? gradientStart?.y : 0,
          }}
          gradientEnd={{
            x: gradientEnd ? gradientEnd?.x : 0,
            y: gradientEnd ? gradientEnd?.y : 0,
          }}
        />
      ) : (
        <BackCardWithoutFlip
          gradientStart={{
            x: gradientStart ? gradientStart?.x : 0,
            y: gradientStart ? gradientStart?.y : 0,
          }}
          gradientEnd={{
            x: gradientEnd ? gradientEnd?.x : 0,
            y: gradientEnd ? gradientEnd?.y : 0,
          }}
          testID={backCard?.testID}
          header={header}
          customHeader={backCard?.customHeader}
          textStyle={textStyle}
          disabled={disabled}
          gradient={gradient}
          barcodeFormat={backCard.barcodeFormat}
          barcodeValue={backCard.barcodeValue}
          initValue={backCard.initValue}
        />
      )}
    </View>
  );
}

export default PaymentCardWithoutAnimated;

const styles = StyleSheet.create({
  content: {
    position: 'relative',
  },
});
