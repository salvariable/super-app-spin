import React, { forwardRef } from 'react';
import type { TextInput as RNTextInput } from 'react-native';
import {
  BaseTextInputProps,
  TextInputVariant,
  MaskInputVariant,
} from './types';

import BaseTextInput from './BaseTextInput';
import NumericTextInput from './NumericTextInput';
import PasswordTextInput from './PasswordTextInput';
import MaskInput from './MaskInput';
import EmailTextInput from './EmailTextInput';

interface Props {
  variant?: keyof typeof TextInputVariant;
}

interface MaskProps {
  maskType?: keyof typeof MaskInputVariant;
}

type TextInputProps = BaseTextInputProps & Props & MaskProps;

function isTextInputValid(value: string) {
  return Object.values(TextInputVariant).includes(value);
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ variant = 'default', ...restArgs }, ref) => {
    if (!isTextInputValid(variant)) {
      throw new Error(
        `Unknown '${variant}'. Please only use ${Object.values(TextInputVariant)
          .map((value) => (typeof value === 'string' ? value : null))
          .filter((value) => value)}.`,
      );
    }

    if (variant === 'mask' && restArgs.maskType === undefined) {
      throw new Error(
        `When using the variant: '${variant}', you should use maskType.`,
      );
    }

    if (variant !== 'mask' && restArgs.maskType !== undefined) {
      throw new Error(
        `When using the variant: '${variant}', you should NOT use the maskType.`,
      );
    }

    if (restArgs.maskType !== 'phone' && restArgs.phoneMaskSchema) {
      throw new Error(
        `${restArgs.maskType} is incompatible with phoneMaskSchema, use maskType="phone" instead.`,
      );
    }

    const props = {
      variant,
      ...restArgs,
    };

    switch (variant) {
      case 'default':
        return <BaseTextInput ref={ref} {...props} />;
      case 'password':
        return <PasswordTextInput ref={ref} {...props} />;
      case 'numeric':
        return <NumericTextInput ref={ref} {...props} />;
      case 'mask':
        return <MaskInput ref={ref} {...props} />;
      case 'email':
        return <EmailTextInput ref={ref} {...props} />;
      default:
        return <BaseTextInput ref={ref} {...props} />;
    }
  },
);

TextInput.displayName = 'Super-theme-text-input';

export default TextInput;
