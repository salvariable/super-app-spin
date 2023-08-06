import type {
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
  ImageStyle,
} from 'react-native';

export interface ElevationIOS {
  width?: number;
  height: number;
}

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

export enum TextVariant {
  'title-one-regular',
  'title-one-medium',
  'title-two-regular',
  'title-two-medium',
  'subtitle',
  'subtitle-medium',
  'content-one-regular',
  'content-one-medium',
  'content-one-semibold',
  'content-two-regular',
  'content-two-medium',
  'caption',
  'caption-medium',
  'overline',
  'text-link-one',
  'text-link-two',
  'jumbo-one',
  'jumbo-two',
  'title-one-semibold',
  'title-two-semibold',
  'subtitle-semibold',
}

interface LoaderProps {
  color: string;
  size: 'small' | 'large';
}

export interface BaseButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  loading?: boolean;
  testID?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  disabled?: boolean;
  defaultStyle?: StyleProp<ViewStyle>;
  defaultTextStyle?: StyleProp<TextStyle>;
  loader?: LoaderProps;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
}

export interface BannerProps {
  image: ImageSourcePropType;
  type: string;
  url: string;
}

export interface Banners {
  id: number;
  title: string;
  banner: BannerProps;
}

export enum DisclaimerVariant {
  'notification',
  'warning',
  'alert',
  'custom',
}

export type BarcodeFormat =
  | 'CODE39'
  | 'CODE128'
  | 'CODE128A'
  | 'CODE128B'
  | 'CODE128C'
  | 'EAN13'
  | 'EAN8'
  | 'EAN5'
  | 'EAN2'
  | 'UPC'
  | 'UPCE'
  | 'ITF14'
  | 'ITF'
  | 'MSI'
  | 'MSI10'
  | 'MSI11'
  | 'MSI1010'
  | 'MSI1110'
  | 'pharmacode'
  | 'codabar';

export enum ProgressBarVariant {
  'default',
  'goalIcon',
}

export interface BaseProgressBarProps {
  percent: { currentStep: number; totalStep: number };
  firstColor?: string;
  secondColor?: string;
  testID?: string;
  iconGoalComponent?: JSX.Element;
  pagination?: boolean;
}
export type ConditionalBaseProgressBarProps =
  | {
      goalIcon?: never;
    }
  | {
      goalIcon: ImageSourcePropType;
    };
