import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import HomePageNavbar from './HomePageNavbar';
import MainPageNavbar from './MainPageNavbar';
import SecondaryPageNavbar from './SecondaryPageNavbar';
import DefaultPageNavbar from './DefaultPageNavbar';
import type { DefaultNavBarProps } from '../../../types';
import DeviceInfo from 'react-native-device-info';

function DefaultNavBar({
  navBarStyle,
  navBarTestId,
  title,
  children,
  iconOnPress,
  iconPath,
  navbarDefaultVariant = 'default',
  leftIconFn,
  leftIconName,
  rightIconFn,
  rightIconName,
  statusBarColor,
  safeAreaContainerStyle,
  colorTitleStyle,
  iconTypographyStyle,
  renderBadge,
  chevronIconStyle,
  customPressableAreaStyle,
}: DefaultNavBarProps) {
  const themedStyles = useThemedStyles(styles);
  const hasDynamicIsland = DeviceInfo.hasDynamicIsland();

  return (
    <SafeAreaView
      style={[
        safeAreaContainerStyle
          ? safeAreaContainerStyle
          : themedStyles.safeAreaContainer,
        hasDynamicIsland &&
          themedStyles.safeAreaContainerWithDynamicIsland &&
          safeAreaContainerStyle,
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={statusBarColor ? statusBarColor : 'transparent'}
      />
      <View
        style={navBarStyle ? navBarStyle : themedStyles.container}
        testID={navBarTestId}
      >
        {navbarDefaultVariant === 'home-page' && (
          <HomePageNavbar
            title={title}
            leftIconFn={leftIconFn}
            leftIconName={leftIconName}
            rightIconFn={rightIconFn}
            rightIconName={rightIconName}
            iconOnPress={iconOnPress}
            colorTitleStyle={colorTitleStyle}
            iconTypographyStyle={iconTypographyStyle}
            renderBadge={renderBadge}
          />
        )}
        {navbarDefaultVariant === 'main-page' && (
          <MainPageNavbar
            title={title}
            leftIconFn={leftIconFn}
            leftIconName={leftIconName}
            rightIconFn={rightIconFn}
            rightIconName={rightIconName}
            iconOnPress={iconOnPress}
            colorTitleStyle={colorTitleStyle}
            iconTypographyStyle={iconTypographyStyle}
            renderBadge={renderBadge}
          />
        )}
        {navbarDefaultVariant === 'secondary-page' && (
          <SecondaryPageNavbar
            title={title}
            leftIconFn={leftIconFn}
            leftIconName={leftIconName}
            rightIconFn={rightIconFn}
            rightIconName={rightIconName}
            iconOnPress={iconOnPress}
            colorTitleStyle={colorTitleStyle}
            iconTypographyStyle={iconTypographyStyle}
            renderBadge={renderBadge}
            chevronIconStyle={chevronIconStyle}
            customPressableAreaStyle={customPressableAreaStyle}
          />
        )}

        {navbarDefaultVariant === 'default' && (
          <DefaultPageNavbar
            title={title}
            leftIconFn={leftIconFn}
            leftIconName={leftIconName}
            rightIconFn={rightIconFn}
            rightIconName={rightIconName}
            iconOnPress={iconOnPress}
            iconPath={iconPath}
            colorTitleStyle={colorTitleStyle}
            iconTypographyStyle={iconTypographyStyle}
            renderBadge={renderBadge}
            chevronIconStyle={chevronIconStyle}
            customPressableAreaStyle={customPressableAreaStyle}
          >
            {children}
          </DefaultPageNavbar>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = () =>
  StyleSheet.create({
    safeAreaContainer: {
      backgroundColor: 'transparent',
    },
    safeAreaContainerWithDynamicIsland: {
      marginTop: 59,
      backgroundColor: 'transparent',
    },
    container: {
      height: 64,
      backgroundColor: 'transparent',
      paddingLeft: 16,
      paddingRight: 8,
      paddingVertical: 8,
      flexDirection: 'row',
    },
  });

export default DefaultNavBar;
