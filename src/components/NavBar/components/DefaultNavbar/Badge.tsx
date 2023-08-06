import { StyleSheet, View } from 'react-native';
import React from 'react';
import type { ThemeContextType } from '../../../../theme/types';
import useThemedStyles from '../../../../hooks/useThemedStyles';

const Badge = () => {
  const style = useThemedStyles(styles);
  return <View style={style.badge} />;
};

export default Badge;

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    badge: {
      backgroundColor: theme.colors.content_urgent,
      width: 6,
      height: 6,
      borderRadius: 6 / 2,
      right: 10,
      top: 5,
      bottom: 0,
      position: 'absolute',
    },
  });
