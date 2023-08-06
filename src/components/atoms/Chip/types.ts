import type {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface ChipProps {
  /* ID used for testing. */
  testID?: string;

  /* Sets the title (or text) inside of the chip*/
  text: string;

  variant?: 'default' | 'outline';

  /* Indicate if a chip is selected */
  selected?: boolean;

  /* Indicate if a chip is disabled */
  disabled?: boolean;

  /* Callback when the chip is pressed */
  onPress?: () => void;

  /* Background color of the chip */
  backgroundColor?: string;

  /* Styles that are applied to the text of the chip */
  textStyle?: StyleProp<TextStyle>;

  /* Styles that are applied to the outline of the chip */
  style?: StyleProp<ViewStyle>;

  /* Sets the outline color of the chip */
  borderColor?: string;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  leftIcon?: ImageSourcePropType;
}
