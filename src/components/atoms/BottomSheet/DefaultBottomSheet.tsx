import React from 'react';
import type { BaseBottomSheetProps } from './types';
import BaseBottomSheet from './BaseBottomSheet';

const DefaultBottomSheet = (props: BaseBottomSheetProps) => {
  return <BaseBottomSheet {...props}>{props.children}</BaseBottomSheet>;
};

export default DefaultBottomSheet;
