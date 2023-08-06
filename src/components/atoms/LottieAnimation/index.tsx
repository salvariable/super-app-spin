import React from 'react';
import LottieView, { AnimationObject } from 'lottie-react-native';
import type { StyleProp, ViewStyle } from 'react-native';

type LottieAnimationProps = {
  source: string | AnimationObject | { uri: string };
  autoplay?: boolean;
  loop?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

const LottieAnimation = ({
  source,
  autoplay = true,
  loop = true,
  style,
  testID,
}: LottieAnimationProps) => {
  return (
    <LottieView
      testID={testID}
      source={source}
      autoPlay={autoplay}
      loop={loop}
      style={style}
    />
  );
};

export default LottieAnimation;
