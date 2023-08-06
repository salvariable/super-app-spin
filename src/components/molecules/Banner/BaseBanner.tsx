/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  NativeScrollEvent,
} from 'react-native';
import Text from '../../Text/Text';
import useThemedStyles from '../../../hooks/useThemedStyles';
import StepProgressView from '../../atoms/ProgressView';
import type { BannerProps } from './types';

const { width } = Dimensions.get('window');

export const Banner = ({
  containerStyle,
  banners,
  loading = false,
  onPress,
  movingTime = 2000,
  onChangeIndex,
  isAutoplay = false,
  bannerStyle,
  stepperContainerStyles,
  bannerWidth = width,
  bannerTranslation = width,
  imageStyles,
  withStepper = false,
  space = 0,
  endSpacing = 0,
}: BannerProps) => {
  const style = useThemedStyles(styles);
  const [currentBanner, setCurrentBanner] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bannerRefs = useRef<any>();

  const setData = (index: number) => {
    if (onChangeIndex !== undefined) {
      onChangeIndex(index);
    }
    setCurrentBanner(index);
  };

  const moveNextBanner = () => {
    const nextBanner = (Number(currentBanner) + 1) % banners.length;
    bannerRefs.current?.scrollTo({
      x: bannerTranslation * nextBanner,
      animated: true,
    });
  };

  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        moveNextBanner();
      }, movingTime);
      return () => clearInterval(interval);
    }
    return () => currentBanner;
  }, [currentBanner]);

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

  const lastBanner = {
    marginRight: space,
  };

  const bannerSpace = {
    marginLeft: space,
  };

  const endSpacer = <View style={{ width: endSpacing }} />;

  return (
    <View style={[style.container, containerStyle]}>
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <>
          <ScrollView
            testID="banner-scroll-view"
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            snapToAlignment="start"
            snapToInterval={bannerTranslation * 0.8}
            decelerationRate="fast"
            ref={bannerRefs}
            scrollEventThrottle={16}
          >
            {banners.map((banner) => (
              <View
                style={[
                  bannerSpace,
                  bannerStyle,
                  { width: bannerWidth * 0.8 },
                  banner.id === banners.length && lastBanner,
                ]}
                key={banner.id}
                testID={`banner-${banner.id}`}
              >
                <TouchableOpacity
                  onPress={() => onPress(banner)}
                  activeOpacity={1}
                >
                  <Image
                    testID="image-banner"
                    source={banner.banner.image}
                    resizeMode="contain"
                    resizeMethod="resize"
                    style={{ ...style.image, ...imageStyles }}
                  />
                </TouchableOpacity>
              </View>
            ))}
            {endSpacer}
          </ScrollView>
          {withStepper && (
            <View style={{ ...stepperContainerStyles }}>
              <StepProgressView
                steps={banners.length}
                currentStep={currentBanner + 1}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: '100%',
      minHeight: 120,
    },
    banner: {
      marginLeft: 16,
    },
  });

export default Banner;
