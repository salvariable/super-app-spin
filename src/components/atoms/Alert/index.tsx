import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import AlertDisplay from './AlertDisplay';
import type { AlertProps, ComponentProps } from './types';
import {
  DEFAULT_ALERT_STYLES,
  SUCCESS_ALERT_STYLES,
  INFO_ALERT_STYLES,
  WARNING_ALERT_STYLES,
  ERROR_ALERT_STYLES,
} from './constants';

const Alert = {
  Component: ({ testID }: ComponentProps) => {
    return <AlertDisplay testID={testID} />;
  },
  show: (props: ComponentProps & AlertProps) => {
    switch (props.variant) {
      case 'info':
        DeviceEventEmitter.emit('SHOW_ALERT', {
          ...props,
          ...INFO_ALERT_STYLES,
        });
        break;
      case 'success':
        DeviceEventEmitter.emit('SHOW_ALERT', {
          ...props,
          ...SUCCESS_ALERT_STYLES,
        });
        break;
      case 'warning':
        DeviceEventEmitter.emit('SHOW_ALERT', {
          ...props,
          ...WARNING_ALERT_STYLES,
        });
        break;
      case 'error':
        DeviceEventEmitter.emit('SHOW_ALERT', {
          ...props,
          ...ERROR_ALERT_STYLES,
        });
        break;
      default:
        DeviceEventEmitter.emit('SHOW_ALERT', {
          ...props,
          ...DEFAULT_ALERT_STYLES,
        });
        break;
    }
  },
};

export default Alert;
