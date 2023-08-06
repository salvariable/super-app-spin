import React from 'react';
import { StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import type { BaseButtonProps } from '../types';
import useThemedStyles from '../../../hooks/useThemedStyles';
import Text from '../../../components/Text/Text';
import Icon from '../../../components/atoms/Icon/Icon';

const ACTIVE_OPACITY = 0.4;

function BaseButton({
  disabled = false,
  text,
  onPress,
  testID,
  style,
  styleText,
  iconName,
  iconStyle,
  loading,
  defaultStyle,
  defaultTextStyle,
  loaderColor,
  loaderSize = 'small',
  android_ripple = { color: '#ccc', borderless: false, radius: 0 },
  pressedContainerStyles,
}: BaseButtonProps) {
  const themedStyle = useThemedStyles(styles);

  return (
    <Pressable
      disabled={disabled}
      testID={testID}
      android_ripple={android_ripple}
      onPress={() => onPress()}
      style={({ pressed }) => [
        {
          ...(defaultStyle as object),
          ...(style as object),
          ...themedStyle.buttonStyle,
          opacity: pressed ? ACTIVE_OPACITY : 1,
        },
        pressed ? pressedContainerStyles : null,
        disabled ? themedStyle.disabledButton : null,
      ]}
    >
      {iconName && (
        <Icon
          testID="button-icon"
          name={iconName}
          iconTypographyStyle={{
            ...themedStyle.leftIcon,
            ...(defaultTextStyle as object),
            ...(iconStyle as object),
          }}
        />
      )}
      {loading ? (
        <ActivityIndicator
          testID="button-activity-indicator"
          color={loaderColor}
          size={loaderSize}
        />
      ) : (
        <>
          <Text
            variant="label-small-bold"
            numberOfLines={1}
            style={[
              themedStyle.text,
              {
                ...(defaultTextStyle as object),
                ...(styleText as object),
              },
            ]}
            testID="button-text"
          >
            {text}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = () =>
  StyleSheet.create({
    disabledButton: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      opacity: 0.4,
    },
    buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: 64,
      minHeight: 40,
    },
    text: {
      letterSpacing: -0.2,
    },
    leftIcon: {
      marginRight: 10,
      fontSize: 16,
    },
  });

export default BaseButton;
