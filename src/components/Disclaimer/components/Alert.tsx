import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseDisclaimer from './BaseDisclaimer';

interface Props {
  text: string;
  testID?: string;
}

const Alert = ({ text, testID }: Props) => {
  const theme = useTheme();

  return (
    <BaseDisclaimer
      text={text}
      testID={testID}
      backgroundColor={theme.colors.DANGER_LIGHT}
      textColor={'black'}
      iconColor={theme.colors.DANGER_DARK}
    />
  );
};

export default Alert;
