import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import useImageDimensions from '../../../../hooks/useImageDimensions';
import Spinner from '../../../atoms/Spinner/Spinner';
import type { BannerProps } from '../types';

export const Banner = ({
  banner,
  bannerWidth,
  borderRadius,
  enableShadow,
}: BannerProps) => {
  const { aspectRatio } = useImageDimensions(banner.image);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (banner.image.uri) {
      Image.prefetch(banner.image.uri).then(() => setLoading(false));
    } else {
      Image.resolveAssetSource(banner.image);
      setLoading(false);
    }
  }, [banner.image]);

  return (
    <View style={styles.container}>
      {!loading && aspectRatio > 0 ? (
        <TouchableOpacity
          key={banner.id}
          testID={`banner-${banner.id}`}
          onPress={banner.onPress}
          activeOpacity={1}
          style={[
            styles.container,
            enableShadow && styles.shadow,
            {
              width: bannerWidth,
              borderRadius,
            },
          ]}
        >
          <Image
            testID="banner-image"
            source={banner.image}
            style={[
              styles.image,
              {
                width: bannerWidth,
                aspectRatio,
                borderRadius,
              },
            ]}
          />
        </TouchableOpacity>
      ) : (
        <Spinner inverse />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 'auto',
  },
  container: {
    justifyContent: 'center',
    paddingBottom: 3,
    paddingRight: 3,
  },
  shadow: {
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Banner;
