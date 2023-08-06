import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Text from '../../../components/Text/Text';
import type { ChipProps } from './types';

const MIN_OPACITY = 0.6;
const MAX_OPACITY = 1;
const BORDER_WIDTH = 1;
const WITHOUT_BORDER_WIDTH = 0;

function BaseChip({
  text,
  testID,
  onPress,
  disabled,
  style,
  textStyle,
  selected = false,
  backgroundColor,
  borderColor,
  leftIcon,
}: ChipProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress && onPress()}
      activeOpacity={0.8}
      style={{
        ...customStyle.containerChip,
        ...(style as object),
      }}
      testID={testID}
    >
      <View
        testID={`${testID}-content`}
        style={{
          ...customStyle.contentChip,
          borderColor,
          backgroundColor,
          borderWidth: borderColor ? BORDER_WIDTH : WITHOUT_BORDER_WIDTH,
          opacity: selected ? MIN_OPACITY : MAX_OPACITY,
        }}
      >
        {leftIcon && (
          <Image
            resizeMode="contain"
            style={customStyle.imageContainer}
            source={leftIcon}
          />
        )}
        <Text
          variant="overline"
          numberOfLines={1}
          style={{ ...(textStyle as object) }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const customStyle = StyleSheet.create({
  contentChip: {
    flex: 1,
    height: 35,
    minHeight: 35,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  imageContainer: {
    height: 15,
    marginRight: 5,
  },
  containerChip: {
    height: 35,
    minHeight: 35,
    padding: 2,
  },
});

export default BaseChip;
