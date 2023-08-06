import React from 'react';
import { StyleSheet } from 'react-native';
import BaseButton from './BaseButton';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseButtonProps } from '../types';

// DEPRECATED
function HyperlinkButton(props: BaseButtonProps) {
  const themedStyle = useThemedStyles(styles);

  return (
    <BaseButton
      {...props}
      defaultStyle={themedStyle.button}
      defaultTextStyle={themedStyle.text}
    />
  );
}

const styles = () =>
  StyleSheet.create({
    button: {
      height: 46,
      paddingHorizontal: '2%',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
    },
    text: {
      textAlign: 'center',
    },
  });

export default HyperlinkButton;
