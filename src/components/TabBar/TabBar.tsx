/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Text from '../Text/Text';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar as RNTabBar,
  TabBarIndicatorProps,
  TabBarItemProps,
} from 'react-native-tab-view';
import type {
  Scene,
  Event,
} from 'react-native-tab-view/lib/typescript/src/types';
import useThemedStyles from '../../hooks/useThemedStyles';
import type { ThemeContextType } from 'src/theme/types';
import useTheme from '../../hooks/useTheme';

function TabBar(
  props: JSX.IntrinsicAttributes &
    SceneRendererProps & {
      navigationState: NavigationState<Route>;
      scrollEnabled?: boolean | undefined;
      bounces?: boolean | undefined;
      activeColor?: string | undefined;
      inactiveColor?: string | undefined;
      pressColor?: string | undefined;
      pressOpacity?: number | undefined;
      getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined;
      getAccessible?:
        | ((scene: Scene<Route>) => boolean | undefined)
        | undefined;
      getAccessibilityLabel?:
        | ((scene: Scene<Route>) => string | undefined)
        | undefined;
      getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined;
      renderLabel?:
        | ((
            scene: Scene<Route> & { focused: boolean; color: string },
          ) => React.ReactNode)
        | undefined;
      renderIcon?:
        | ((
            scene: Scene<Route> & { focused: boolean; color: string },
          ) => React.ReactNode)
        | undefined;
      renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined;
      renderIndicator?:
        | ((props: TabBarIndicatorProps<Route>) => React.ReactNode)
        | undefined;
      renderTabBarItem?:
        | ((
            props: TabBarItemProps<Route> & { key: string },
          ) => React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
          >)
        | undefined;
      onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined;
      onTabLongPress?: ((scene: Scene<Route>) => void) | undefined;
      tabStyle?: StyleProp<ViewStyle>;
      indicatorStyle?: StyleProp<ViewStyle>;
      indicatorContainerStyle?: StyleProp<ViewStyle>;
      labelStyle?: StyleProp<TextStyle>;
      contentContainerStyle?: StyleProp<ViewStyle>;
      style?: StyleProp<ViewStyle>;
      gap?: number | undefined;
    },
) {
  const themeStyle = useThemedStyles(styles);
  const theme = useTheme();
  const routesLength = props?.navigationState?.routes?.length;
  const minRoutesToEnableScroll = 2;

  return (
    <RNTabBar
      {...props}
      pressColor={theme.colors.surface_primary}
      indicatorStyle={themeStyle.indicator}
      style={themeStyle.tabBar}
      renderLabel={({ route, focused }) => (
        <Text
          variant={focused ? 'label-small-bold' : 'label-small'}
          style={{
            ...themeStyle.text,
            color: focused
              ? `${theme.colors.content_primary}`
              : `${theme.colors.content_secondary}`,
          }}
        >
          {`${route.title} `}
        </Text>
      )}
      scrollEnabled={routesLength > minRoutesToEnableScroll}
    />
  );
}

const styles = (themeStyle: ThemeContextType) => ({
  ...themeStyle,
  ...StyleSheet.create({
    tabBar: {
      backgroundColor: themeStyle.colors.surface_primary,
      elevation: 4,
      height: 48,
      shadowColor: `${themeStyle.colors.ui_info}80`,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.17,
      shadowRadius: 2.54,
    },
    indicator: {
      backgroundColor: themeStyle.colors.ui_active,
      height: 4,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    text: {
      textAlign: 'center',
    },
  }),
});

export default TabBar;
