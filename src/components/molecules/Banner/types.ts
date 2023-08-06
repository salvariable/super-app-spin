import type { ImageSourcePropType } from 'react-native';

export interface Banners {
  id: number;
  title: string;
  banner: BannerObjectProps;
}

export interface BannerObjectProps {
  image: ImageSourcePropType;
  type: string;
  url: string;
}

export interface BannerProps {
  banners: Banners[];
  /** If not passed, renders default */
  variant?: 'default';
  containerStyle?: object;
  loading?: boolean;
  withStepper?: boolean;
  space?: number;
  onPress: (banner: Banners) => void;
  onChangeIndex?: (index: number) => void;
  isAutoplay?: boolean;
  movingTime?: number;
  bannerStyle?: object;
  /** Default is device width, use in cases where the banner is narrower/wider */
  bannerWidth?: number;
  /** Default is device width, use in cases where the banner is narrower/wider to calculate translation */
  bannerTranslation?: number;
  stepperContainerStyles?: object;
  imageStyles?: object;
  endSpacing?: number;
}
