import React, { FC, ReactElement, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import useThemedStyles from '../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../theme/types';

interface Props {
  isActive?: boolean;
}

/**
 * Cursor Component
 *
 * @returns {React.ReactElement} Cursor.
 */
const Cursor: FC<Props> = ({ isActive = false }): ReactElement => {
  const styles = useThemedStyles(themedStyle);
  const value = useSharedValue(0);

  useEffect(() => {
    if (isActive) {
      value.value = withRepeat(
        withTiming(1, {
          duration: 500,
        }),
        -1,
        true,
      );
    } else {
      value.value = 0;
    }
  }, [isActive, value]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: value.value,
    };
  });

  return <Animated.View style={[styles.cursor, animatedStyles]} />;
};

const themedStyle = (theme: ThemeContextType) => ({
  ...theme,
  ...StyleSheet.create({
    cursor: {
      width: 2,
      height: 50,
      position: 'absolute',
      backgroundColor: theme.colors.ui_active,
      opacity: 0,
    },
  }),
});
export default Cursor;
