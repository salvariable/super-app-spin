import React from 'react';
import { StyleSheet, View } from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../../theme/types';

type StepProgressViewProps = {
  steps: number;
  currentStep: number;
};

function StepProgressView({ steps, currentStep }: StepProgressViewProps) {
  const style = useThemedStyles(styles);

  const stepViews = [];

  for (let i = 1; i <= steps; i += 1) {
    stepViews.push(
      <View
        testID={`step-${i}${i === currentStep ? '-active' : ''}`}
        key={i}
        style={i === currentStep ? style.active : style.disabled}
      />,
    );
  }

  return <View style={style.container}>{stepViews}</View>;
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    active: {
      width: 32,
      height: 8,
      borderRadius: 8,
      justifyContent: 'center',
      backgroundColor: theme.colors.ui_active,
      marginRight: 4,
    },
    disabled: {
      width: 8,
      height: 8,
      borderRadius: 8,
      justifyContent: 'center',
      backgroundColor: theme.colors.inverse_content_secondary,
      marginRight: 4,
    },
  });

export default StepProgressView;
