import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface Props extends Partial<LinearGradientProps> {
  children?: JSX.Element;
  isActive?: boolean;
  activeColors: string[];
  notActiveColors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  testID?: string;
  style?: StyleProp<ViewStyle>;
}

function Gradient({
  children,
  isActive = false,
  activeColors,
  notActiveColors,
  start,
  end,
  testID,
  style,
  ...restProps
}: Props) {
  return (
    <LinearGradient
      {...restProps}
      colors={isActive ? activeColors : notActiveColors}
      start={start ? start : { x: 0.0, y: 0.0 }}
      end={end ? end : { x: 1.0, y: 1.0 }}
      style={style ? style : styles.cardGradient}
      testID={testID ? testID : 'gradient-test-id'}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardGradient: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 10,
  },
});

export default Gradient;
