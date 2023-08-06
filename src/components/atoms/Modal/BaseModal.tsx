import React, { useEffect, useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Platform,
} from 'react-native';
import Text from '../../Text/Text';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseModalProps } from '../../../components/types';
import Icon from '../Icon/Icon';
import type { ThemeContextType } from 'src/theme/types';
const BaseModal = (props: BaseModalProps) => {
  const {
    title,
    subtitle,
    description,
    children,
    testID,
    visible,
    onClose,
    onCallbackClose,
    style,
    defaultStyle,
    showCloseBtn,
    defaultDescriptionStyle,
  } = props;
  const [visibleFlag, setVisibleFlag] = useState(visible);
  const themedStyle = useThemedStyles(styles);

  useEffect(() => {
    setVisibleFlag(visible);
  }, [visible]);

  const onCloseHandler = () => {
    setVisibleFlag(false);
    onClose && onClose();
    onCallbackClose();
  };

  return (
    <View>
      <Modal
        testID={testID}
        animationType="fade"
        transparent
        visible={visibleFlag}
        statusBarTranslucent
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={themedStyle.container}
        >
          <View style={themedStyle.centeredView}>
            <View
              style={{
                ...themedStyle.modalView,
                ...(defaultStyle as object),
                ...(style as object),
                ...(!description && { minHeight: 0 }),
              }}
            >
              {showCloseBtn && (
                <View style={themedStyle.closeIconContainer}>
                  <View style={themedStyle.titleWrapper}>
                    <Text
                      variant="headline-medium"
                      style={{
                        ...themedStyle.modalTitle,
                      }}
                    >
                      {title}
                    </Text>
                    {subtitle ? (
                      <Text
                        style={{
                          ...themedStyle.modalSubitle,
                        }}
                      >
                        {subtitle}
                      </Text>
                    ) : null}
                  </View>
                  <TouchableOpacity
                    onPress={onCloseHandler}
                    style={themedStyle.iconCloseTouchable}
                  >
                    <Icon
                      name="icon-close"
                      testID={`${testID}-close-button`}
                      // eslint-disable-next-line react-native/no-inline-styles
                      iconTypographyStyle={{ fontSize: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {description && (
                <ScrollView
                  style={defaultDescriptionStyle || {}}
                  showsVerticalScrollIndicator={false}
                >
                  <Text variant="default-body">{description}</Text>
                </ScrollView>
              )}
              {children && <View>{children}</View>}
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    container: { flex: 1 },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      minHeight: 188,
      width: '95%',
      backgroundColor: 'white',
      borderRadius: 14,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      padding: 16,
    },
    closeIconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
      marginRight: 8,
    },
    titleWrapper: {
      width: '90%',
      marginTop: 12,
      marginBottom: 12,
    },
    modalTitle: {
      color: theme.colors.content_primary,
      width: '100%',
    },
    modalSubitle: {
      marginTop: 4,
      color: theme.colors.content_tertiary,
      fontSize: theme.typography.size.extra_small,
      lineHeight: theme.typography.lineHeight.extra_small,
    },
    modalDescription: {
      color: theme.colors.content_secondary,
      fontSize: theme.typography.size.small,
      lineHeight: 18,
      marginBottom: 16,
    },
    iconCloseTouchable: {
      flexDirection: 'column',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 12,
      minHeight: 36,
    },
  });

export default BaseModal;
