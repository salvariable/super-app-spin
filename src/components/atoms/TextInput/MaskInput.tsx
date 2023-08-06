import React, { forwardRef } from 'react';
import { View } from 'react-native';
import type { TextInput } from 'react-native';
import BaseTextInput from './BaseTextInput';
import type { BaseTextInputProps, MaskInputVariant } from './types';

const DEFAULT_PHONE_MASK = '+xx xxx xxx xxxx';

interface MaskProps {
  maskType?: keyof typeof MaskInputVariant;
  phoneMaskSchema?: string;
}

type MaskInputProps = BaseTextInputProps & MaskProps;

const MaskInput = forwardRef<TextInput, MaskInputProps>((props, ref) => {
  const inputCardMask = (value: string) => {
    let newCardNumber = value.replaceAll(' ', '');
    const cardArray = newCardNumber.split(/(.{4})/).filter((O) => O);

    if (cardArray) {
      newCardNumber = cardArray.join(' ');
    }
    return newCardNumber;
  };

  const applyMask = (mask: string, value: string) => {
    const cleanValue = value.replace(/\D/g, '');
    let result = '';
    let index = 0;

    for (const char of mask) {
      if (index < cleanValue.length) {
        if (char === 'x') {
          result += cleanValue[index];
          index += 1;
        } else {
          result += char;
        }
      }
    }

    return result;
  };

  const inputPhoneMask = (value: string) => {
    const schema = props.phoneMaskSchema || DEFAULT_PHONE_MASK;
    return applyMask(schema, value);
  };

  const inputMask = (value: string) => {
    switch (props.maskType) {
      case 'payment':
        return inputCardMask(value);
      case 'phone':
        return inputPhoneMask(value);
      default:
        return value;
    }
  };

  return (
    <View testID="MaskInput">
      <BaseTextInput
        ref={ref}
        {...props}
        value={inputMask(props.value)}
        numericInput
      />
    </View>
  );
});

MaskInput.displayName = 'Theme-mask-text-input';

export default MaskInput;
