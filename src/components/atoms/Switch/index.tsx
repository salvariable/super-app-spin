import React, { FC, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import type { ThemeContextType } from '../../../theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';
import { Text } from '../../../index';

interface Props {
  initVal?: boolean;
  inverted?: boolean;
  label?: string;
  onToggle: (val: boolean) => void;
  style?: ViewStyle;
  testID?: string;
  disabled?: boolean;
}
/**
 * index Component
 *
 * @returns {React.ReactElement} index.
 */
const Switch: FC<Props> = ({
  initVal = false,
  inverted = false,
  label = '',
  onToggle = () => null,
  style,
  disabled = false,
}): JSX.Element => {
  const inverseKey = inverted ? 'inverse_' : '';
  const [isOn, setIsOn] = useState<boolean>(initVal);
  const anim = useRef(new Animated.Value(0)).current;
  const { styles, colors } = useStyles(inverted, disabled);

  useEffect(() => {
    Animated.timing(anim, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      easing: Easing.back(0.5),
      useNativeDriver: false,
    }).start();
  }, [isOn, anim]);

  const translateX = {
    transform: [
      {
        translateX: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [3, 21],
        }),
      },
    ],
  };

  const backgroundColor = {
    backgroundColor: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [
        colors[`${inverseKey}surface_tertiary`],
        colors[`${inverseKey}ui_active`],
      ],
    }),
  };

  const handleOnToggle = () => {
    setIsOn((prev) => !prev);
    onToggle(!isOn);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={handleOnToggle}
        activeOpacity={0.7}
        disabled={disabled}
        style={styles.switchBtn}
      >
        <Animated.View style={[styles.switchWrap, backgroundColor]}>
          <Animated.View style={[styles.switch, translateX]} />
        </Animated.View>

        {label ? <Text style={styles.label}>{label}</Text> : null}
      </TouchableOpacity>
    </View>
  );
};

const useStyles = (inverted: boolean, disabled: boolean) =>
  useThemedStyles(({ colors }: ThemeContextType) => {
    const styles = StyleSheet.create({
      container: {
        flexWrap: 'wrap',
        opacity: disabled ? 0.5 : 1,
      },
      switchBtn: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      switchWrap: {
        width: 48,
        height: 28,
        borderRadius: 20,
        justifyContent: 'center',
      },
      switch: {
        width: 24,
        height: 24,
        borderRadius: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      },
      label: {
        marginLeft: 14,
        color: inverted
          ? colors.inverse_content_primary
          : colors.content_primary,
      },
    });
    return { styles, colors };
  });

export default Switch;
