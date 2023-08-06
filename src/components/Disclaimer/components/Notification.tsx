import React from 'react';
import BaseDisclaimer from './BaseDisclaimer';
import useTheme from '../../../hooks/useTheme';

interface Props {
  text: string;
  testID?: string;
}

const Notification = ({ text, testID }: Props) => {
  const theme = useTheme();

  return (
    <BaseDisclaimer
      text={text}
      testID={testID}
      backgroundColor={theme.colors.BRAND_DEFAULT_LIGHT_100}
    />
  );
};

export default Notification;
