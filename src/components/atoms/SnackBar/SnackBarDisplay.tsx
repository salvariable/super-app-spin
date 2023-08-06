/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  DeviceEventEmitter,
  Platform,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import useTheme from '../../../hooks/useTheme';
import Text from '../../Text/Text';
import type { ActionSnackBar, SnackBarProps } from './types';
import Icon, { IconName } from '../Icon/Icon';
import DeviceInfo from 'react-native-device-info';

const DEFAULT_ICON_NAME = 'icon-check';
const CLOSE_ICON_NAME = 'icon-close';

const SHADOW_COLOR_DEFAULT_IOS = '#c9d1d9';
const SHADOW_COLOR_DEFAULT_ANDROID = '#8b949e';

const OS_VERSION = Platform.Version as number;

type ComponentProps = {
  testID?: string;
};

const SnackbarDisplay = ({ testID }: ComponentProps) => {
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [text, setText] = useState('');
  const [withIcon, setWithIcon] = useState(false);
  const [iconName, setIconName] = useState<IconName>(DEFAULT_ICON_NAME);
  const [iconColor, setIconColor] = useState('');
  const [closeColor, setCloseColor] = useState('');
  const [actionLabelColor, setActionLabelColor] = useState('');
  const [textColor, setTextColor] = useState(theme.colors.content_primary);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [timer, setTimer] = useState(2000);
  const [onCloseCallback, setOnCloseCallback] =
    useState<() => void | undefined>();
  const [action, setAction] = useState<ActionSnackBar>();
  const [position, setPosition] = useState('top');
  const hasNotch = DeviceInfo.hasNotch();

  const Button = Platform.OS === 'android' ? Pressable : TouchableOpacity;

  const iosNavBarHeight = hasNotch ? 79 : 49;

  useEffect(() => {
    DeviceEventEmitter.addListener('SHOW_SNACKBAR', onNewSnackbar);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetStates = () => {
    setText('');
    setWithIcon(false);
    setIconName(DEFAULT_ICON_NAME);
    setIconColor('');
    setCloseColor('');
    setTimer(2000);
    setBackgroundColor('');
    setTextColor(theme.colors.content_primary);
    setActionLabelColor('');
    setAction(undefined);
    setPosition('top');
  };

  useEffect(() => {
    let timeOutId: ReturnType<typeof setTimeout>;
    if (text && !onCloseCallback) {
      timeOutId = setTimeout(() => resetStates(), timer);
    }
    return () => {
      clearTimeout(timeOutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onCloseCallback, text, timer]);

  const onNewSnackbar = (options: SnackBarProps) => {
    setText(options.text || '');
    setActionLabelColor(
      options.actionLabelColor || theme.colors.surface_primary,
    );
    setAction(options.action);
    setTimer(options.duration || timer);
    setWithIcon(options.withIcon || withIcon);
    setIconName(options.iconName || iconName);
    setIconColor(options.iconColor || iconColor);
    setCloseColor(options.closeColor || closeColor);
    setBackgroundColor(options.backgroundColor || backgroundColor);
    setTextColor(options.textColor || textColor);
    setOnCloseCallback(() => options.onClose || undefined);
    setPosition(options.position || 'top');
  };
  return (
    <>
      {text.length > 0 ? (
        <View
          testID={testID}
          style={[
            style.snackBarContainer,
            {
              backgroundColor: backgroundColor,
            },

            position === 'bottom'
              ? { bottom: Platform.OS === 'ios' ? iosNavBarHeight : 62 }
              : { top: 50 },
          ]}
        >
          {withIcon && (
            <View style={style.iconContainer} testID="icon-test-id">
              <Icon
                testID={`${iconName}-test-id`}
                name={iconName}
                iconTypographyStyle={{
                  color: iconColor,
                  fontSize: 16,
                }}
              />
            </View>
          )}
          <View style={style.textContainer}>
            <View style={style.layout}>
              <Text
                variant="small-body"
                style={[
                  style.text,
                  {
                    color: textColor,
                  },
                ]}
                numberOfLines={2}
              >
                {text}
              </Text>
            </View>
          </View>
          {action?.onAction && (
            <Button
              onPress={() => {
                resetStates();
                action.onAction && action.onAction();
              }}
            >
              {/**
               *  TODO: Se deberá agregar el tipo de variante label-xs que se aplica con la nueva fuente Inter.
               */}
              <Text
                style={[{ color: actionLabelColor }, style.actionLabel]}
                variant="extra-small-body"
              >
                {action.label}
              </Text>
            </Button>
          )}
          {onCloseCallback && (
            <Button
              testID="close-button"
              style={[
                style.closeContainer,
                {
                  borderLeftColor: `${closeColor}80`,
                },
              ]}
              onPress={() => {
                resetStates();
                onCloseCallback();
              }}
            >
              <Icon
                name={CLOSE_ICON_NAME}
                iconTypographyStyle={{
                  color: closeColor,
                  marginLeft: 14,
                  fontSize: 16,
                }}
              />
            </Button>
          )}
        </View>
      ) : null}
    </>
  );
};

const styles = () =>
  StyleSheet.create({
    snackBarContainer: {
      position: 'absolute',
      left: '4%',
      right: '4%',
      zIndex: 100,
      elevation: OS_VERSION < 28 ? 1 : 10,
      width: '90%',
      borderRadius: 12,
      paddingRight: 14,
      paddingLeft: 15,
      paddingVertical: 12,
      minHeight: 48,
      maxHeight: 64,
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
    icon: {
      width: 16,
      maxHeight: 16,
    },
    actionLabel: {
      marginRight: 10,
      fontSize: 12,
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingRight: 12,
      width: '100%',
    },
    layout: {
      width: '100%',
    },
    text: {
      lineHeight: 20,
      letterSpacing: 0.5,
      textAlign: 'left',
      fontSize: 14,
    },
    iconContainer: {
      justifyContent: 'center',
      marginRight: 12,
    },
    closeContainer: {
      borderLeftWidth: 0.9,
      marginLeft: 7,
      justifyContent: 'center',
      height: '120%',
    },
  });

export default SnackbarDisplay;
