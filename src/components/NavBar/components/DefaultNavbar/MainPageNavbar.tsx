import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from '../../../../components/Text/Text';
import Icon from '../../../../components/atoms/Icon/Icon';
import type { ThemeContextType } from '../../../../theme/types';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import type { DefaultNavBarProps } from '../../../types';
import Badge from './Badge';
import useTheme from '../../../../hooks/useTheme';

function MainPageNavbar({
  title,
  leftIconName,
  leftIconFn,
  rightIconFn,
  rightIconName,
  colorTitleStyle,
  iconTypographyStyle,
  renderBadge,
}: DefaultNavBarProps) {
  const themedStyles = useThemedStyles(styles);
  const textMaxWidth = { maxWidth: 228 };
  const theme = useTheme();

  return (
    <View style={themedStyles.container}>
      <TouchableOpacity onPress={leftIconFn} style={themedStyles.pressableArea}>
        {leftIconName && (
          <Icon
            name={leftIconName}
            iconTypographyStyle={
              iconTypographyStyle ? iconTypographyStyle : themedStyles.icon
            }
          />
        )}
      </TouchableOpacity>

      <Text
        style={[
          themedStyles.txtFix,
          textMaxWidth,
          colorTitleStyle
            ? { color: colorTitleStyle }
            : { color: theme.colors.brand_black_neutral },
        ]}
        variant="headline-small"
        numberOfLines={1}
      >
        {title ? title : 'Main'}
      </Text>

      <TouchableOpacity
        style={themedStyles.pressableArea}
        onPress={rightIconFn}
      >
        {rightIconName && (
          <Icon
            name={rightIconName}
            iconTypographyStyle={
              iconTypographyStyle ? iconTypographyStyle : themedStyles.icon
            }
          />
        )}
        {renderBadge ? <Badge /> : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    txtFix: {
      marginTop: 5,
    },
    text: {
      color: theme.colors.content_primary,
      textAlign: 'center',
    },
    iconContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    pressableArea: {
      justifyContent: 'center',
      width: 48,
      height: 48,
      alignItems: 'center',
    },
    icon: {
      fontSize: 24,
    },
  });

export default MainPageNavbar;
