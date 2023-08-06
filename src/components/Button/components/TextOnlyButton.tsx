import React from 'react';
import { StyleSheet } from 'react-native';
import BaseButton from './BaseButton';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../../theme/types';
import type { BaseButtonProps } from '../types';
import { SMALL_SIZE } from '../Constants';

function TextOnlyButton(props: BaseButtonProps) {
  const themedStyle = useThemedStyles(styles);

  return (
    <BaseButton
      {...props}
      defaultStyle={themedStyle.button}
      defaultTextStyle={
        props.inverted ? themedStyle.invertedText : themedStyle.text
      }
      name={'text-only-button'}
      style={{ height: SMALL_SIZE }}
    />
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    text: {
      color: theme.colors.ui_active,
    },
    invertedText: {
      color: theme.colors.inverse_content_primary,
    },
  });

export default TextOnlyButton;
