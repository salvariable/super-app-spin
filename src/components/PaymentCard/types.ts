import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

interface HeaderCardProps {
  testID?: string;
  alias: string | undefined;
  brandName: string | undefined;
  brandIcon?: ImageSourcePropType | undefined;
  brandBlur?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

interface Gradient {
  enabled: Directions;
  disabled: Directions;
}

export interface Directions {
  left: string;
  center: string;
  right: string;
}

export { HeaderCardProps, Gradient };
