import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import BottomSheetWrapper from './BottomSheetWrapper';
import { BottomSheetEvents, BottomSheetProps } from './types';

interface BottomSheetComponentProps {
  testID?: string;
}

const BottomSheet = {
  Component: ({ testID }: BottomSheetComponentProps) => {
    return <BottomSheetWrapper testID={testID} />;
  },
  show: ({ variant = 'default', ...restArg }: BottomSheetProps) => {
    const props = { variant, ...restArg };
    DeviceEventEmitter.emit(BottomSheetEvents.SHOW, props);
  },
  hide: () => {
    DeviceEventEmitter.emit(BottomSheetEvents.HIDE);
  },
};

export default BottomSheet;
