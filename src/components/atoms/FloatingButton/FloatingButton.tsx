import React from 'react';
import { Pressable, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Text from '../../Text/Text';
import type { StyleProp } from 'react-native';
import type { ThemeContextType } from '../../../theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';
import Icon, { IconName } from '../Icon/Icon';

interface FloatingButtonProps {
  onPress?: () => void;
  testId?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  text?: string;
  strokeColor?: string;
  loading?: boolean;
  iconName: IconName;
  iconTypographyStyle?: StyleProp<TextStyle>;
}

function FloatingButton({
  onPress,
  testId,
  style,
  disabled,
  text,
  strokeColor,
  loading,
  iconName,
  iconTypographyStyle,
}: FloatingButtonProps) {
  const themedStyle = useThemedStyles(styles);

  return (
    <Pressable
      android_ripple={{
        color: '#ccc',
        borderless: true,
        radius: 0,
      }}
      onPress={() => onPress && onPress()}
      testID={testId ? testId : 'iconTestId'}
      style={({ pressed }) => [
        themedStyle.container,
        pressed && themedStyle.isPressed,
        disabled && themedStyle.disabledButton,
        text || themedStyle.onlyIcon,
        strokeColor && themedStyle.stroked,
        style,
      ]}
      disabled={disabled}
    >
      {loading ? (
        <Icon name="icon-loader" />
      ) : (
        <Icon name={iconName} iconTypographyStyle={iconTypographyStyle} />
      )}

      {text && (
        <Text style={themedStyle.text} variant="label-small-bold">
          {text}
        </Text>
      )}
    </Pressable>
  );
}
const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      height: 48,
      backgroundColor: 'white',
      elevation: 2,
      padding: 16,
      shadowOffset: { width: 0, height: 2 },
      borderRadius: 24,
      shadowRadius: 2.5,
      shadowOpacity: 0.2,
    },
    isPressed: {
      backgroundColor: theme.colors.surface_secondary,
    },
    disabledButton: {
      opacity: 0.5,
    },
    onlyIcon: {
      width: 48,
    },
    text: {
      paddingLeft: 8,
    },
    stroked: {
      padding: 15,
    },
  });

export default FloatingButton;
