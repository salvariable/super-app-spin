import React from 'react';
import {
  CardVariant,
  BaseCardProps,
  PromotionCardProps,
  HomeCardProps,
  ContentStackedProps,
} from './types';
import BaseCard from './components/BaseCard';
import ContentInLineCard from './components/ContentInLineCard';
import QuickActionCard from './components/QuickActionCard';
import ContentStackedCard from './components/ContentStackedCard';
import ContentImageCard from './components/ContentImageCard';
import PromotionCard from './components/PromotionCard';
import ContentImageInLineCard from './components/ContentImageInLineCard';

import ContentIconCard from './components/ContentIconCard';
import HomeCard from './components/HomeCard';
interface Props {
  variant?: keyof typeof CardVariant;
}

type CardProps = BaseCardProps &
  Props &
  PromotionCardProps &
  HomeCardProps &
  ContentStackedProps;

function isCardVariantValid(value: string) {
  return Object.values(CardVariant).includes(value);
}

function Card({
  variant = 'default',
  title,
  subtitle,
  image,
  children,
  style,
  contentStyle,
  shadowColor,
  onPress,
  elevationIOS,
  testID,
  tagText,
  roundedImage,
  rectangleImage,
  price,
  priceWithDiscount,
  percentDiscount,
  footerText,
  withButton,
  tagHeader,
  buttonTitleActive,
  buttonTitleDeactive,
  buttonIconName,
  descriptionTitle,
  isActiveCoupon,
  buttonOnPress,
  icon,
  iconContainerStyles,
  cardTitle,
  cardSubtitle,
  imageHomeCard,
  tagHomeCardText,
  imageHomeCardStyles,
  iconHomeCard,
  leftIconName,
  leftIconTypographyStyle,
  rightIconName,
  rightIconTypographyStyle,
  fontTitle,
  titleSize = 'default',
}: CardProps) {
  if (!isCardVariantValid(variant)) {
    throw new Error(
      `Unknown '${variant}'. Please only use ${Object.values(CardVariant)
        .map((value) => (typeof value === 'string' ? value : null))
        .filter((value) => value)}.`,
    );
  }

  const props = {
    variant,
    title,
    subtitle,
    image,
    children,
    style,
    contentStyle,
    shadowColor,
    onPress,
    elevationIOS,
    testID,
    tagText,
    roundedImage,
    rectangleImage,
    price,
    priceWithDiscount,
    percentDiscount,
    footerText,
    withButton,
    tagHeader,
    buttonTitleActive,
    buttonTitleDeactive,
    buttonIconName,
    descriptionTitle,
    isActiveCoupon,
    buttonOnPress,
    icon,
    iconContainerStyles,
    leftIconName,
    leftIconTypographyStyle,
    rightIconName,
    rightIconTypographyStyle,
    fontTitle,
  };

  const homeCardProps = {
    cardTitle,
    cardSubtitle,
    imageHomeCard,
    tagHomeCardText,
    imageHomeCardStyles,
    iconHomeCard,
  };

  const contentStackedCardProps = {
    titleSize,
  };

  switch (variant) {
    case 'content-image-inline':
      return <ContentImageInLineCard {...props} />;
    case 'content-inline':
      return <ContentInLineCard {...props} />;
    case 'content-stacked':
      return <ContentStackedCard {...contentStackedCardProps} {...props} />;
    case 'quick-action':
      return <QuickActionCard {...props} />;
    case 'content-image':
      return <ContentImageCard {...props} />;
    case 'promotion-card':
      return <PromotionCard {...props} />;
    case 'content-icon':
      return <ContentIconCard {...props} />;
    case 'home-card':
      return <HomeCard {...homeCardProps} {...props} />;
    default:
      return <BaseCard {...props} />;
  }
}

export default Card;
