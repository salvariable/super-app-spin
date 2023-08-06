import React from 'react';
import { StyleSheet } from 'react-native';
import BaseButton from './BaseButton';
import useThemedStyles from '../../../hooks/useThemedStyles';
import useTheme from '../../../hooks/useTheme';
import type { ThemeContextType } from '../../../theme/types';
import type { BaseButtonProps } from '../types';
import { LARGE_SIZE, SMALL_SIZE } from '../Constants';

// DEPRECATED
function InvertedSecondaryButton(props: BaseButtonProps) {
  const themedStyle = useThemedStyles(styles);
  const theme = useTheme();

  return (
    <BaseButton
      {...props}
      defaultStyle={themedStyle.button}
      defaultTextStyle={themedStyle.text}
      disabledStyle={themedStyle.disabledButton}
      style={{ height: props.size === 'small' ? SMALL_SIZE : LARGE_SIZE }}
      loaderColor={theme.colors.surface_primary}
    />
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      borderRadius: 12,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.colors.surface_primary,
      justifyContent: 'center',
      paddingRight: 32,
      paddingLeft: 32,
    },
    text: {
      color: theme.colors.surface_primary,
      textAlign: 'center',
    },
    disabledButton: {
      backgroundColor: 'transparent',
      borderColor: theme.colors.surface_primary,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      opacity: 0.5,
    },
  });

export default InvertedSecondaryButton;
