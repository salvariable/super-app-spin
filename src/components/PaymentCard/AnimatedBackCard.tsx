import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TextStyle,
  Animated,
  Dimensions,
  ViewStyle,
  TouchableOpacity,
  Image,
  Easing,
} from 'react-native';
import type { HeaderCardProps, Gradient } from './types';
import HeaderCard from './components/HeaderCard';
import Card from '../../components/Card/Card';
import LinearGradient from 'react-native-linear-gradient';
import Barcode from '../Barcode/Barcode';
import type { BarcodeFormat } from '../types';
import Text from '../Text/Text';
import useThemedStyles from '../../hooks/useThemedStyles';
import type { ThemeContextType } from 'src/theme/types';
export interface AnimatedBackCardProps {
  testID?: string;
  header?: HeaderCardProps;
  textStyle?: TextStyle;
  disabled: boolean;
  gradient: Gradient;
  barcodeValue: string;
  barcodeFormat: BarcodeFormat;
  style?: ViewStyle;
  brandBlur?: boolean;
}
const chevronDown = require('../../assets/chevronDown.png');

function AnimatedBackCard({
  header,
  gradient,
  disabled,
  barcodeFormat,
  barcodeValue,
}: AnimatedBackCardProps) {
  const themedStyle = useThemedStyles(styles);
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [76, 182],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 600,
        toValue: 0,
        useNativeDriver: false,
        easing: Easing.bezier(0.5, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 600,
        toValue: 1,
        useNativeDriver: false,
        easing: Easing.bezier(0.5, 0.0, 0.2, 1),
      }).start();
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Card style={themedStyle.contentCard}>
        <TouchableOpacity
          testID="payment-card-touchable"
          onPress={() => toggleItem()}
          activeOpacity={1}
        >
          <Animated.View
            testID="animated-payment-card-view"
            style={[
              {
                height: bodyHeight,
                overflow: 'hidden',
              },
            ]}
          >
            <LinearGradient
              style={themedStyle.gradientContent}
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
              start={{ x: 0, y: 1 }}
              end={{ x: 0.9, y: 0.4 }}
              useAngle
              angle={45}
              angleCenter={{ x: 0.5, y: 0.5 }}
            >
              <View style={themedStyle.topContainer}>
                <HeaderCard
                  alias={header?.alias}
                  brandName={header?.brandName}
                  brandIcon={header?.brandIcon}
                  brandBlur={header?.brandBlur}
                  containerStyle={themedStyle.headerContainer}
                />
              </View>
            </LinearGradient>

            <View style={themedStyle.contentBarcode}>
              <Text style={themedStyle.numbers} variant="content-one-regular">
                {barcodeValue}
              </Text>
              <Barcode
                height={47}
                value={barcodeValue}
                format={barcodeFormat}
                width={Dimensions.get('window').width}
                maxWidth={Dimensions.get('window').width - 80}
              />
            </View>

            <LinearGradient
              style={themedStyle.gradientContentBottom}
              colors={
                disabled
                  ? [
                      gradient.disabled.left,
                      gradient.disabled.center,
                      gradient.disabled.right,
                    ]
                  : [gradient.enabled.left, gradient.enabled.center]
              }
              start={{ x: 0, y: 1 }}
              end={{ x: 1.2, y: 0 }}
            />
          </Animated.View>
          <View style={themedStyle.buttonContainer}>
            <View style={themedStyle.button}>
              <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
                <Image source={chevronDown} style={themedStyle.image} />
              </Animated.View>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </>
  );
}

export default AnimatedBackCard;

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    contentCard: {
      width: '90%',
      alignSelf: 'center',
      borderRadius: 16,
      zIndex: 1,
      elevation: 4,
    },
    animated: {
      backfaceVisibility: 'hidden',
      height: 182,
    },
    topContainer: {
      backgroundColor: '#ffffff20',
      margin: 8,
      borderRadius: 10,
      height: 60,
    },
    gradientContent: {
      height: 76,
      width: '100%',
      alignSelf: 'center',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    gradientContentBottom: {
      height: 20,
      width: '100%',
      alignSelf: 'center',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    headerContainer: {
      height: 60,
      marginTop: 0,
    },
    bardcode: {
      width: '100%',
      height: 86,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentBarcode: {
      height: 86,
      backgroundColor: 'white',
    },
    buttonContainer: {
      alignItems: 'center',
      flex: 1,
      elevation: 4,
    },
    button: {
      top: -14,
      position: 'absolute',
      borderWidth: 1,
      borderColor: 'white',
      width: 28,
      height: 28,
      borderRadius: 28,
      backgroundColor: theme.colors.brand_blue_primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 15,
      height: 8,
      resizeMode: 'contain',
    },
    numbers: {
      marginTop: 4,
      marginLeft: 20,
      fontFamily: theme.typography.fontFamily.BOLD,
      fontWeight: '600',
      fontSize: 12,
    },
  });
