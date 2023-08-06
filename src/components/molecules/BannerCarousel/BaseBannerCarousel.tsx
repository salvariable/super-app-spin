/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlexAlignType,
  Image,
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import StepProgressView from '../../atoms/ProgressView';
import Spinner from '../../atoms/Spinner/Spinner';
import { Banner } from './components/Banner';
import Separator from './components/Separator';
import type { BannerCarouselProps } from './types';

const { width: windowWidth } = Dimensions.get('window');

export const BaseBannerCarousel = ({
  banners,
  isAutoplay = false,
  movingTime = 2000,
  bannerWidth = '100%',
  withStepper = false,
  horizontalMargin = 16,
  interSpacing = 16,
  stepperPosition = 'left',
  borderRadius = 12,
  enableShadow = false,
}: BannerCarouselProps) => {
  const style = useThemedStyles(styles);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  const bannerRefs = useRef<ScrollView>(null);
  const singleBannerWidth = windowWidth - 2 * horizontalMargin;

  const bannerAbsoluteWidth = isNaN(bannerWidth as number)
    ? (singleBannerWidth * parseFloat(bannerWidth as string)) / 100
    : (bannerWidth as number);

  const setData = (index: number) => {
    setCurrentBanner(index);
  };

  const moveNextBanner = () => {
    const nextBanner = (Number(currentBanner) + 1) % banners.length;
    bannerRefs.current?.scrollTo({
      x: (bannerAbsoluteWidth + interSpacing) * nextBanner,
      animated: true,
    });
  };

  useEffect(() => {
    if (isAutoplay && !loading) {
      const interval = setInterval(() => {
        moveNextBanner();
      }, movingTime);
      return () => clearInterval(interval);
    }
    return () => currentBanner;
  }, [currentBanner, loading]);

  const onChange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      if (slide !== currentBanner && slide !== banners.length) {
        setData(slide);
      }
    }
  };

  const stepperAlignment: { [key: string]: FlexAlignType } = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  useEffect(() => {
    banners.map((banner) => {
      if (banner.image.uri) {
        Image.prefetch(banner.image.uri).then(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });
  }, [banners]);

  const isSingleBanner = banners.length === 1;

  return (
    <View style={style.bannersContainer}>
      {loading && <Spinner inverse />}
      {!loading && (
        <ScrollView
          testID="banner-scroll-view"
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          snapToAlignment="start"
          snapToInterval={bannerAbsoluteWidth + horizontalMargin}
          decelerationRate="fast"
          ref={bannerRefs}
          scrollEventThrottle={16}
        >
          <Separator width={horizontalMargin} />
          {banners.map((banner, index) => (
            <Fragment key={index}>
              {index !== 0 && <Separator width={interSpacing - 3} />}
              <Banner
                key={banner.id}
                banner={banner}
                borderRadius={borderRadius}
                bannerWidth={
                  isSingleBanner ? singleBannerWidth : bannerAbsoluteWidth
                }
                enableShadow={enableShadow}
              />
            </Fragment>
          ))}
          <Separator width={horizontalMargin - 3} />
        </ScrollView>
      )}

      {withStepper && !loading && !isSingleBanner && (
        <View
          style={[
            {
              alignSelf: stepperAlignment[stepperPosition],
              marginHorizontal: horizontalMargin,
            },
            style.stepper,
          ]}
        >
          <StepProgressView
            steps={banners.length}
            currentStep={currentBanner + 1}
          />
        </View>
      )}
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    stepper: {
      marginVertical: 5,
    },
  });

export default BaseBannerCarousel;
