import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import type { HeaderCardProps } from '../types';
import Text from '../../../components/Text/Text';

const eyeIcon = require('../../../assets/visible.png');
const eyeNotIcon = require('../../../assets/hidden.png');

function HeaderCard({
  alias,
  brandName,
  brandIcon,
  brandBlur,
  containerStyle,
}: HeaderCardProps) {
  const [blur, setBlur] = useState<boolean>(true);

  return (
    <View style={[styles.contentAlias, containerStyle]}>
      <View>
        <View style={styles.brandTopContainer}>
          <Text variant="label-default-bold" style={styles.alias}>
            {alias}
          </Text>
          {brandBlur && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => setBlur(!blur)}
            >
              <Image
                testID="payment-card-visible"
                style={styles.icon}
                source={blur ? eyeIcon : eyeNotIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text variant="label-extra-small-bold" style={styles.brandName}>
          {brandName}
        </Text>
      </View>
      <View style={styles.contentImage}>
        {brandIcon && (
          <Image
            testID="payment-card-icon"
            style={styles.image}
            source={brandIcon}
          />
        )}
      </View>
    </View>
  );
}

export default HeaderCard;

const styles = StyleSheet.create({
  contentAlias: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    width: '92%',
    alignSelf: 'center',
    marginTop: '2%',
  },
  brandTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  image: {
    width: '90%',
    height: '50%',
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
  icon: {
    resizeMode: 'contain',
  },
  contentImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
  },
  alias: {
    color: 'white',
  },
  brandName: {
    color: 'white',
  },
});
