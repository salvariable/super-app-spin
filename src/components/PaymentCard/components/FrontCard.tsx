import React from 'react';
import { View, StyleSheet, TextStyle, Animated } from 'react-native';
import HeaderCard from './HeaderCard';
import Text from '../../../components/Text/Text';
import Card from '../../../components/Card/Card';
import LinearGradient from 'react-native-linear-gradient';
import Switch from '../../../components/Switch/Switch';
import type { HeaderCardProps, Gradient } from '../types';
import NumbersCards from './NumbersCards';

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
  animated: Animated.Value;
  disabled: boolean;
  gradient: Gradient;
}

function FrontCard({
  header,
  ownerName,
  cardNumber,
  onChangeCardNumber,
  hiddenNumbers = 12,
  toggleActive,
  toggleSwitch,
  animated,
  gradient,
  disabled,
  testID,
  maxCardNumberLenght,
}: FrontCardProps) {
  return (
    <View testID={testID} style={styles.content}>
      <Animated.View
        style={[
          { ...styles.animated },
          {
            transform: [
              { perspective: 1000 },
              {
                rotateY: animated.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['0deg', '180deg'],
                }),
              },
            ],
          },
        ]}
      >
        <Card style={styles.contentCard}>
          <LinearGradient
            testID="payment-card-gradient"
            style={styles.gradientContent}
            colors={
              disabled
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
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <HeaderCard
              alias={header?.alias}
              brandName={header?.brandName}
              brandIcon={header?.brandIcon}
            />
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
                      toggleSwitch={(value) =>
                        toggleSwitch && toggleSwitch(value)
                      }
                    />
                  </View>
                )}
              </View>
            </View>
          </LinearGradient>
        </Card>
      </Animated.View>
    </View>
  );
}

export default FrontCard;

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
