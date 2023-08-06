import React from 'react';
import { StyleSheet } from 'react-native';

import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseModalProps } from '../../../components/types';
import Button from '../../../components/Button/Button';
import BaseModal from './BaseModal';
import type { BaseButtonProps } from '../types';

const OneButtonModal = (props: BaseModalProps) => {
  const { onCallbackClose, onClose } = props;
  const enableCloseOnPress = props.firstButtonProps?.enableCloseOnPress
    ? props.firstButtonProps.enableCloseOnPress
    : false;
  const firstButtonProps = props.firstButtonProps as BaseButtonProps;
  const themedStyle = useThemedStyles(styles);

  const onCloseHandler = () => {
    onClose && onClose();
    onCallbackClose();
  };

  return (
    <BaseModal
      {...props}
      defaultStyle={themedStyle.modalView}
      defaultTitleStyle={themedStyle.modalTitle}
      defaultDescriptionStyle={themedStyle.modalDescription}
    >
      {enableCloseOnPress ? (
        <Button
          {...firstButtonProps}
          variant="primary"
          onPress={() => {
            firstButtonProps.onPress();
            onCloseHandler();
          }}
        />
      ) : (
        <Button {...firstButtonProps} variant="primary" />
      )}
    </BaseModal>
  );
};

const styles = () =>
  StyleSheet.create({
    modalView: {
      minHeight: 245,
      width: 302,
    },
    modalTitle: {
      fontWeight: '500',
      fontSize: 20,
      color: '#000',
      lineHeight: 26,
      marginBottom: 25,
      textAlign: 'center',
    },
    modalDescription: {
      fontWeight: '400',
      color: '#000000',
      fontSize: 14,
      lineHeight: 20,
      textAlign: 'center',
      marginBottom: 35,
    },
  });

export default OneButtonModal;
