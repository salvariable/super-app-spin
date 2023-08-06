import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import type { DisclaimerVariant } from '../types';
import Notification from './components/Notification';
import Warning from './components/Warning';
import Alert from './components/Alert';
import BaseDisclaimer from './components/BaseDisclaimer';

interface Props {
  variant: keyof typeof DisclaimerVariant;
  text: string;
  testID?: string;
}

type ConditionalProps =
  | {
      icon?: never;
      iconColor?: never;
      backgroundColor?: never;
      textColor?: never;
    }
  | {
      icon?: ImageSourcePropType;
      iconColor?: string;
      backgroundColor?: string;
      textColor?: string;
    };

const Disclaimer = (props: Props & ConditionalProps) => {
  const { variant } = props;

  switch (variant) {
    case 'notification':
      return <Notification {...props} />;
    case 'warning':
      return <Warning {...props} />;
    case 'alert':
      return <Alert {...props} />;
    default:
      return <BaseDisclaimer {...props} />;
  }
};

export default Disclaimer;
