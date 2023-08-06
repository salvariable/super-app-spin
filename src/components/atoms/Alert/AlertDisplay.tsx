/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, DeviceEventEmitter, Platform } from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../../theme/types';
import useTheme from '../../../hooks/useTheme';
import Text from '../../Text/Text';

import IconButton from '../IconButton/IconButton';
import Icon, { IconName } from '../Icon/Icon';
import type { AlertDisplayProps } from './types';

const SHADOW_COLOR_DEFAULT_IOS = '#c9d1d9';
const SHADOW_COLOR_DEFAULT_ANDROID = '#8b949e';

const DEFAULT_ICON_NAME: IconName = 'icon-diamond';

type ComponentProps = {
  testID?: string;
};

const AlertDisplay = ({ testID }: ComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [iconBackgroundColor, setIconBackgroundColor] = useState('transparent');
  const [iconColor, setIconColor] = useState('');
  const [iconName, setIconName] = useState<IconName>(DEFAULT_ICON_NAME);
  const theme = useTheme();
  const themedStyle = useThemedStyles(styles);

  useEffect(() => {
    DeviceEventEmitter.addListener('SHOW_ALERT', onNewAlert);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNewAlert = ({
    title,
    details,
    variant = 'default',
    iconName = DEFAULT_ICON_NAME,
    iconBackgroundColor = 'transparent',
  }: AlertDisplayProps) => {
    setIsVisible(true);
    setTitle(title);
    setDetails(details);
    setIconBackgroundColor(iconBackgroundColor);
    setIconColor(
      variant === 'default'
        ? theme.colors.brand_black_neutral
        : theme.colors.surface_primary,
    );
    setIconName(iconName);
  };

  const onCallbackCloseHandler = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <View
          testID={testID}
          style={themedStyle.alertContainer}
          accessibilityRole="alert"
          onAccessibilityEscape={onCallbackCloseHandler}
        >
          <View
            style={[
              themedStyle.iconContainer,
              { backgroundColor: iconBackgroundColor },
            ]}
            testID="icon-container-test-id"
          >
            <Icon
              name={iconName}
              iconTypographyStyle={[
                themedStyle.icon,
                {
                  color: iconColor,
                },
              ]}
              testID={`${iconName}-test-id`}
            />
          </View>
          <View style={themedStyle.textContainer} accessible={true}>
            <View style={themedStyle.layout}>
              <Text
                variant="default-body"
                style={[themedStyle.text, themedStyle.title]}
                numberOfLines={2}
                testID="title-test-id"
              >
                {title}
              </Text>
            </View>
            <View style={themedStyle.layout}>
              <Text
                variant="small-body"
                style={[themedStyle.text, themedStyle.details]}
                numberOfLines={2}
                testID="details-test-id"
              >
                {details}
              </Text>
            </View>
          </View>
          <IconButton
            iconOnPress={onCallbackCloseHandler}
            iconName="icon-close"
            iconTypographyStyle={themedStyle.closeIcon}
            iconTestId="close-button"
          />
        </View>
      )}
    </>
  );
};

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    alertContainer: {
      backgroundColor: theme.colors.surface_primary,
      position: 'absolute',
      top: 40,
      left: '4%',
      right: '4%',
      zIndex: 100,
      elevation: 10,
      width: '90%',
      borderRadius: 12,
      minHeight: 72,
      maxHeight: 122,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowRadius: 3.5,
      shadowOpacity: 1,
      shadowColor:
        Platform.OS === 'android'
          ? SHADOW_COLOR_DEFAULT_ANDROID
          : SHADOW_COLOR_DEFAULT_IOS,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      paddingRight: 12,
      width: '100%',
      paddingVertical: 12,
    },
    layout: {
      width: '100%',
    },
    text: {
      textAlign: 'left',
      fontWeight: '600',
      letterSpacing: -0.2,
      color: theme.colors.content_primary,
    },
    title: {
      fontWeight: 'bold',
      marginBottom: 8,
    },
    details: {
      color: theme.colors.content_secondary,
    },
    iconContainer: {
      borderTopStartRadius: 12,
      borderBottomStartRadius: 12,
      justifyContent: 'center',
      width: 48,
      height: '100%',
      marginRight: 12,
    },
    icon: {
      fontSize: 24,
      alignContent: 'center',
      marginHorizontal: 12,
      color: theme.colors.surface_primary,
    },
    closeIcon: {
      color: theme.colors.content_tertiary,
      fontSize: 18,
    },
  });

export default AlertDisplay;
