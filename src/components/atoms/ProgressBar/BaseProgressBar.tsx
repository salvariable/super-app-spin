import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type {
  BaseProgressBarProps,
  ConditionalBaseProgressBarProps,
} from '../types';
import type { ThemeContextType } from '../../../theme/types';
import Text from '../../Text/Text';

interface AnimatedBarProps {
  progressBarWidth: number;
}

function BaseProgressBar({
  firstColor,
  secondColor,
  testID,
  percent,
  iconGoalComponent,
  pagination,
}: BaseProgressBarProps & ConditionalBaseProgressBarProps) {
  const themedStyle = useThemedStyles(styles);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const renderPagination = () => (
    <Text
      variant={'caption'}
      testID={'text-steps-testID'}
      style={[themedStyle.textSteps, themedStyle.textStepsLight]}
    >
      <Text variant={'caption-medium'} style={themedStyle.textSteps}>
        {percent.currentStep}
      </Text>
      /{percent.totalStep}
    </Text>
  );

  const animatedBarProps = {
    firstColor,
    secondColor,
    testID,
    percent,
    progressBarWidth,
  };

  return (
    <View>
      {iconGoalComponent !== undefined && iconGoalComponent}
      {progressBarWidth === 0 ? (
        <View
          style={themedStyle.progressBar}
          testID="grayBar"
          onLayout={(event) => {
            const { x, width } = event.nativeEvent.layout;
            setProgressBarWidth(x + width);
          }}
        />
      ) : (
        <View style={themedStyle.progressBar}>
          <AnimatedBar {...animatedBarProps} />
        </View>
      )}
      {pagination && renderPagination()}
    </View>
  );
}

const AnimatedBar = ({
  firstColor,
  secondColor,
  testID,
  percent,
  progressBarWidth,
}: AnimatedBarProps & BaseProgressBarProps) => {
  const themedStyle = useThemedStyles(styles);
  const initialTranslateX = -progressBarWidth;
  const barXTransform = useRef(new Animated.Value(initialTranslateX)).current;

  const progressPercentage = percent.currentStep / percent.totalStep;

  const transformXPosition = useCallback(
    (thePercentage) => {
      const newXTranslation = -(
        progressBarWidth -
        progressBarWidth * thePercentage
      );

      Animated.timing(barXTransform, {
        toValue: newXTranslation,
        duration: 600,
        useNativeDriver: true,
      }).start();
    },
    [barXTransform, progressBarWidth],
  );

  useEffect(() => {
    transformXPosition(progressPercentage);
  }, [progressPercentage, transformXPosition]);

  const progressBarColor =
    firstColor !== undefined
      ? firstColor
      : themedStyle.colors.brand_gradient_loyalty[0];

  const secondProgressBarColorDefault =
    firstColor !== undefined
      ? progressBarColor
      : themedStyle.colors.brand_gradient_loyalty[1];

  const secondProgressBarColor =
    secondColor !== undefined ? secondColor : secondProgressBarColorDefault;

  return (
    <Animated.View
      testID={testID}
      style={{
        ...themedStyle.progressionBar,
        ...{
          width: '100%',
          transform: [{ translateX: barXTransform }],
        },
      }}
    >
      <LinearGradient
        useAngle
        angle={179}
        angleCenter={{ x: 0.2, y: 0.5 }}
        colors={[progressBarColor, secondProgressBarColor]}
        style={themedStyle.gradientContent}
      />
    </Animated.View>
  );
};

const styles = (theme: ThemeContextType) => ({
  ...theme,
  ...StyleSheet.create({
    progressBar: {
      height: 8,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.colors.NEUTRAL_DEFAULT_LIGHT_200,
      borderRadius: 7.5,
      overflow: 'hidden',
    },
    progressionBar: {
      borderRadius: 7.5,
      height: 8,
    },
    gradientContent: {
      height: 8,
      borderRadius: 5,
    },
    textSteps: {
      fontSize: 10,
    },
    textStepsLight: {
      color: theme.colors.NEUTRAL_DEFAULT_DARK_100,
    },
  }),
});

export default BaseProgressBar;
