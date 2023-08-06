import React from 'react';
import {default as RNBarcode} from '@kichiyaki/react-native-barcode-generator';
import type {ViewStyle} from 'react-native';
import type {BarcodeFormat} from '../types';

interface Props {
  format: BarcodeFormat;
  style?: ViewStyle;
  width?: number;
  maxWidth?: number;
  height?: number;
  value: string;
  lineColor?: string;
  background?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any) => void;
}

function Barcode({
  maxWidth,
  style,
  format,
  value,
  height,
  width,
  lineColor,
  background,
  onError,
}: Props) {
  return (
    <RNBarcode
      format={format}
      value={value}
      height={height}
      width={width}
      style={style}
      maxWidth={maxWidth}
      lineColor={lineColor}
      background={background}
      onError={onError}
    />
  );
}

export default Barcode;
