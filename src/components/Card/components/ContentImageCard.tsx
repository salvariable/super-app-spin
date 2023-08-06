/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps } from '../types';
import Text from '../../../components/Text/Text';
import Tag from '../../atoms/Tag/index';
import type { ThemeContextType } from 'src/theme/types';

function ContentImageCard(props: BaseCardProps) {
  const themedStyle = useThemedStyles(styles);

  return (
    <BaseCard
      {...props}
      style={props.subtitle ? themedStyle.card : themedStyle.iconCard}
    >
      <View style={themedStyle.contentView}>
        <View style={themedStyle.cardTop}>
          {props.image && (
            <Image style={themedStyle.image} source={props.image} />
          )}

          {props.icon &&
            (props.title ? (
              <View style={themedStyle.iconContainer}>{props.icon}</View>
            ) : (
              <View style={themedStyle.onlyIconContainer}>
                <View style={themedStyle.onlyIcon}>{props.icon}</View>
              </View>
            ))}

          {props.tagText && (
            <View style={{ right: props.tagText.length > 8 ? 28 : 0 }}>
              <Tag size="small" text={props.tagText} />
            </View>
          )}
        </View>
        {props.title && (
          <Text variant="small-body-bold" numberOfLines={1}>
            {props.title}
          </Text>
        )}
        {props.subtitle && (
          <Text style={themedStyle.subTitle} numberOfLines={1}>
            {props.subtitle}
          </Text>
        )}
      </View>
    </BaseCard>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    card: {
      height: 120,
      width: 160,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
    },
    iconCard: {
      height: 100,
      width: 160,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    cardTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contentView: {
      paddingHorizontal: 12,
      paddingVertical: 12,
      flexDirection: 'column',
    },
    image: {
      height: 60,
      width: 60,
    },
    icon: {
      height: 32,
      width: 32,
      marginBottom: 20,
    },
    iconContainer: {
      backgroundColor: theme.colors.surface_secondary,
      borderRadius: 20,
      padding: 7,
      marginBottom: 20,
    },
    onlyIconContainer: {
      flex: 1,
      alignItems: 'center',
    },
    onlyIcon: {
      backgroundColor: theme.colors.surface_secondary,
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      marginTop: 13,
      width: 40,
      height: 40,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: theme.typography.fontFamily.BOLD,
    },
    subTitle: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
      fontFamily: theme.typography.fontFamily.REGULAR,
      color: theme.colors.content_tertiary,
    },
  });

export default ContentImageCard;
