import type { StyleProp, ViewStyle } from 'react-native';

export interface BaseBottomSheetProps {
  /** Set title of bottom sheet */
  title: string;

  /** Set children on bottom sheet body */
  children: React.ReactNode;

  /** Callback when bottom sheet has been close */
  onClose?: () => void;

  /** Set styles that are applied to the bottom sheet body  */
  contentStyle?: StyleProp<ViewStyle>;

  /** Set background color that is applied to the bottom sheet header */
  headerBackgroundColor?: string;

  /** Set background color that is applied to the bottom sheet body */
  bodyBackgroundColor?: string;

  /** Set position of close icon, by default is 'right' */
  closeIconPosition?: keyof typeof CloseIconPosition;

  /** Set ID used for testing */
  testID?: string;

  visible: boolean;

  onCallbackClose: () => void;

  /**
   * An array of Actions that have a text and onPress property.
   * @summary: Only supports three action buttons [primary, secondary, hyperlink]
   */
  buttons?: ActionsBottomSheet[];
}

export interface ActionsBottomSheet {
  text: string;
  onPress: () => void;
  testID?: string;
}

export enum BottomSheetVariant {
  'default',
}

export enum CloseIconPosition {
  'left',
  'right',
}

export type BottomSheetProps = Omit<
  BaseBottomSheetProps,
  'visible' | 'onCallbackClose'
> & {
  variant?: keyof typeof BottomSheetVariant;
};

export enum BottomSheetEvents {
  SHOW = 'show',
  HIDE = 'hide',
}
