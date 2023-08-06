import React from 'react';
import { BaseButtonProps, ButtonVariant } from './types';
import HyperlinkButton from './components/HyperlinkButton';
import InvertedPrimaryButton from './components/InvertedPrimaryButton';
import InvertedSecondaryButton from './components/InvertedSecondaryButton';
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';
import TertiaryButton from './components/TertiaryButton';
import InvertedTertiaryButton from './components/InvertedTertiaryButton';
import TextOnlyButton from './components/TextOnlyButton';

interface Props {
  variant?: keyof typeof ButtonVariant;
}

type ButtonProps = Omit<BaseButtonProps, 'defaultTextStyle' | 'defaultStyle'> &
  Props;

function isButtonValid(value: string) {
  return Object.values(ButtonVariant).includes(value);
}

function Button({
  disabled = false,
  inverted = false,
  iconName,
  iconStyle,
  loading,
  onPress,
  size,
  style,
  styleText,
  testID,
  text,
  variant = 'primary',
}: ButtonProps) {
  if (!isButtonValid(variant)) {
    throw new Error(
      `Unknown '${variant}'. Please only use ${Object.values(ButtonVariant)
        .map((value) => (typeof value === 'string' ? value : null))
        .filter((value) => value)}.`,
    );
  }

  const props = {
    disabled,
    inverted,
    iconName,
    iconStyle,
    loading,
    onPress,
    size,
    style,
    styleText,
    testID,
    text,
    variant,
  };

  switch (variant) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'text-only':
      return <TextOnlyButton {...props} />;
    case 'tertiary': // DEPRECATED
      return <TertiaryButton {...props} />;
    case 'hyperlink': // DEPRECATED
      return <HyperlinkButton {...props} />;
    case 'inverted-primary': // DEPRECATED
      return <InvertedPrimaryButton {...props} />;
    case 'inverted-secondary': // DEPRECATED
      return <InvertedSecondaryButton {...props} />;
    case 'inverted-tertiary': // DEPRECATED
      return <InvertedTertiaryButton {...props} />;
    default:
      return <PrimaryButton {...props} />;
  }
}

export default Button;
