/* eslint-disable @typescript-eslint/no-shadow */
import React, { ReactNode, useEffect, useState } from 'react';
import {
  DeviceEventEmitter,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  BaseModalProps,
  ModalProps,
  ModalVariant,
} from '../../../components/types';
import type { BaseButtonProps } from '../types';
import BaseModal from './BaseModal';
import ChildrenModal from './ChildrenModal';
import OneButtonModal from './OneButtonModal';
import TwoButtonModal from './TwoButtonModal';

interface ModalComponentProps {
  testID?: string;
}

const isModalValid = (value: string) => {
  return Object.values(ModalVariant).includes(value);
};

const ModalWrapper = (wrapperProps: ModalComponentProps) => {
  const [testID, setTestID] = useState(wrapperProps.testID);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState<string | undefined>('');
  const [description, setDescription] = useState<string | undefined>();
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<keyof typeof ModalVariant>();
  const [style, setStyle] = useState<StyleProp<ViewStyle>>(undefined);
  const [titleStyle, setTitleStyle] = useState<StyleProp<TextStyle>>(undefined);
  const [descriptionStyle, setDescriptionStyle] =
    useState<StyleProp<TextStyle>>(undefined);
  const [onClose, setOnClose] = useState<() => void>();
  const [firstButtonProps, setFirstButtonProps] = useState<BaseButtonProps>();
  const [secondButtonProps, setSecondButtonProps] = useState<BaseButtonProps>();
  const [showCloseBtn, setShowCloseBtn] = useState(true);
  const [newChildren, setNewChildren] = useState<ReactNode>();

  useEffect(() => {
    DeviceEventEmitter.addListener('CHOSE_MODAL', onNewModal);
    DeviceEventEmitter.addListener('CHOSE_MODAL_CLOSE', onCallbackCloseHandler);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  const onNewModal = (newModalProps: ModalProps) => {
    const {
      testID,
      variant = 'default',
      title,
      subtitle,
      description,
      style,
      titleStyle,
      descriptionStyle,
      onClose,
      firstButtonProps,
      secondButtonProps,
      showCloseBtn = true,
      newChildren,
    } = newModalProps;

    if (!isModalValid(variant)) {
      throw new Error(
        `Unknown '${variant}'. Please only use ${Object.values(ModalVariant)
          .map((value) => (typeof value === 'string' ? value : null))
          .filter((value) => value)}.`,
      );
    }

    setTestID(testID);
    setTitle(title);
    setSubtitle(subtitle);
    setDescription(description);
    setVisible(true);
    setVariant(variant);
    setStyle(style);
    setTitleStyle(titleStyle);
    setDescriptionStyle(descriptionStyle);
    setOnClose(() => onClose);
    setFirstButtonProps(firstButtonProps);
    setSecondButtonProps(secondButtonProps);
    setShowCloseBtn(showCloseBtn);
    setNewChildren(newChildren);
  };

  const onCallbackCloseHandler = () => {
    setVisible(false);
  };

  const modalProps: BaseModalProps = {
    title,
    subtitle,
    description,
    visible,
    testID,
    style,
    titleStyle,
    descriptionStyle,
    onClose,
    firstButtonProps,
    secondButtonProps,
    showCloseBtn,
    onCallbackClose: onCallbackCloseHandler,
    newChildren: newChildren,
  };

  return (
    <>
      {(() => {
        switch (variant) {
          case 'content':
            return <ChildrenModal {...modalProps} />;
          case 'one-button':
            return <OneButtonModal {...modalProps} />;
          case 'two-button':
            return <TwoButtonModal {...modalProps} />;
          case 'default':
          default:
            return <BaseModal {...modalProps} />;
        }
      })()}
    </>
  );
};

export default ModalWrapper;
