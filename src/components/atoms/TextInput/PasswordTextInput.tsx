import React, { forwardRef, useState } from 'react';
import type { TextInput } from 'react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import BaseTextInput from './BaseTextInput';
import type { BaseTextInputProps } from './types';
import Icon from '../Icon/Icon';

const PasswordTextInput = forwardRef<TextInput, BaseTextInputProps>(
  (props, ref) => {
    const { pattern, onChangeText, onValidation } = props;
    const [secureInput, setSecureInput] = useState(true);

    const handleValidation = (text: string) => {
      if (!pattern) return [true];

      if (typeof pattern === 'string') {
        const condition = new RegExp(pattern, 'g');
        const isValid = condition.test(text);

        return [isValid];
      }

      if (Array.isArray(pattern)) {
        const conditions = pattern.map((rule: string) => new RegExp(rule, 'g'));
        return conditions.map((condition: RegExp) => condition.test(text));
      }

      return [false];
    };

    function onChange(value: string) {
      const isValid = handleValidation(value);
      onChangeText && onChangeText(value);
      onValidation && onValidation(isValid);
    }

    return (
      <View testID="PasswordInput">
        <BaseTextInput
          ref={ref}
          {...props}
          onChangeText={onChange}
          rightSection={
            <TouchableOpacity
              accessibilityRole="button"
              testID="buttonSecureInput"
              onPress={() => {
                setSecureInput((prev) => !prev);
              }}
            >
              <Icon
                testID="PasswordIcon"
                name={`${secureInput ? 'icon-hidden' : 'icon-visible'}`}
                iconTypographyStyle={[
                  styles.icon,
                  secureInput && styles.iconHidden,
                ]}
              />
            </TouchableOpacity>
          }
          secureInput={secureInput}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  iconHidden: {
    opacity: 0.5,
  },
});

PasswordTextInput.displayName = 'Theme-password-text-input';

export default PasswordTextInput;
