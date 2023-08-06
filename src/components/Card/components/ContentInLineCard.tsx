import React from 'react';
import { View, StyleSheet } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps } from '../types';
import Text from '../../../components/Text/Text';
import type { ThemeContextType } from '../../../../src/theme/types';
import Tag from '../../atoms/Tag/index';
import Icon from '../../atoms/Icon/Icon';

function ContentInLineCard(props: BaseCardProps) {
  const themedStyle = useThemedStyles(styles);
  return (
    <BaseCard {...props} style={themedStyle.card}>
      <View style={themedStyle.container}>
        {(props.icon || props.leftIconName) && (
          <View style={[themedStyle.imageContainer, props.iconContainerStyles]}>
            {props.icon && props.icon}
            {props.leftIconName && (
              <Icon
                name={props.leftIconName}
                iconTypographyStyle={props.leftIconTypographyStyle}
              />
            )}
          </View>
        )}
        <View style={themedStyle.textContainer}>
          <View style={themedStyle.titleContainer}>
            <Text
              variant={props.fontTitle || 'default-body-bold'}
              numberOfLines={2}
            >
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
            {props.rightIconName ? (
              <Icon
                name={props.rightIconName}
                iconTypographyStyle={props.rightIconTypographyStyle}
              />
            ) : (
              <Icon
                iconTypographyStyle={themedStyle.icon}
                name={'icon-chevron-right'}
              />
            )}
          </View>
        </View>
      </View>
    </BaseCard>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    card: {
      height: 80,
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
      width: '100%',
      marginHorizontal: 16,
    },
    subTitleContainer: {
      marginLeft: 16,
      width: '100%',
    },
    subTitle: {
      color: theme.colors.content_tertiary,
    },
    imageContainer: {
      padding: 15,
      backgroundColor: theme.colors.surface_secondary,
      borderRadius: 100,
      marginLeft: 10,
    },
    image: {
      height: 25,
      width: 25,
    },
    iconContainer: {
      marginVertical: 10,
      paddingBottom: 20,
      alignItems: 'center',
      paddingLeft: 16,
    },
    iconContainerAlone: {
      paddingRight: 16,
    },
    icon: { fontSize: 20, color: theme.colors.content_tertiary },
    tag: { left: 10 },
  });

export default ContentInLineCard;
