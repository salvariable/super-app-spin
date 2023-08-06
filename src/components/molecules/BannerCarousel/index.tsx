import React from 'react';
import BaseBannerCarousel from './BaseBannerCarousel';
import DefaultBannerCarousel from './DefaultBannerCarousel';

import type { BannerCarouselProps } from './types';

function BannerCarousel(props: BannerCarouselProps) {
  const { variant } = props;

  switch (variant) {
    case 'default':
      return <DefaultBannerCarousel {...props} />;
    default:
      return <BaseBannerCarousel {...props} />;
  }
}

export default BannerCarousel;
