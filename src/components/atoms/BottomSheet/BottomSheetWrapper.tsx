import React, { useState, useEffect } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import DefaultBottomSheet from './DefaultBottomSheet';
import {
  BaseBottomSheetProps,
  ActionsBottomSheet,
  BottomSheetEvents,
  BottomSheetProps,
  BottomSheetVariant,
  CloseIconPosition,
} from './types';

interface BottomSheetComponentProps {
  testID?: string;
}

type CloseIconPositionType = keyof typeof CloseIconPosition | undefined;

const isBottomSheetValid = (value: string) => {
  return Object.values(BottomSheetVariant).includes(value);
};

const BottomSheetWrapper = (wrapperProps: BottomSheetComponentProps) => {
  const testID = wrapperProps.testID;
  const [variant, setVariant] = useState<keyof typeof BottomSheetVariant>();
  const [title, setTitle] = useState('');
  const [children, setChildren] = useState<React.ReactNode>();
  const [contentStyle, setContentStyle] = useState<StyleProp<ViewStyle>>();
  const [onClose, setOnClose] = useState<() => void>();
  const [visible, setVisible] = useState(false);
  const [buttons, setButtons] = useState<ActionsBottomSheet[] | undefined>([]);
  const [closeIconPosition, setCloseIconPosition] =
    useState<CloseIconPositionType>();
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState<string>();
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState<string>();

  useEffect(() => {
    DeviceEventEmitter.addListener(BottomSheetEvents.SHOW, onShow);
    DeviceEventEmitter.addListener(BottomSheetEvents.HIDE, onHide);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  const onShow = (bottomSheetProps: BottomSheetProps) => {
    const { variant = 'default', ...restProps } = bottomSheetProps;

    if (!isBottomSheetValid(variant)) {
      throw new Error(
        `Unknown '${variant}'. Please only use ${Object.values(
          BottomSheetVariant,
        )
          .map((value) => (typeof value === 'string' ? value : null))
          .filter((value) => value)}.`,
      );
    }

    if (restProps.buttons && restProps.buttons?.length > 3) {
      throw new Error('Only supports three action buttons');
    }

    setVariant(variant);
    setTitle(restProps.title);
    setChildren(restProps.children);
    setContentStyle(restProps.contentStyle);
    setOnClose(() => restProps.onClose);
    setVisible(true);
    setButtons(restProps.buttons);
    setCloseIconPosition(restProps.closeIconPosition);
    setHeaderBackgroundColor(restProps.headerBackgroundColor);
    setBodyBackgroundColor(restProps.bodyBackgroundColor);
  };

  const onHide = () => {
    setVisible(false);
  };

  const bottomSheetProps: BaseBottomSheetProps = {
    title,
    children,
    contentStyle,
    onClose,
    testID,
    visible,
    buttons,
    onCallbackClose: onHide,
    closeIconPosition,
    headerBackgroundColor,
    bodyBackgroundColor,
  };

  return (
    <>
      {(() => {
        switch (variant) {
          case 'default':
          default:
            return <DefaultBottomSheet {...bottomSheetProps} />;
        }
      })()}
    </>
  );
};

export default BottomSheetWrapper;
