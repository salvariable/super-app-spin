import React from 'react';

import BaseChip from './BaseChip';
import type { ChipProps } from './types';
import useTheme from '../../../hooks/useTheme';
import { StyleSheet } from 'react-native';

function DefaultChip(props: ChipProps) {
  const theme = useTheme();

  return (
    <BaseChip
      {...props}
      textStyle={style.textColor}
      backgroundColor={theme.colors.BRAND_DEFAULT}
    />
  );
}

const style = StyleSheet.create({
  textColor: {
    color: 'white',
  },
});

export default DefaultChip;
