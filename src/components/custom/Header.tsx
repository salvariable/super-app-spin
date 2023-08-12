import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import type { TStackBenefits } from '../../types/navigation.types';

import Text from '../Text/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { POPPINS } from '../../styles/custom';

const chevronLeft = require('../../assets/Angle_left.png');

type HeaderProps = {
  title: string;
  canGoBack?: boolean;
};

const Header = ({ title, canGoBack = true }: HeaderProps) => {
  const navigation = useNavigation<NavigationProp<TStackBenefits>>();

  const goBack = () => navigation.goBack();

  return (
    <View
      style={[styles.container, !canGoBack ? styles.containerWithPadding : {}]}>
      {canGoBack && (
        <TouchableOpacity style={styles.chevronContainer} onPress={goBack}>
          <Image source={chevronLeft} style={styles.chevron} />
        </TouchableOpacity>
      )}
      <Text variant="headline-small" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerWithPadding: {
    paddingHorizontal: 16,
  },
  chevronContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron: {
    height: 19,
    width: 10.5,
    marginBottom: 5,
  },
  title: {
    fontFamily: POPPINS,
    fontWeight: '500',
  },
});
