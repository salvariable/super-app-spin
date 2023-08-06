import React, { forwardRef } from 'react';
import { View } from 'react-native';
import type { TextInput } from 'react-native';
import BaseTextInput from './BaseTextInput';
import type { BaseTextInputProps } from './types';

const NumericTextInput = forwardRef<TextInput, BaseTextInputProps>(
  (props, ref) => {
    return (
      <View testID="NumericInput">
        <BaseTextInput ref={ref} {...props} numericInput />
      </View>
    );
  },
);

NumericTextInput.displayName = 'Theme-numeric-text-input';

export default NumericTextInput;
