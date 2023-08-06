import React from 'react';
import {
  View,
  StyleSheet,
  TextStyle,
  Animated,
  Dimensions,
} from 'react-native';
import type { HeaderCardProps, Gradient } from '../types';
import HeaderCard from './HeaderCard';
import Card from '../../../components/Card/Card';
import LinearGradient from 'react-native-linear-gradient';
import Barcode from '../../Barcode/Barcode';
import type { BarcodeFormat } from '../../types';
export interface FrontCardProps {
  testID?: string;
  header?: HeaderCardProps;
  textStyle?: TextStyle;
  customHeader: React.ReactNode;
  animated: Animated.Value;
  disabled: boolean;
  gradient: Gradient;
  barcodeValue: string;
  barcodeFormat: BarcodeFormat;
}

function BackCard({
  header,
  customHeader,
  animated,
  gradient,
  disabled,
  testID,
  barcodeFormat,
  barcodeValue,
}: FrontCardProps) {
  return (
    <View testID={testID} style={styles.content}>
      <Animated.View
        style={[
          { ...styles.animated },
          {
            transform: [
              { perspective: 1000 },
              {
                rotateY: animated.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['180deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      >
        <Card style={styles.contentCard}>
          <LinearGradient
            style={styles.gradientContent}
            colors={
              disabled
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
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
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

            <View style={styles.contentBarcode}>
              <Barcode
                height={60}
                value={barcodeValue}
                format={barcodeFormat}
                width={Dimensions.get('window').width}
                maxWidth={Dimensions.get('window').width - 100}
              />
            </View>
          </LinearGradient>
        </Card>
      </Animated.View>
    </View>
  );
}

export default BackCard;

const styles = StyleSheet.create({
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
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
