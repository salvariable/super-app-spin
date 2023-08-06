import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import BaseButton from './BaseButton';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../../theme/types';
import useTheme from '../../../hooks/useTheme';
import type { BaseButtonProps } from '../types';
import { LARGE_SIZE, SMALL_SIZE } from '../Constants';

function PrimaryButton(props: BaseButtonProps) {
  const themedStyle = useThemedStyles(styles);
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <BaseButton
        {...props}
        defaultStyle={
          props.inverted ? themedStyle.invertedButton : themedStyle.button
        }
        defaultTextStyle={
          props.inverted ? themedStyle.invertedText : themedStyle.text
        }
        disabledStyle={
          props.inverted
            ? themedStyle.invertedDisabled
            : themedStyle.disabledButton
        }
        loaderColor={
          props.inverted ? theme.colors.ui_active : theme.colors.surface_primary
        }
        style={{ height: props.size === 'small' ? SMALL_SIZE : LARGE_SIZE }}
      />
    </TouchableOpacity>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    button: {
      height: 48,
      justifyContent: 'center',
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: theme.colors.ui_active,
      paddingRight: 32,
      paddingLeft: 32,
    },
    text: {
      color: 'white',
      textAlign: 'center',
    },
    invertedButton: {
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
    invertedText: {
      color: theme.colors.ui_active,
      textAlign: 'center',
    },
    disabledButton: {
      opacity: 0.4,
    },
    invertedDisabledButton: {
      opacity: 0.4,
    },
  });

export default PrimaryButton;
