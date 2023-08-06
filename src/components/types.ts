import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ColorValue,
} from 'react-native';
import type { BaseButtonProps } from './Button/types';
import type { IconName } from './atoms/Icon/Icon';

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
  'caption-regular',
  'caption-medium',
  'overline',
  'text-link-one',
  'text-link-two',
  'jumbo-one',
  'jumbo-two',
  'title-one-semibold',
  'title-two-semibold',
  'subtitle-semibold',
  // updated variants, please use this version
  'headline-extra-large',
  'headline-large',
  'headline-medium',
  'headline-small',
  'default-body',
  'small-body',
  'extra-small-body',
  'default-body-bold',
  'small-body-bold',
  'extra-small-body-bold',
  'text-link-default',
  'text-link-small',
  'text-link-extra-small',
  'label-default',
  'label-default-bold',
  'label-small',
  'label-small-bold',
  'label-extra-small',
  'label-extra-small-bold',
  'icon-font',
}

export enum TextInputVariant {
  'default',
  'numeric',
  'password',
  'mask',
}

export enum MaskInputVariant {
  'payment',
}
export interface BaseTextInputProps {
  style?: StyleProp<ViewStyle>;
  testID?: string;
  placeHolder: string;
  error?: string;
  numericInput?: boolean;
  secureInput?: boolean;
  value: string;
  maxLength?: number;
  mainComponentId?: string;
  onChangeText: (text: string) => void;
  onEditFinish?: () => void;
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

export interface BaseModalProps {
  title: string;
  subtitle?: string;
  visible: boolean;
  onCallbackClose: () => void;
  testID?: string;
  children?: React.ReactNode;
  description?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  defaultStyle?: StyleProp<ViewStyle>;
  defaultTitleStyle?: StyleProp<TextStyle>;
  defaultDescriptionStyle?: StyleProp<TextStyle>;
  firstButtonProps?: BaseButtonProps & { enableCloseOnPress?: boolean };
  secondButtonProps?: BaseButtonProps & { enableCloseOnPress?: boolean };
  onClose?: () => void;
  showCloseBtn?: boolean;
  newChildren?: React.ReactNode;
}

export enum ModalVariant {
  'default',
  'one-button',
  'two-button',
  'content',
}

export type ModalProps = Omit<
  BaseModalProps,
  'onCallbackClose' | 'children' | 'visible'
> & {
  variant?: keyof typeof ModalVariant;
};

export type { DatePickerProps } from '../components/DatePicker/types';

export enum NavBarVariant {
  'default',
  'primary',
}
export interface NavbarProps {
  variant: keyof typeof NavBarVariant;
  testID?: string;
  leftSection?: JSX.Element;
  iconOnPress?: () => void;
  navBarTestId?: string;
  iconPath?: string;
  iconTestId?: string;
  iconStyle?: StyleProp<ImageStyle>;
  navBarStyle?: StyleProp<ViewStyle>;
  title?: string;
  children?: JSX.Element;
}

export enum DefaultNavBarVariants {
  'home-page',
  'main-page',
  'secondary-page',
  'default',
}

export interface DefaultNavBarProps {
  testID?: string;
  iconOnPress?: () => void;
  iconPath?: string;
  iconTestId?: string;
  iconStyle?: StyleProp<ImageStyle>;
  navBarStyle?: StyleProp<ViewStyle>;
  navBarTestId?: string;
  title?: string;
  children?: JSX.Element;
  /* New navbar variants **/
  navbarDefaultVariant?: keyof typeof DefaultNavBarVariants;
  leftIconName?: IconName;
  rightIconName?: IconName;
  leftIconFn?: () => void;
  rightIconFn?: () => void;
  statusBarColor?: ColorValue | undefined;
  safeAreaContainerStyle?: StyleProp<ViewStyle>;
  colorTitleStyle?: ColorValue | undefined;
  iconTypographyStyle?: StyleProp<TextStyle>;
  chevronIconStyle?: StyleProp<TextStyle>;
  renderBadge?: boolean;
  customPressableAreaStyle?: StyleProp<ViewStyle>;
}
