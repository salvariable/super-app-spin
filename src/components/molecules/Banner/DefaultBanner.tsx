import { Dimensions, Platform, StyleSheet } from 'react-native';
import React from 'react';
import BaseBanner from './BaseBanner';
import type { BannerProps } from './types';
import type { ThemeContextType } from '../../../theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';

const { width } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

const BANNER_WIDTH = width * 0.8;
const BANNER_GAP = 10;

const DefaultBanner = (props: BannerProps) => {
  const style = useThemedStyles(styles);
  return (
    <BaseBanner
      containerStyle={style.bannersContainer}
      stepperContainerStyles={style.stepperContainer}
      imageStyles={style.image}
      bannerStyle={[style.banner, isAndroid && style.androidShadow]}
      bannerWidth={BANNER_WIDTH}
      bannerTranslation={BANNER_WIDTH + BANNER_GAP}
      {...props}
    />
  );
};

export default DefaultBanner;

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    bannersContainer: {
      shadowOffset: { width: -4, height: 2 },
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    stepperContainer: {
      left: isAndroid ? 5 : 0,
    },
    image: {
      borderRadius: 8,
      flex: 1,
    },
    banner: {
      borderRadius: 8,
      backgroundColor: theme.colors.NEUTRAL_DEFAULT_LIGHT_100,
      marginRight: BANNER_GAP,
      height: 120,
      marginBottom: 20,
      flex: 1,
    },
    androidShadow: {
      elevation: 3,
      margin: 5,
      marginRight: BANNER_GAP - 5,
      marginBottom: 15,
    },
  });
