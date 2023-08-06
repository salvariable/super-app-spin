import React from 'react';
import BaseBanner from './BaseBanner';
import DefaultBanner from './DefaultBanner';

import type { BannerProps } from './types';

function Banner(props: BannerProps) {
  const { variant } = props;
  switch (variant) {
    case 'default':
      return <DefaultBanner {...props} />;
    default:
      return <BaseBanner {...props} />;
  }
}

export default Banner;
