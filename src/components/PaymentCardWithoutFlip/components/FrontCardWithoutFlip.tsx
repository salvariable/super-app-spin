import React from 'react';
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import HeaderCard from '../../PaymentCard/components/HeaderCard';
import Text from '../../../components/Text/Text';
import Card from '../../../components/Card/Card';
import LinearGradient from 'react-native-linear-gradient';
import Switch from '../../atoms/Switch';
import type { HeaderCardProps, Gradient } from '../../PaymentCard/types';
import NumbersCards from '../../PaymentCard/components/NumbersCards';

export interface FrontCardProps {
  testID?: string;
  header?: HeaderCardProps;
  ownerName?: string;
  cardNumber: string;
  onChangeCardNumber?: (newCardNumber: string) => void;
  maxCardNumberLenght?: number;
  hiddenNumbers?: number;
  textStyle?: TextStyle;
  toggleActive?: boolean;
  toggleSwitch?: (value: boolean) => void;
  disabled: boolean;
  gradient: Gradient;
  customHeader?: React.ReactNode;
  gradientStart?: AxisProp;
  gradientEnd?: AxisProp;
  initValue?: boolean;
  style?: ViewStyle;
}

interface AxisProp {
  x: number;
  y: number;
}

function FrontCardWithoutFlip({
  header,
  ownerName,
  cardNumber,
  onChangeCardNumber,
  hiddenNumbers = 12,
  toggleActive,
  toggleSwitch,
  gradient,
  disabled,
  testID,
  maxCardNumberLenght,
  customHeader,
  gradientStart,
  gradientEnd,
  initValue,
  style,
}: FrontCardProps) {
  return (
    <View testID={testID} style={styles.content}>
      <Card style={styles.contentCard}>
        <LinearGradient
          testID="payment-card-gradient"
          style={styles.gradientContent}
          colors={
            disabled === initValue
              ? [
                  gradient.disabled.left,
                  gradient.disabled.center,
                  gradient.disabled.right,
                ]
              : [
                  gradient.enabled.left,
                  gradient.enabled.center,
                  gradient.enabled.right,
                ]
          }
          start={{
            x: gradientStart ? gradientStart?.x : 0,
            y: gradientStart ? gradientStart?.y : 0,
          }}
          end={{
            x: gradientEnd ? gradientEnd?.x : 0,
            y: gradientEnd ? gradientEnd?.y : 0,
          }}
        >
          {customHeader ? (
            customHeader
          ) : (
            <HeaderCard
              alias={header?.alias}
              brandName={header?.brandName}
              brandIcon={header?.brandIcon}
            />
          )}

          <View style={styles.footer}>
            <Text variant="content-two-regular" style={styles.owner}>
              {ownerName ?? ''}
            </Text>
            <View style={styles.contentToggleNumberCard}>
              <NumbersCards
                cardNumber={cardNumber}
                hiddenNumbers={hiddenNumbers}
                onChangeCardNumber={onChangeCardNumber}
                maxCardNumberLenght={maxCardNumberLenght}
              />
              {toggleActive && (
                <View style={styles.unlocked}>
                  <Text variant="overline" style={styles.unlockedText}>
                    {disabled ? 'Activar' : 'Bloquear'}
                  </Text>
                  <Switch
                    style={style}
                    initVal={initValue}
                    onToggle={(value) => toggleSwitch && toggleSwitch(value)}
                  />
                </View>
              )}
            </View>
          </View>
        </LinearGradient>
      </Card>
    </View>
  );
}

export default FrontCardWithoutFlip;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    zIndex: 1,
  },
  gradientContent: {
    height: 180,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  owner: {
    color: 'white',
  },
  animated: {
    backfaceVisibility: 'hidden',
    height: 180,
  },
  contentCard: {
    width: '92%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 10,
  },
  contentToggleNumberCard: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer: {
    width: '92%',
    alignSelf: 'center',
    marginTop: 30,
  },
  unlocked: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unlockedText: {
    marginRight: 5,
    color: 'white',
  },
  ownerLastFourNumber: {
    color: 'white',
  },
});
