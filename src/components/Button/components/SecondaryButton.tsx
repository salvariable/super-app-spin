import React from 'react';
import { StyleSheet } from 'react-native';
import BaseButton from './BaseButton';
import useThemedStyles from '../../../hooks/useThemedStyles';
import useTheme from '../../../hooks/useTheme';
import type { ThemeContextType } from '../../../theme/types';
import type { BaseButtonProps } from '../types';
import { LARGE_SIZE, SMALL_SIZE } from '../Constants';

function SecondaryButton(props: BaseButtonProps) {
  const themedStyle = useThemedStyles(styles);
  const theme = useTheme();
  const { inverted, size } = props;

  return (
    <BaseButton
      pressedContainerStyles={
        !inverted
          ? themedStyle.pressedContainerStyles
          : themedStyle.pressedInvertedContainerStyles
      }
      {...props}
      defaultStyle={
        inverted ? themedStyle.invertedButton : themedStyle.defaultButton
      }
      defaultTextStyle={
        inverted ? themedStyle.invertedText : themedStyle.defaultText
      }
      name={'secondaryButton'}
      disabledStyle={themedStyle.disabledButton}
      style={{ height: size === 'small' ? SMALL_SIZE : LARGE_SIZE }}
      loaderColor={
        inverted ? theme.colors.surface_primary : theme.colors.ui_active
      }
    />
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    defaultButton: {
      backgroundColor: 'transparent',
      borderRadius: 12,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
      borderColor: theme.colors.ui_active,
    },
    invertedButton: {
      backgroundColor: 'transparent',
      borderRadius: 12,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
      borderColor: theme.colors.surface_primary,
    },

    defaultText: {
      textAlign: 'center',
      color: theme.colors.ui_active,
    },
    invertedText: {
      textAlign: 'center',
      color: theme.colors.surface_primary,
    },
    disabledButton: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.colors.ui_active,
    },
    pressedContainerStyles: {
      backgroundColor: theme.colors.surface_informational,
      borderColor: theme.colors.ui_active,
      opacity: 1,
    },
    pressedInvertedContainerStyles: {
      backgroundColor: theme.colors.inverse_surface_secondary,
      borderColor: theme.colors.surface_primary,
      opacity: 1,
    },
  });

export default SecondaryButton;
