import React from 'react';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { ThemeType } from '../../../theme/types';
import Text from '../../Text/Text';
import useTheme from '../../../hooks/useTheme';

const Icon = require('../../../assets/Alert.png');

interface Props {
  text: string;
  testID?: string;
  icon?: ImageSourcePropType;
  iconColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

const BaseDisclaimer = ({
  text,
  testID,
  icon = Icon,
  iconColor,
  backgroundColor,
  textColor,
}: Props) => {
  const style = useThemedStyles(styles);
  const theme = useTheme();

  return (
    <View
      testID={testID}
      style={[
        style.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.colors.BRAND_DEFAULT_LIGHT_100,
        },
      ]}
    >
      <View style={style.inconContainer}>
        <Image
          source={icon}
          testID={`image-${testID}`}
          style={{
            tintColor:
              iconColor === undefined ? theme.colors.BRAND_DEFAULT : iconColor,
          }}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={{ color: textColor }} variant="content-two-regular">
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.BRAND_DEFAULT_LIGHT_100,
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      borderRadius: 5,
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    inconContainer: {
      flex: 1,
    },
    textContainer: {
      flex: 9,
      marginLeft: 15,
    },
  });

export default BaseDisclaimer;
