import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextStyle,
  TextProps,
} from 'react-native';
import { fontConfig } from '../../styles/spinplus/Typography';
import type { TextVariant } from '../types';
import useThemedStyles from '../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../theme/types';

interface CustomTextProps {
  style?: StyleProp<TextStyle>;
  variant?: keyof typeof TextVariant;
  testID?: string;
  children: React.ReactNode;
}

type Props = TextProps & CustomTextProps;

const Text: React.FC<Props> = (props) => {
  const themedStyle = useThemedStyles(customStyle);
  return (
    <RNText
      allowFontScaling={false}
      {...props}
      style={[
        { ...themedStyle.textStyle },
        fontConfig[props?.variant ?? 'default'],
        props.style,
      ]}
      testID={props.testID}
    >
      {props.children}
    </RNText>
  );
};

const customStyle = (theme: ThemeContextType) =>
  StyleSheet.create({
    textStyle: {
      color: theme.colors.content_primary,
    },
  });

export default Text;
