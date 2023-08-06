import React from 'react';
import { StyleSheet } from 'react-native';
import BaseButton from './BaseButton';
import useThemedStyles from '../../../hooks/useThemedStyles';
import useTheme from '../../../hooks/useTheme';
import type { ThemeContextType } from '../../../theme/types';
import type { BaseButtonProps } from '../types';
import { LARGE_SIZE, SMALL_SIZE } from '../Constants';

// DEPRECATED
function InvertedPrimaryButton(props: BaseButtonProps) {
  const themedStyle = useThemedStyles(styles);
  const theme = useTheme();

  return (
    <BaseButton
      {...props}
      defaultStyle={themedStyle.button}
      defaultTextStyle={themedStyle.text}
      name={'invertedPrimaryButton'}
      style={{ height: props.size === 'small' ? SMALL_SIZE : LARGE_SIZE }}
      loaderColor={theme.colors.ui_active}
    />
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors.inverse_content_primary,
      borderColor: theme.colors.inverse_content_primary,
      borderRadius: 12,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      paddingRight: 32,
      paddingLeft: 32,
    },
    text: {
      color: theme.colors.ui_active,
      textAlign: 'center',
    },
  });

export default InvertedPrimaryButton;
