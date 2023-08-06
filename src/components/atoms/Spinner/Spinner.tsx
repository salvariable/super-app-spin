import React from 'react';
import LottieAnimation from '../LottieAnimation';
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../../theme/types';
import Text from '../../Text/Text';
const LottieSpinnerDefault = require('../../../assets/SpinnerLottie/spinner-default.json');
const LottieSpinnerInverse = require('../../../assets/SpinnerLottie/spinner-inverse.json');

export enum SpinnerSize {
  'large',
  'medium',
  'small',
}

type SpinnerProps = {
  style?: StyleProp<ViewStyle>;
  testID?: string;
  label?: string;
  inverse?: boolean;
  size?: keyof typeof SpinnerSize;
};

const Spinner = ({
  style,
  testID,
  inverse = false,
  size = 'large',
  label,
}: SpinnerProps) => {
  const themedStyle = useThemedStyles(styles);

  const SpinnerSizeStyle =
    size === 'small'
      ? themedStyle.small
      : size === 'medium'
      ? themedStyle.medium
      : themedStyle.large;

  const InverseComponent = inverse
    ? LottieSpinnerInverse
    : LottieSpinnerDefault;

  const LabelStyle = inverse && themedStyle.inverseLabelColor;
  const LabelTextVariant = size === 'large' ? 'label-default' : 'label-small';

  return (
    <View style={[themedStyle.container]}>
      <LottieAnimation
        testID={testID}
        source={InverseComponent}
        style={[style, SpinnerSizeStyle]}
      />
      {label && (
        <Text
          variant={LabelTextVariant}
          style={[themedStyle.labelTextAlignment, LabelStyle]}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

export default Spinner;

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    small: {
      width: 36,
      height: 36,
    },
    medium: {
      width: 80,
      height: 80,
    },
    large: {
      width: 128,
      height: 128,
    },
    labelTextAlignment: {
      textAlign: 'center',
    },
    inverseLabelColor: {
      color: theme.colors.inverse_content_primary,
    },
  });
