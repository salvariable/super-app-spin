import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from '../../../components/Text/Text';
import type { TagProps } from './types';

interface BaseTagProps {
  textColor: string;
  backgroundColor: string;
}

function BaseTag({
  testID,
  rightIcon,
  leftIcon,
  text,
  textColor,
  backgroundColor,
  size = 'small',
}: TagProps & BaseTagProps) {
  return (
    <View
      testID={testID}
      style={[
        size === 'small' ? customStyle.contentSmall : customStyle.contentLarge,
        customStyle.content,
        { backgroundColor },
      ]}
    >
      {/* TODO: Cambiar por Icon */}
      {leftIcon && (
        <Image
          resizeMode="contain"
          style={[{ tintColor: `${textColor}` }, customStyle.iconLeft]}
          source={leftIcon}
        />
      )}
      {/* TODO: Cambiar por el tipo de fuente label-small-bold, a la espera de la nueva fuente Inter */}
      <Text
        style={[customStyle.text, { color: textColor }]}
        variant={size === 'small' ? 'extra-small-body-bold' : 'small-body-bold'}
        numberOfLines={1}
      >
        {text}
      </Text>
      {/* TODO: Cambiar por Icon */}
      {rightIcon && (
        <Image
          resizeMode="contain"
          style={[{ tintColor: `${textColor}` }, customStyle.iconRight]}
          source={rightIcon}
        />
      )}
    </View>
  );
}

const customStyle = StyleSheet.create({
  contentSmall: {
    height: 20,
  },
  contentLarge: {
    height: 24,
  },
  content: {
    borderRadius: 12,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  },
  iconLeft: {
    height: 16,
    width: 16,
    marginRight: 8.5,
  },
  iconRight: {
    height: 16,
    width: 16,
    marginLeft: 8.5,
  },
});

export default BaseTag;
