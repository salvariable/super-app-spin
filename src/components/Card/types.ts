import type {
  ViewStyle,
  ColorValue,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import type { TextVariant } from '../types';
import type { IconName } from '../atoms/Icon/Icon';

export enum CardVariant {
  'default',
  'content-inline',
  'content-image-inline',
  'content-stacked',
  'quick-action',
  'content-image',
  'promotion-card',
  'content-icon',
  'home-card',
}

export interface ElevationIOS {
  width?: number;
  height: number;
}

export interface BaseCardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: ImageSourcePropType;
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
  tagText?: string;
  icon?: JSX.Element;
  /** Styles of a container icon just in Content in line card */
  iconContainerStyles?: ViewStyle;
  /*Left Icon from typography */
  leftIconName?: IconName;
  /*Styles of left icon from typography */
  leftIconTypographyStyle?: StyleProp<TextStyle>;
  /*Right Icon from typography */
  rightIconName?: IconName;
  /*Styles of right icon from typography */
  rightIconTypographyStyle?: StyleProp<TextStyle>;
  /* Font title custom, if you want*/
  fontTitle?: keyof typeof TextVariant;
}

export interface PromotionCardProps {
  roundedImage?: ImageSourcePropType;
  rectangleImage?: ImageSourcePropType;
  price?: string;
  priceWithDiscount?: string;
  percentDiscount?: string;
  footerText?: string;
  withButton?: boolean;
  tagHeader?: string;
  buttonTitleActive?: string;
  buttonTitleDeactive?: string;
  buttonIconName?: IconName;
  descriptionTitle?: string;
  isActiveCoupon?: boolean;
  buttonOnPress?: () => void;
}

export interface HomeCardProps {
  tagLabel?: string;
  cardTitle?: string;
  cardSubtitle?: string;
  imageHomeCard?: ImageSourcePropType;
  tagHomeCardText?: string;
  imageHomeCardStyles?: ImageStyle;
  iconHomeCard?: JSX.Element;
}

export interface ContentStackedProps {
  titleSize?: 'small' | 'default' | 'extra-small';
}
