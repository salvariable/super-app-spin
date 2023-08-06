import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseDisclaimer from './BaseDisclaimer';

interface Props {
  text: string;
  testID?: string;
}

const Warning = ({ text, testID }: Props) => {
  const theme = useTheme();

  return (
    <BaseDisclaimer
      text={text}
      testID={testID}
      backgroundColor={theme.colors.WARNING_LIGHT}
      textColor={'black'}
      iconColor={theme.colors.WARNING_DARK}
    />
  );
};

export default Warning;
