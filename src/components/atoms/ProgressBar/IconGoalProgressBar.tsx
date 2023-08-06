import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import BaseProgressBar from './BaseProgressBar';
import type {
  BaseProgressBarProps,
  ConditionalBaseProgressBarProps,
} from '../types';
import type { ThemeContextType } from 'src/theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';

const iconDefault = require('../../../assets/regalo.png');

function IconGoalProgressBar({
  goalIcon = iconDefault,
  ...props
}: BaseProgressBarProps & ConditionalBaseProgressBarProps) {
  const themedStyle = useThemedStyles(styles);
  const { percent } = props;

  const renderIcon = () => (
    <View
      testID="iconSteps"
      style={[
        themedStyle.iconContainer,
        percent.currentStep === percent.totalStep &&
          themedStyle.iconContainerProgressComplete,
      ]}
    >
      <Image source={goalIcon} style={themedStyle.icon} />
    </View>
  );
  return (
    <View testID="IconGoalProgressBar">
      <BaseProgressBar {...props} iconGoalComponent={renderIcon()} />
    </View>
  );
}

const styles = (theme: ThemeContextType) => ({
  ...theme,
  ...StyleSheet.create({
    iconContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: -11,
      right: 0,
      borderRadius: 16,
      backgroundColor: theme.colors.NEUTRAL_DEFAULT_LIGHT_100,
      padding: 10,
      height: 28,
      width: 28,
      zIndex: 2,
      borderWidth: 1,
      borderColor: theme.colors.NEUTRAL_DEFAULT_LIGHT_200,
    },
    iconContainerProgressComplete: {
      borderColor: '#B23AEA',
    },
    icon: {
      width: 14,
      height: 14,
      resizeMode: 'contain',
    },
  }),
});
export default IconGoalProgressBar;
