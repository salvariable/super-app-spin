import React from 'react';
import { View, StyleSheet } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps } from '../types';
import Text from '../../../components/Text/Text';
import type { ThemeContextType } from '../../../../src/theme/types';
import Tag from '../../atoms/Tag/index';
import Icon from '../../atoms/Icon/Icon';

type ContentImageInLineCardProps = Omit<
  BaseCardProps,
  'image|iconContainerStyles'
>;

function ContentImageInLineCard(props: ContentImageInLineCardProps) {
  const themedStyle = useThemedStyles(styles);
  return (
    <BaseCard {...props} style={themedStyle.card}>
      <View style={themedStyle.container}>
        {props.icon && (
          <View
            testID="image-container-id"
            style={[themedStyle.imageContainer]}
          >
            {props.icon}
          </View>
        )}
        <View style={themedStyle.textContainer}>
          <View style={themedStyle.titleContainer}>
            <Text variant="default-body-bold" numberOfLines={2}>
              {props.title}
            </Text>
          </View>
          {props.subtitle ? (
            <View style={themedStyle.subTitleContainer}>
              <Text
                variant="small-body"
                style={themedStyle.subTitle}
                numberOfLines={2}
              >
                {props.subtitle}
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View>
          {props.tagText && (
            <View style={themedStyle.tag}>
              <Tag size="large" text={props.tagText} />
            </View>
          )}
          <View
            style={
              props.tagText
                ? themedStyle.iconContainer
                : themedStyle.iconContainerAlone
            }
          >
            <Icon
              iconTypographyStyle={themedStyle.icon}
              name={'icon-chevron-right'}
            />
          </View>
        </View>
      </View>
    </BaseCard>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    card: {
      height: 72,
      width: '90%',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      textAlign: 'center',
    },
    titleContainer: {
      marginHorizontal: 16,
    },
    subTitleContainer: {
      marginLeft: 16,
    },
    subTitle: {
      color: theme.colors.content_secondary,
    },
    imageContainer: {
      backgroundColor: theme.colors.surface_secondary,
      height: '100%',
      width: 80,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      marginVertical: 10,
      paddingBottom: 20,
      alignItems: 'center',
    },
    iconContainerAlone: {
      paddingRight: 16,
    },
    icon: {
      fontSize: 20,
      color: theme.colors.content_tertiary,
    },
    tag: { left: 10 },
  });

export default ContentImageInLineCard;
