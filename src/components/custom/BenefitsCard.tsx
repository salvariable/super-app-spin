import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

import BaseCard from '../Card/components/BaseCard';
import Text from '../Text/Text';

type BenefitsCardProps = {
  title: string;
  body: string;
  img: ImageSourcePropType;
};

const BenefitsCard = ({ title, body, img }: BenefitsCardProps) => {
  return (
    <BaseCard style={styles.baseCard} elevationIOS={{ width: 0, height: 0 }}>
      <Text
        testID="promo-text"
        variant="headline-small"
        style={styles.cardTitle}
        numberOfLines={2}>
        {title}
      </Text>
      <Text
        variant="content-one-regular"
        style={styles.cardBodyText}
        numberOfLines={2}>
        {body}
      </Text>
      <Image source={img} style={styles.img} />
    </BaseCard>
  );
};

export default BenefitsCard;

const styles = StyleSheet.create({
  baseCard: {
    elevation: 0,
    shadowOpacity: 0,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  cardTitle: {
    marginBottom: 16,
  },
  cardBodyText: {
    marginBottom: 16,
  },
  img: {
    alignSelf: 'center',
    width: 200,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#E5E5E5',
    marginVertical: 8,
  },
});
