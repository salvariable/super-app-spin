import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import BaseCard from './BaseCard';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseCardProps, ContentStackedProps } from '../types';
import Text from '../../../components/Text/Text';
import type { ThemeContextType } from '../../../../src/theme/types';

interface TextContentProps {
  title?: string;
  titleSize?: 'small' | 'default' | 'extra-small';
}

interface ImageContentProps {
  image?: JSX.Element;
}

const { width } = Dimensions.get('window');

const ImageContent = ({ image }: ImageContentProps) => {
  const themedStyle = useThemedStyles(styles);
  return <View style={themedStyle.imageContent}>{image}</View>;
};

const TextContent = ({ title, titleSize = 'default' }: TextContentProps) => {
  const themedStyle = useThemedStyles(styles);
  const cardTextNumberOfLines = 2;
  const getTextVariant = (size: 'small' | 'default' | 'extra-small') => {
    switch (size) {
      case 'small':
        return 'small-body-bold';
      case 'extra-small':
        return 'extra-small-body-bold';
      default:
        return 'default-body-bold';
    }
  };

  return (
    <Text
      variant={getTextVariant(titleSize)}
      style={themedStyle.textContent}
      numberOfLines={cardTextNumberOfLines}
    >
      {title}
    </Text>
  );
};

function ContentStackedCard(props: ContentStackedProps & BaseCardProps) {
  const themedStyle = useThemedStyles(styles);

  const isValidTitlesSize =
    props.titleSize === 'small' ||
    props.titleSize === 'default' ||
    props.titleSize === 'extra-small';

  if (!isValidTitlesSize) {
    throw new Error(
      "Invalid value of titlesSize. Please only use 'small',  'default', 'extra-small' ",
    );
  }

  return (
    <BaseCard
      {...props}
      style={themedStyle.card}
      elevationIOS={themedStyle.elevation}
      onPress={props.onPress}
    >
      <View>
        <ImageContent image={props.icon} />
        <TextContent
          title={props.title}
          titleSize={props.titleSize ?? 'default'}
        />
      </View>
    </BaseCard>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    card: {
      height: 130,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      flexDirection: 'column',
      paddingHorizontal: width < 340 ? 5 : 12,
      paddingVertical: 12,
      shadowColor: `${theme.colors.content_primary}80`,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
    imageContent: {
      height: 48,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    elevation: { width: 0, height: 2 },
    textContent: {
      marginTop: 16,
      textAlign: 'center',
    },
  });

export default ContentStackedCard;
