import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Platform,
  ViewStyle,
  ColorValue,
} from 'react-native';
import type { ElevationIOS } from '../types';

const SHADOW_COLOR_DEFAULT_IOS = '#8b949e';
const SHADOW_COLOR_DEFAULT_ANDROID = '#020202';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  shadowColor?: ColorValue | undefined;
  onPress?: () => void;
  /**
   * elevationIOS is a prop that is only used on iOS.
   * This prop accept width and height properties.
   **/
  elevationIOS?: ElevationIOS;
  testID?: string;
}

function BaseCard({
  children,
  style,
  shadowColor,
  elevationIOS,
  contentStyle,
  onPress,
  testID,
}: Props) {
  return (
    <TouchableWithoutFeedback testID={testID} onPress={onPress}>
      <View
        style={[
          customStyle.card,
          Platform.select({
            ios: {
              ...customStyle.shadowIOS,
              shadowColor: shadowColor ? shadowColor : SHADOW_COLOR_DEFAULT_IOS,
              shadowOffset: {
                width: elevationIOS?.width ? elevationIOS.width : 0,
                height: elevationIOS?.height ? elevationIOS.height : 2,
              },
            },
          }),
          Platform.select({
            android: {
              ...customStyle.shadowAndroid,
              shadowColor: shadowColor
                ? shadowColor
                : SHADOW_COLOR_DEFAULT_ANDROID,
            },
          }),
          style,
        ]}
      >
        <View
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
              height: style?.height ? '100%' : undefined,
              width: style?.width ? '100%' : undefined,
            },
            { ...(contentStyle as object) },
          ]}
        >
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const customStyle = StyleSheet.create({
  card: {
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  shadowIOS: {
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  shadowAndroid: {
    elevation: 3,
  },
});

export default BaseCard;
