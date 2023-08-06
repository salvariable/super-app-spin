import type { ImageURISource } from 'react-native';

export interface Banner {
  id: number;
  title: string;
  image: ImageURISource;
  onPress: () => void;
}

export interface BannerProps {
  banner: Banner;
  bannerWidth: number;
  borderRadius: number;
  /* Enable shadow in container of banners */
  enableShadow?: boolean;
}

export interface BannerCarouselProps {
  /** If not passed, renders default */
  variant?: 'default';
  banners: Banner[];
  interSpacing?: number;
  horizontalMargin?: number;
  isAutoplay?: boolean;
  movingTime?: number;
  bannerWidth?: number | `${number}%`;
  withStepper?: boolean;
  stepperPosition?: 'left' | 'center' | 'right';
  borderRadius?: number;
  /* Enable shadow in container of banners */
  enableShadow?: boolean;
}
