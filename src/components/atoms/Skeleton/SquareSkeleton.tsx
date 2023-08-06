import React, { useRef, useEffect } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

const SquareSkeleton = ({
  speed,
  width,
  height,
  borderRadius,
  backgroundColor = '#F5F5F6',
  foregroundColor = '#E6E6EC',
}: {
  speed?: number;
  width: number;
  height: number;
  borderRadius?: number;
  backgroundColor?: string;
  foregroundColor?: string;
}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const interpolate = fadeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [backgroundColor, foregroundColor],
  });

  const animation = Animated.loop(
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]),
    {
      iterations: -1,
    },
  ).start();

  useEffect(() => {
    animation;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Animated.View
      testID={'skeleton-rect'}
      style={styles(width, height, borderRadius, interpolate).container}
    />
  );
};

export default SquareSkeleton;

const styles = (
  width: number,
  height: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  borderRadius: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationInterpolate: any,
) => {
  return StyleSheet.create({
    container: {
      width: width,
      height: height,
      borderRadius: 4 || borderRadius,
      backgroundColor: animationInterpolate,
    },
  });
};
