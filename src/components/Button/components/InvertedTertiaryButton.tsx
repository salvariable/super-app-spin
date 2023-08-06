import React from 'react';
import { StyleSheet } from 'react-native';
import BaseButton from './BaseButton';
import useThemedStyles from '../../../hooks/useThemedStyles';
import useTheme from '../../../hooks/useTheme';
import type { ThemeContextType } from '../../../theme/types';
import type { BaseButtonProps } from '../types';
import { LARGE_SIZE, SMALL_SIZE } from '../Constants';

// DEPRECATED
function InvertedTertiaryButton(props: BaseButtonProps) {
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
      testID="inverted-tertiary"
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
      paddingRight: 32,
      paddingLeft: 32,
    },
    text: {
      color: theme.colors.surface_primary,
      textAlign: 'center',
    },
    disabledButton: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      opacity: 0.5,
    },
  });

export default InvertedTertiaryButton;
