import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps, PromotionCardProps } from '../types';
import Text from '../../../components/Text/Text';
import Tag from '../../../components/atoms/Tag';
import Button from '../../../components/Button/Button';
import type { ThemeContextType } from '../../../theme/types';

function PromotionCard({
  shadowColor,
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
  isActiveCoupon,
  buttonIconName,
  descriptionTitle,
  buttonOnPress,
  onPress,
}: PromotionCardProps & BaseCardProps) {
  const themedStyle = useThemedStyles(styles);
  const buttonTitle = isActiveCoupon ? buttonTitleActive : buttonTitleDeactive;
  const tagIcon = require('../../../assets/points.png');

  return (
    <BaseCard
      shadowColor={shadowColor}
      style={themedStyle.card}
      onPress={onPress}
    >
      <View style={themedStyle.header}>
        {roundedImage && (
          <Image style={themedStyle.roundedImg} source={roundedImage} />
        )}
        {tagHeader && (
          <View style={themedStyle.tagContainer}>
            <Tag text={tagHeader} variant="activated" leftIcon={tagIcon} />
          </View>
        )}
      </View>
      {rectangleImage && <Image source={rectangleImage} />}
      {price && (
        <View style={themedStyle.priceContainer}>
          {
            <Text
              style={[themedStyle.priceText, themedStyle.fontColor]}
              variant="default-body-bold"
            >
              {price}
            </Text>
          }
          {priceWithDiscount && (
            <Text
              variant="default-body-bold"
              style={themedStyle.discountPriceText}
            >
              {priceWithDiscount}
            </Text>
          )}
        </View>
      )}
      {percentDiscount && (
        <View style={themedStyle.tagDiscountContainer}>
          <Tag text={percentDiscount} />
        </View>
      )}
      {descriptionTitle && (
        <Text
          variant="small-body"
          numberOfLines={2}
          style={[themedStyle.fontColor, themedStyle.descriptionTitle]}
        >
          {descriptionTitle}
        </Text>
      )}
      {withButton && (
        <View style={themedStyle.button}>
          <Button
            variant={isActiveCoupon ? 'secondary' : 'primary'}
            text={buttonTitle || ''}
            iconName={buttonIconName}
            onPress={() => buttonOnPress?.()}
            size="small"
          />
        </View>
      )}
      {footerText && (
        <Text variant="extra-small-body" style={themedStyle.footer}>
          {footerText}
        </Text>
      )}
    </BaseCard>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    card: {
      padding: 12,
      alignSelf: 'flex-start',
      maxWidth: 180,
    },
    fontColor: { color: theme.colors.content_primary },
    roundedImg: {
      height: 32,
      width: 32,
      borderRadius: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    rectangleImg: {
      height: 110,
      width: 156,
      paddingTop: 12,
    },
    priceContainer: {
      marginTop: 16,
      flexDirection: 'row',
    },
    priceText: {
      marginRight: 8,
    },
    discountPriceText: {
      color: theme.colors.content_tertiary,
      textDecorationLine: 'line-through',
      fontSize: 14,
    },
    descriptionTitle: {
      marginTop: 10,
    },
    footer: {
      color: theme.colors.content_tertiary,
      marginTop: 8,
    },
    tagContainer: { justifyContent: 'center' },
    button: {
      marginVertical: 8,
    },
    tagDiscountContainer: {
      marginTop: 8,
    },
  });

export default PromotionCard;
