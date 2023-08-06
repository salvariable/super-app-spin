import React from 'react';
import BaseBannerCarousel from './BaseBannerCarousel';
import type { BannerCarouselProps } from './types';

const DefaultBannerCarousel = (props: BannerCarouselProps) => {
  return <BaseBannerCarousel {...props} />;
};

export default DefaultBannerCarousel;
