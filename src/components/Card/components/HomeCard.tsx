import React from 'react';
import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps, HomeCardProps } from '../types';
import Text from '../../../components/Text/Text';
import Tag from '../../../components/atoms/Tag';
import type { ThemeContextType } from '../../../theme/types';

function HomeCard({
  cardTitle,
  cardSubtitle,
  imageHomeCard,
  tagHomeCardText,
  imageHomeCardStyles,
  iconHomeCard,
  onPress,
  shadowColor,
}: HomeCardProps & BaseCardProps) {
  const themedStyle = useThemedStyles(styles);
  const { width } = useWindowDimensions();
  const onlyIcon = iconHomeCard && !cardTitle && !cardSubtitle;
  const cardWidth = width / 2 - 24;
  const cardCustomStyles = {
    margin: 6,
    borderRadius: 12,
    width: cardWidth,
  };
  return (
    <BaseCard
      onPress={onPress}
      style={cardCustomStyles}
      shadowColor={shadowColor}
    >
      {!onlyIcon ? (
        <View style={themedStyle.contentView}>
          <View style={themedStyle.header}>
            {imageHomeCard && (
              <Image style={imageHomeCardStyles} source={imageHomeCard} />
            )}
            {iconHomeCard && cardTitle && (
              <View style={themedStyle.iconHomeCard}>{iconHomeCard}</View>
            )}
            {tagHomeCardText && <Tag text={tagHomeCardText} />}
          </View>
          <View style={themedStyle.textContainer}>
            <Text style={themedStyle.cardTitle} variant="small-body-bold">
              {cardTitle}
            </Text>
            {cardSubtitle && (
              <Text style={themedStyle.cardSubtitle} variant="extra-small-body">
                {cardSubtitle}
              </Text>
            )}
          </View>
        </View>
      ) : (
        <View style={themedStyle.centerIcon}>
          <View style={themedStyle.icon}>{iconHomeCard}</View>
        </View>
      )}
    </BaseCard>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    contentView: {
      padding: 12,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardTitle: {
      color: theme.colors.content_primary,
      marginBottom: 4,
    },
    cardSubtitle: {
      color: theme.colors.inverse_content_tertiary,
    },
    textContainer: {
      marginTop: 12,
    },
    iconHomeCard: {
      backgroundColor: theme.colors.surface_secondary,
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    centerIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      height: 120,
    },
    icon: {
      padding: 10,
      borderRadius: 20,
      width: 40,
      height: 40,
      backgroundColor: theme.colors.surface_secondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeCard;
