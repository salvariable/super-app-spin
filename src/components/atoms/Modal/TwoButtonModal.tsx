import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { ThemeContextType } from 'src/theme/types';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseButtonProps } from '../../Button/types';
import type { BaseModalProps } from '../../types';
import Button from '../../Button/Button';
import BaseModal from './BaseModal';

const TwoButtonModal = (props: BaseModalProps) => {
  const { onCallbackClose, onClose } = props;
  const enableCloseOnPressFirstButton = props.firstButtonProps
    ?.enableCloseOnPress
    ? props.firstButtonProps.enableCloseOnPress
    : false;
  const enableCloseOnPressSecondButton = props.secondButtonProps
    ?.enableCloseOnPress
    ? props.secondButtonProps.enableCloseOnPress
    : false;
  const firstButtonProps = props.firstButtonProps as BaseButtonProps;
  const secondButtonProps = props.secondButtonProps as BaseButtonProps;
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
      defaultDescriptionStyle={{ ...themedStyle.modalDescription }}
    >
      <View style={themedStyle.buttonContainer}>
        <View style={themedStyle.firstButtonContainer}>
          {enableCloseOnPressFirstButton ? (
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
        </View>
        <View>
          {enableCloseOnPressSecondButton ? (
            <Button
              {...secondButtonProps}
              variant="secondary"
              onPress={() => {
                secondButtonProps.onPress();
                onCloseHandler();
              }}
            />
          ) : (
            <Button {...secondButtonProps} variant="secondary" />
          )}
        </View>
      </View>
    </BaseModal>
  );
};

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    modalView: {
      minHeight: 243,
      width: '85%',
    },
    modalTitle: {
      marginBottom: 20,
      textAlign: 'center',
    },
    modalDescription: {
      fontWeight: '400',
      color: theme.colors.content_secondary,
      fontSize: 14,
      lineHeight: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      marginTop: 20,
    },
    firstButtonContainer: {
      marginBottom: 12,
    },
  });

export default TwoButtonModal;
