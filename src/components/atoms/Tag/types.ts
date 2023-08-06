import type { ImageSourcePropType } from 'react-native';

export enum TagVariant {
  'informational',
  'activated',
  'paused',
  'urgent',
  'points',
}

enum Size {
  'small',
  'large',
}

export interface TagProps {
  /* ID used for testing. */
  testID?: string;

  /* Sets the title (or text) inside of the tag*/
  text: string;

  /* Sets the variant, by default is 'informational' */
  variant?: keyof typeof TagVariant;

  /* Background color of the tag */
  backgroundColor?: string;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  leftIcon?: ImageSourcePropType;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  rightIcon?: ImageSourcePropType;

  /* Sets the inverted color*/
  inverted?: boolean;

  /* Sets the size, by default is 'small' */
  size?: keyof typeof Size;
}
