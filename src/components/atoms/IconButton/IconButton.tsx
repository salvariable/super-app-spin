import React from 'react';
import { Pressable, StyleSheet, TextStyle } from 'react-native';
import type { StyleProp } from 'react-native';
import type { ThemeContextType } from '../../../theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';
import Icon, { IconName } from '../Icon/Icon';

interface IconButtonProps {
  iconOnPress?: () => void;
  iconTestId?: string;
  disabled?: boolean;
  stroke?: boolean;
  small?: boolean;
  iconName?: IconName;
  iconTypographyStyle?: StyleProp<TextStyle>;
}

function IconButton({
  iconOnPress,
  iconTestId,
  disabled,
  stroke,
  iconName,
  iconTypographyStyle,
}: IconButtonProps) {
  const themedStyle = useThemedStyles(styles);
  return (
    <Pressable
      android_ripple={{ color: '#ccc', borderless: true, radius: 0 }}
      onPress={() => iconOnPress && iconOnPress()}
      testID={iconTestId ? iconTestId : 'iconTestId'}
      style={({ pressed }) => [
        themedStyle.container,
        pressed && themedStyle.isPressed,
        disabled && themedStyle.disabledButton,
        stroke && themedStyle.stroked,
        pressed && stroke && themedStyle.pressedStroked,
      ]}
      disabled={disabled}
    >
      {iconName && (
        <Icon name={iconName} iconTypographyStyle={iconTypographyStyle} />
      )}
    </Pressable>
  );
}
const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 48,
      height: 48,
      justifyContent: 'center',
    },
    isPressed: {
      backgroundColor: theme.colors.surface_secondary,
      borderRadius: 8,
    },
    disabledButton: {
      opacity: 0.5,
    },
    stroked: {
      borderWidth: 1,
      borderColor: theme.colors.ui_active,
      borderRadius: 12,
    },
    pressedStroked: {
      backgroundColor: theme.colors.surface_informational,
    },
  });

export default IconButton;
