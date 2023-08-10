import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Banner } from '../molecules/BannerCarousel/types';

import BannerCarousel from '../molecules/BannerCarousel';

const banners: Banner[] = [
  {
    id: 1,
    title: 'Volaris',
    image: require('../../assets/Images/banner.png'),
    onPress: () => {},
  },
  {
    id: 2,
    title: 'Volaris',
    image: require('../../assets/Images/banner.png'),
    onPress: () => {},
  },
];

const BenefitsBanner = () => {
  return (
    <View style={styles.container}>
      <BannerCarousel
        variant="default"
        banners={banners}
        stepperPosition="left"
        bannerWidth={'100%'}
      />
    </View>
  );
};

export default BenefitsBanner;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
});
