import React from 'react';
import type { DefaultNavBarProps, NavbarProps } from '../types';
import DefaultNavBar from './components/DefaultNavbar/DefaultNavBar';
import PrimaryNavBar from './components/PrimaryNavBar';

function NavBar({
  variant,
  leftSection,
  iconOnPress,
  navBarTestId,
  iconPath,
  iconTestId,
  iconStyle,
  navBarStyle,
  title,
  children,
  navbarDefaultVariant,
  leftIconName,
  leftIconFn,
  rightIconFn,
  rightIconName,
  statusBarColor,
  safeAreaContainerStyle,
  colorTitleStyle,
  iconTypographyStyle,
  renderBadge,
  chevronIconStyle,
  customPressableAreaStyle,
}: NavbarProps & DefaultNavBarProps) {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryNavBar
          leftSection={leftSection}
          iconOnPress={iconOnPress}
          iconPath={iconPath}
          iconTestId={iconTestId}
          navBarStyle={navBarStyle}
          navBarTestId={navBarTestId}
          title={title}
        >
          {children}
        </PrimaryNavBar>
      );
    case 'default':
      return (
        <DefaultNavBar
          iconOnPress={iconOnPress}
          iconPath={iconPath}
          iconTestId={iconTestId}
          iconStyle={iconStyle}
          navBarStyle={navBarStyle}
          navBarTestId={navBarTestId}
          title={title}
          navbarDefaultVariant={navbarDefaultVariant}
          leftIconFn={leftIconFn}
          leftIconName={leftIconName}
          rightIconFn={rightIconFn}
          rightIconName={rightIconName}
          statusBarColor={statusBarColor}
          safeAreaContainerStyle={safeAreaContainerStyle}
          colorTitleStyle={colorTitleStyle}
          iconTypographyStyle={iconTypographyStyle}
          renderBadge={renderBadge}
          chevronIconStyle={chevronIconStyle}
          customPressableAreaStyle={customPressableAreaStyle}
        >
          {children}
        </DefaultNavBar>
      );
  }
}

export default NavBar;
