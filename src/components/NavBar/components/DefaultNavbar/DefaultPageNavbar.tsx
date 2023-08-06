import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Text from '../../../../components/Text/Text';
import Icon from '../../../../components/atoms/Icon/Icon';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../../../theme/types';
import type { DefaultNavBarProps } from '../../../types';
import useTheme from '../../../../hooks/useTheme';

const DefaultPageNavbar = ({
  title,
  children,
  iconOnPress,
  colorTitleStyle,
  chevronIconStyle,
}: DefaultNavBarProps) => {
  const themedStyles = useThemedStyles(styles);
  const theme = useTheme();
  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.chevronAndTitleContainer}>
        <TouchableOpacity
          style={themedStyles.pressableArea}
          onPress={iconOnPress}
        >
          <Icon
            testID="icon-test-id"
            name={'icon-chevron-left'}
            iconTypographyStyle={[
              themedStyles.chevronBack,
              chevronIconStyle ? chevronIconStyle : themedStyles.chevron,
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={themedStyles.titleContainer}>
        {children ? (
          children
        ) : (
          <Text
            style={[
              themedStyles.txtFix,
              themedStyles.text,
              colorTitleStyle
                ? { color: colorTitleStyle }
                : { color: theme.colors.brand_black_neutral },
            ]}
            testID={'default-text-id'}
            variant="headline-small"
          >
            {title ? title : 'Home'}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    txtFix: {
      marginTop: 5,
    },
    text: {
      width: '100%',
    },
    pressableArea: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      marginRight: 8,
    },
    chevronBack: {
      marginLeft: -4,
    },
    chevron: {
      fontSize: 24,
      color: theme.colors.content_primary,
    },
  });

export default DefaultPageNavbar;
