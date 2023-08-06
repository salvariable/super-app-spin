import React from 'react';
import { View, StyleSheet, TextStyle, Dimensions } from 'react-native';
import type { HeaderCardProps, Gradient } from '../../PaymentCard/types';
import HeaderCard from '../../PaymentCard/components/HeaderCard';
import Card from '../../../components/Card/Card';
import LinearGradient from 'react-native-linear-gradient';
import Barcode from '../../Barcode/Barcode';
import type { BarcodeFormat } from '../../types';
import Text from '../../Text/Text';
import useThemedStyles from '../../../hooks/useThemedStyles';
export interface FrontCardProps {
  testID?: string;
  header?: HeaderCardProps;
  textStyle?: TextStyle;
  customHeader: React.ReactNode;
  disabled: boolean;
  gradient: Gradient;
  barcodeValue: string;
  barcodeFormat: BarcodeFormat;
  gradientStart?: AxisProp;
  gradientEnd?: AxisProp;
  initValue?: boolean;
}

interface AxisProp {
  x: number;
  y: number;
}

function BackCardWithoutFlip({
  header,
  customHeader,
  gradient,
  disabled,
  testID,
  barcodeFormat,
  barcodeValue,
  gradientStart,
  gradientEnd,
  initValue,
}: FrontCardProps) {
  const themedStyle = useThemedStyles(styles);
  const lastFourNumber = (cadena: string) => {
    return cadena.substring(cadena.length - 4, cadena.length);
  };

  return (
    <View testID={testID} style={themedStyle.content}>
      <Card style={themedStyle.contentCard}>
        <LinearGradient
          style={themedStyle.gradientContent}
          colors={
            disabled === initValue
              ? [
                  gradient.disabled.left,
                  gradient.disabled.center,
                  gradient.disabled.right,
                ]
              : [
                  gradient.enabled.left,
                  gradient.enabled.center,
                  gradient.enabled.right,
                ]
          }
          start={{
            x: gradientStart ? gradientStart?.x : 0,
            y: gradientStart ? gradientStart?.x : 0,
          }}
          end={{
            x: gradientEnd ? gradientEnd?.x : 0,
            y: gradientEnd ? gradientEnd?.y : 0,
          }}
        >
          {customHeader ? (
            customHeader
          ) : (
            <HeaderCard
              alias={header?.alias}
              brandName={header?.brandName}
              brandIcon={header?.brandIcon}
            />
          )}

          <View style={themedStyle.contentBarcode}>
            <Text style={themedStyle.numbers} variant="label-extra-small-bold">
              **** **** **** {lastFourNumber(barcodeValue)}
            </Text>
            <Barcode
              height={50}
              value={barcodeValue}
              format={barcodeFormat}
              width={Dimensions.get('window').width}
              maxWidth={Dimensions.get('window').width - 80}
            />
          </View>
        </LinearGradient>
      </Card>
    </View>
  );
}

export default BackCardWithoutFlip;

const styles = () =>
  StyleSheet.create({
    content: {
      position: 'absolute',
      width: '100%',
    },
    contentCard: {
      width: '90%',
      height: 180,
      alignSelf: 'center',
      borderRadius: 10,
    },
    animated: {
      backfaceVisibility: 'hidden',
      height: 180,
    },
    gradientContent: {
      height: 180,
      width: '100%',
      alignSelf: 'center',
      borderRadius: 10,
    },
    contentBarcode: {
      width: '100%',
      height: 90,
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    numbers: {
      marginBottom: 4,
    },
  });
