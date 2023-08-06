import React, { FC, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  ViewStyle,
} from 'react-native';
import Text from '../../Text/Text';
import type { ThemeContextType } from '../../../theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';

interface Props {
  selected?: boolean;
  inverted?: boolean;
  error?: string;
  label?: string;
  onCheck?: () => void;
  style?: ViewStyle;
  testID?: string;
  disabled?: boolean;
}

/**
 * RadioButton Component
 *
 * Radio buttons allow users to select one option from a set. They are a
 * selection control that often appears when users are asked to make decisions
 * or select a choice from options.
 *
 * Show the component props as params:
 *
 *  @param {string} label - The label for the radio button.
 *  @param {boolean} selected - A boolean to handle the checked status.
 *  @param {string} error - A string to set an error on the radio button (a string for a possible feedback to user in the future).
 *  @param {boolean} disabled - A boolean to disabled it
 *  @param {func} onCheck - For toggle the radio button value.
 *  @param {boolean} inverted - A boolean to show the inverted UI variant
 *  @param {Object} style - ViewStyle props to add custom styles to the radio button container
 *  @param {string} testID -
 *
 *
 * @returns {React.ReactElement} RadioButton Component.
 */
const RadioButton: FC<Props> = ({
  selected = false,
  inverted = false,
  error = '',
  label,
  onCheck,
  style,
  disabled = false,
}): JSX.Element => {
  const styles = useStyles(selected, inverted, error, disabled);
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: selected ? 1 : 0,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [selected, scale]);

  const animStyle = { transform: [{ scale }] };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onCheck}
      disabled={disabled}
    >
      <View style={styles.radio}>
        <Animated.View style={[styles.dot, animStyle]} />
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const useStyles = (
  selected: boolean,
  inverted: boolean,
  error: string,
  disabled: boolean,
) =>
  useThemedStyles(({ colors }: ThemeContextType) => {
    const inverseKey = inverted ? 'inverse_' : '';
    const radioBorderColor = selected
      ? colors[`${inverseKey}ui_${error ? 'error' : 'active'}`]
      : colors[`${inverseKey}${error ? 'ui_error' : 'content_tertiary'}`];
    const dotBackgroundColor =
      colors[`${inverseKey}ui_${error ? 'error' : 'active'}`];

    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        opacity: disabled ? 0.5 : 1,
        alignItems: 'center',
      },
      radio: {
        width: 20,
        height: 20,
        borderWidth: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: radioBorderColor,
      },
      dot: {
        width: 10,
        height: 10,
        backgroundColor: dotBackgroundColor,
        borderRadius: 5,
      },
      label: {
        marginLeft: 14,
        flex: 1,
        flexWrap: 'wrap',
        color: inverted
          ? colors.inverse_content_primary
          : colors.content_primary,
      },
    });
  });

export default RadioButton;
