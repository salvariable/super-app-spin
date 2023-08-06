import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import type { ThemeContextType } from '../../../theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';
import { Text } from '../../../index';

interface Props {
  max?: number;
  min?: number;
  variant?: keyof typeof QuantitySelectorVariant;
  stepperContainerStyle?: object;
  selectorStyle?: object;
  disabledSelectorStyle?: object;
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
}

enum QuantitySelectorVariant {
  default = 'default',
  bordered = 'bordered',
}

/**
 * Stepper Component
 *
 * @returns {React.ReactElement} index.
 */
const Stepper: FC<Props> = ({
  max = 10,
  min = 0,
  variant = QuantitySelectorVariant.default,
  stepperContainerStyle,
  selectorStyle,
  disabledSelectorStyle,
  onDecrement,
  onIncrement,
  value,
}): JSX.Element => {
  const styles = useThemedStyles(compStyles);
  const isBordered = variant === QuantitySelectorVariant.bordered;
  const isMin = value === min;
  const isMax = value === max;

  return (
    <View
      style={[
        styles.container,
        isBordered && styles.container_bordered,
        stepperContainerStyle,
      ]}
    >
      <TouchableOpacity
        style={styles.btn}
        onPress={() => !isMin && onDecrement()}
        disabled={value === min}
      >
        <Text style={[styles.btnTxt, value === min && styles.disabled]}>-</Text>
      </TouchableOpacity>

      <Text style={styles.value}>{value}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => !isMax && onIncrement()}
        disabled={value === max}
      >
        <Text
          style={[
            styles.btnTxt,
            selectorStyle,
            value === max && styles.disabled,
            disabledSelectorStyle,
          ]}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const compStyles = ({ colors }: ThemeContextType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: 40,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    container_bordered: {
      borderColor: colors.ui_active,
      borderWidth: 1,
      borderRadius: 8,
    },
    btn: {
      width: 40,
      height: 40,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnTxt: {
      fontSize: 24,
      fontWeight: '400',
      color: colors.ui_active,
    },
    value: {
      fontSize: 16,
      fontWeight: '600',
      width: 40,
      textAlign: 'center',
    },
    disabled: {
      opacity: 0.3,
    },
  });

export default Stepper;
