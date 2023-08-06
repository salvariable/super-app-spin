import React, { FC, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
  ViewStyle,
} from 'react-native';
import Text from '../../Text/Text';
import type { ThemeContextType } from '../../../theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';

interface Props {
  selected?: boolean;
  error?: string;
  label?: string;
  disabled?: boolean;
  onCheck?: () => void;
  inverted?: boolean;
  style?: ViewStyle;
  testID?: string;
}

/**
 * Checkbox Component
 *
 * Use this selection control when the user
 * needs to select one or more options from a list.
 *
 * Show the component props as params:
 *
 *  @param {string} label - The label for the checkbox.
 *  @param {boolean} selected - A boolean to handle the checked status of the checkbox.
 *  @param {string} error - A string to set an error on the checkbox (a string for a possible feedback to user in the future).
 *  @param {boolean} disabled - A boolean to disabled checkbox
 *  @param {func} onCheck - For toggle the checkbox value.
 *  @param {boolean} inverted - A boolean to show the inverted UI variant
 *  @param {Object} style - ViewStyle props to add custom styles to the checkbox container
 *  @param {string} testID -
 *
 *
 * @returns {React.ReactElement} Checkbox Component.
 */
const Checkbox: FC<Props> = ({
  label,
  selected = false,
  error = '',
  disabled = false,
  onCheck,
  inverted = false,
  style,
  testID,
}): JSX.Element => {
  // const styles = useThemedStyles(compStyles);
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

  // dynamic styles
  const animStyle = { transform: [{ scale }] };

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onCheck}
        activeOpacity={0.7}
        disabled={disabled}
        testID={testID}
      >
        <View>
          <View style={styles.checkbox} testID="check-box" />
          <Animated.View
            style={[styles.checkContainer, animStyle]}
            testID="check-icon"
          >
            <Animated.Image
              source={require('../../../assets/Checkbox/check-icon.png')}
              style={styles.checkIcon}
            />
          </Animated.View>
        </View>

        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
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
    const checkboxColor = selected
      ? colors[`${inverseKey}ui_${error ? 'error' : 'active'}`]
      : colors[`${inverseKey}${error ? 'ui_error' : 'content_tertiary'}`];
    const labelColor = inverted
      ? colors.inverse_content_primary
      : colors.content_primary;

    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        opacity: disabled ? 0.5 : 1,
        alignItems: 'center',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: checkboxColor,
        borderRadius: 5,
      },
      checkContainer: {
        width: 20,
        height: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: checkboxColor,
        position: 'absolute',
      },
      checkIcon: {
        width: 13,
        height: 11,
      },
      label: {
        marginLeft: 14,
        flex: 1,
        flexWrap: 'wrap',
        color: labelColor,
      },
    });
  });
export default Checkbox;
