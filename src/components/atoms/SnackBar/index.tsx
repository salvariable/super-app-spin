import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import SnackbarDisplay from './SnackBarDisplay';
import {
  SnackBarProps,
  SnackBarVariant,
  DEFAULT_SNACKBAR_STYLES,
  INFO_SNACKBAR_STYLES,
  SUCCESS_SNACKBAR_STYLES,
  WARNING_SNACKBAR_STYLES,
  ERROR_SNACKBAR_STYLES,
} from './types';

interface Props {
  text: string;
  variant?: keyof typeof SnackBarVariant | string;
  options?: object;
  testID?: string;
}

const SnackBar = {
  Component: ({ testID }: SnackBarProps) => {
    return <SnackbarDisplay testID={testID} />;
  },
  show: (props: Props & SnackBarProps) => {
    switch (props.variant) {
      case 'info':
        DeviceEventEmitter.emit('SHOW_SNACKBAR', {
          ...props,
          ...INFO_SNACKBAR_STYLES,
        });
        break;
      case 'success':
        DeviceEventEmitter.emit('SHOW_SNACKBAR', {
          ...props,
          ...SUCCESS_SNACKBAR_STYLES,
        });
        break;
      case 'warning':
        DeviceEventEmitter.emit('SHOW_SNACKBAR', {
          ...props,
          ...WARNING_SNACKBAR_STYLES,
        });
        break;
      case 'error':
        DeviceEventEmitter.emit('SHOW_SNACKBAR', {
          ...props,
          ...ERROR_SNACKBAR_STYLES,
        });
        break;
      default:
        DeviceEventEmitter.emit('SHOW_SNACKBAR', {
          ...props,
          ...DEFAULT_SNACKBAR_STYLES,
        });
        break;
    }
  },
};

export default SnackBar;
