import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Text from '../../../../components/Text/Text';
import Icon from '../../../../components/atoms/Icon/Icon';
import type { ThemeContextType } from '../../../../theme/types';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import type { DefaultNavBarProps } from '../../../types';
import Badge from './Badge';
import useTheme from '../../../../hooks/useTheme';

function HomePageNavbar({
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
  const { width } = useWindowDimensions();
  const textWidth = { width: width - 120 };
  const theme = useTheme();

  return (
    <View style={themedStyles.container}>
      <Text
        style={[
          themedStyles.txtFix,
          textWidth,
          colorTitleStyle
            ? { color: colorTitleStyle }
            : { color: theme.colors.brand_black_neutral },
        ]}
        variant="headline-small"
        numberOfLines={1}
        testID={'title-home-page-navbar-id'}
      >
        {title ? title : ''}
      </Text>
      {leftIconName ? (
        <TouchableOpacity
          style={themedStyles.pressableArea}
          onPress={leftIconFn}
          testID={'left-icon-id'}
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
          testID={'right-icon-id'}
        >
          {renderBadge ? <Badge /> : null}
          <Icon
            name={rightIconName}
            iconTypographyStyle={
              iconTypographyStyle ? iconTypographyStyle : themedStyles.icon
            }
          />
        </TouchableOpacity>
      ) : null}
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
    text: { color: theme.colors.content_primary },
    iconContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    pressableArea: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 48,
      height: 48,
    },
    icon: {
      fontSize: 24,
    },
  });

export default HomePageNavbar;
