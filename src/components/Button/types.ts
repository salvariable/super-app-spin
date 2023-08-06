import type {
  PressableAndroidRippleConfig,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { IconName } from '../atoms/Icon/Icon';

export enum ButtonVariant {
  'primary',
  'secondary',
  'text-only',
  'hyperlink', // DEPRECATED
  'inverted-primary', // DEPRECATED
  'inverted-secondary', // DEPRECATED
  'tertiary', // DEPRECATED
  'inverted-tertiary', // DEPRECATED
}

export interface BaseButtonProps {
  defaultStyle?: StyleProp<ViewStyle>;
  defaultTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  inverted?: boolean;
  iconName?: IconName;
  iconStyle?: StyleProp<TextStyle>;
  loaderColor?: string;
  loaderSize?: number | 'small' | 'large' | undefined;
  loading?: boolean;
  name?: string;
  onPress: () => void;
  opacity?: number;
  size?: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  testID?: string;
  text: string;
  android_ripple?: PressableAndroidRippleConfig;
  pressedContainerStyles?: StyleProp<ViewStyle>;
  pressedTextStyles?: StyleProp<TextStyle>;
}
