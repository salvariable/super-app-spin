import type {
  GestureResponderEvent,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from 'react-native';

export interface BaseTextInputProps extends Partial<TextInputProps> {
  /** Text input styles */
  style?: StyleProp<ViewStyle>;
  /** string for testing */
  testID?: string;
  /** regex's used to validate input */
  pattern?: string | string[];
  /** Component rendered in the right side of the input */
  rightSection?: React.ReactElement;
  /** style of right component */
  rightSectionStyle?: StyleProp<ViewStyle>;
  /** Component rendered in the left side of the input */
  leftSection?: React.ReactElement;
  /** style of left component */
  leftSectionStyle?: StyleProp<ViewStyle>;
  /** customized color styles for input */
  inputColors?: {
    primary: string;
    secondary: string;
    backgroundLine: string;
  };
  /** callback when input is valid */
  onValidation?: (isValid: boolean[]) => void;
  /** label over the input that goes up when focus */
  label: string;
  /** text on input when no data on it */
  placeHolder?: string;
  /** message to show on bottom when error */
  error?: string;
  /** type of text input*/
  numericInput?: boolean;
  /** used on password input to hide the entered characters*/
  secureInput?: boolean;
  /** variable that handle the value */
  value: string;
  /** max number of characters allowed on the input*/
  maxLength?: number;
  activeColor?: string;
  /** callback when value change*/
  onChangeText: (text: string) => void;
  /** callback when blur*/
  onEditFinish?: () => void;
  /** emails domains helppers buttons*/
  domainList?: string[];
  /** callback when domain item has been pressed */
  onDomainItemPress?: (domain: string, selected: boolean) => void;
  onTouchStart?: ((event: GestureResponderEvent) => void) | undefined;
  /** enable or disable input*/
  editable?: boolean;
  /** message on bottom when */
  bottomMessage?: string;
  /** customOnBlur custom function */
  customOnBlur?: () => void;
  /** customOnFocus custom function */
  customOnFocus?: () => void;
  /**
   * A string representing the mask to apply to the phone number. This mask
   * defines the format in which the phone number will be displayed.
   *
   * Each 'x' in the mask represents a digit from the input value. For example,
   * in the mask '+xx xxx xxx xxxx', each 'x' will be replaced by a digit from
   * the phone number, and the spaces and plus sign will be included as-is.
   *
   * Note that this mask doesn't validate the phone number; it only controls its
   * formatting. Make sure the input value has been validated before applying the mask.
   */
  phoneMaskSchema?: string;

  readOnly?: boolean;
  /** callback when user pressed submit button on keyboard */
  onSubmitEditing?: () => void;
  /** label for the input accessory button */
  inputAccessoryLabel?: string;
  /** callback when user pressed input accessory button */
  inputAccessoryAction?: () => void;
  /** remove input accessory view */
  hideInputAccessoryView?: boolean;
}

export enum TextInputVariant {
  'default',
  'numeric',
  'password',
  'mask',
  'email',
}

export enum MaskInputVariant {
  'payment',
  'phone',
}
