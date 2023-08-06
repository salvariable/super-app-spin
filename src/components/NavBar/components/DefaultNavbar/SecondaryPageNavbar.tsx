import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from '../../../../components/Text/Text';
import Icon from '../../../../components/atoms/Icon/Icon';
import type { ThemeContextType } from '../../../../theme/types';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import type { DefaultNavBarProps } from '../../../types';
import Badge from './Badge';
import useTheme from '../../../../hooks/useTheme';

function SecondaryPageNavbar({
  title,
  leftIconName,
  leftIconFn,
  rightIconFn,
  rightIconName,
  iconOnPress,
  colorTitleStyle,
  iconTypographyStyle,
  chevronIconStyle,
  renderBadge,
  customPressableAreaStyle,
}: DefaultNavBarProps) {
  const themedStyles = useThemedStyles(styles);
  const theme = useTheme();

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.chevronAndTitleContainer}>
        <TouchableOpacity
          style={[
            customPressableAreaStyle
              ? customPressableAreaStyle
              : themedStyles.btnBack,
          ]}
          onPress={iconOnPress}
        >
          <Icon
            name={'icon-chevron-left'}
            iconTypographyStyle={[
              chevronIconStyle ? chevronIconStyle : themedStyles.chevron,
            ]}
          />
        </TouchableOpacity>
        <Text
          style={[
            themedStyles.txtFix,
            themedStyles.text,
            colorTitleStyle
              ? { color: colorTitleStyle }
              : { color: theme.colors.brand_black_neutral },
          ]}
          variant="headline-small"
          numberOfLines={1}
        >
          {title ? title : ''}
        </Text>
      </View>

      <View style={themedStyles.iconContainer}>
        {leftIconName ? (
          <TouchableOpacity
            style={themedStyles.pressableArea}
            onPress={leftIconFn}
          >
            <Icon
              name={leftIconName}
              iconTypographyStyle={
                iconTypographyStyle ? iconTypographyStyle : themedStyles.icon
              }
            />
          </TouchableOpacity>
        ) : null}

        {rightIconName ? (
          <TouchableOpacity
            style={themedStyles.pressableArea}
            onPress={rightIconFn}
          >
            {renderBadge ? <Badge /> : null}
            <Icon
              name={rightIconName}
              iconTypographyStyle={[
                iconTypographyStyle ? iconTypographyStyle : themedStyles.icon,
              ]}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    txtFix: {
      marginTop: 5,
    },
    text: { paddingRight: 10 },
    pressableArea: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 48,
      height: 48,
    },
    btnBack: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      width: 48,
      /* Workaround, the paddingHorizontal of the global navbar is 16 */
      marginLeft: -16,
    },
    chevronAndTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      fontSize: 24,
      color: theme.colors.content_primary,
    },
    chevron: {
      fontSize: 24,
      color: theme.colors.content_primary,
    },
  });

export default SecondaryPageNavbar;
