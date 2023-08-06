import React from 'react';
import type {StyleProp, TextStyle} from 'react-native';
import Text from '../../../components/Text/Text';

import {iconNameList} from './iconList';

export type IconName = (typeof iconNameList)[number]['iconName'];
interface IconProps {
  name: IconName;
  iconTypographyStyle?: StyleProp<TextStyle>;
  testID?: string;
}

const Icon = ({name, iconTypographyStyle, testID}: IconProps) => {
  const icon = iconNameList.find(item => item.iconName === name);
  return (
    <Text style={iconTypographyStyle} variant="icon-font" testID={testID}>
      {icon?.value ?? ''}
    </Text>
  );
};

export default Icon;
