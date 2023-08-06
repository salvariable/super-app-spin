import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Animated,
  TextInputProps,
} from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseTextInputProps } from './types';
import type { ThemeContextType } from '../../../theme/types';
import Text from '../../Text/Text';
import Icon from '../Icon/Icon';
import DoneBtn from '../DoneBtn';

const NewBaseTextInput = forwardRef<
  TextInput,
  BaseTextInputProps & TextInputProps
>(
  (
    {
      style,
      testID,
      placeHolder,
      label,
      error,
      numericInput = false,
      secureInput = false,
      value,
      maxLength = 90,
      rightSection,
      rightSectionStyle,
      leftSection,
      leftSectionStyle,
      inputColors,
      onChangeText,
      onEditFinish,
      onTouchStart,
      onSubmitEditing,
      editable = true,
      bottomMessage,
      customOnBlur,
      customOnFocus,
      readOnly,
      inputAccessoryViewID = 'done',
      inputAccessoryLabel,
      inputAccessoryAction,
      hideInputAccessoryView = false,
      ...props
    },
    ref,
  ) => {
    const themedStyle = useThemedStyles(styles);
    const [borderStyles, setBorderStyles] = useState({});
    const [placeholderInput, setPlaceholder] = useState(placeHolder);
    const [rightSectionStyles, setRightSectionStyles] = useState(
      themedStyle.defaultRightSection,
    );
    const [leftSectionStyles, setLeftSectionStyles] = useState(
      themedStyle.defaultLeftSection,
    );
    const [placeholderColor, setPlaceholderColor] = useState(
      themedStyle.onBlurPlaceholder.color,
    );
    const [labelStyle, setLabelStyle] = useState(themedStyle.defaultLabel);
    const moveText = useRef(new Animated.Value(0)).current;

    const moveTextTop = useCallback(() => {
      Animated.timing(moveText, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [moveText]);

    useEffect(() => {
      if (value) {
        moveTextTop();
        setRightSectionStyles(themedStyle.onFocusRightSection);
        setLeftSectionStyles(themedStyle.onFocusLeftSection);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (value) {
        moveTextTop();
      }
    }, [value, moveTextTop]);

    const moveTextBottom = () => {
      Animated.timing(moveText, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    const onBlur = () => {
      customOnBlur && customOnBlur();
      setBorderStyles(themedStyle.borderBlurStyle);
      if (!value) {
        moveTextBottom();
        setRightSectionStyles(themedStyle.defaultRightSection);
        setLeftSectionStyles(themedStyle.defaultLeftSection);
      }
      setPlaceholder(getPlaceholder());
      setPlaceholderColor(
        inputColors ? inputColors.primary : themedStyle.onBlurPlaceholder.color,
      );
      setLabelStyle(
        inputColors
          ? { color: inputColors.primary, borderColor: inputColors.primary }
          : themedStyle.defaultLabel,
      );
      onEditFinish && onEditFinish();
    };

    const getPlaceholder = () => {
      if (label) return '';
      return placeHolder;
    };

    const onFocus = () => {
      customOnFocus && customOnFocus();
      setBorderStyles(
        inputColors && inputColors.primary
          ? { color: inputColors.primary, borderColor: inputColors.primary }
          : themedStyle.borderFocusStyle,
      );
      setPlaceholder(placeHolder);
      setPlaceholderColor(
        inputColors && inputColors.secondary
          ? inputColors.secondary
          : themedStyle.onFocusPlaceholder.color,
      );

      setLabelStyle(themedStyle.onFocusLabel);
      setRightSectionStyles(themedStyle.onFocusRightSection);
      setLeftSectionStyles(themedStyle.onFocusRightSection);
      moveTextTop();
    };

    const yVal = moveText.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -8],
    });

    const labelFontSize = moveText.interpolate({
      inputRange: [0, 1],
      outputRange: [0.9, 0.8],
    });

    const animStyle = {
      transform: [
        {
          translateY: yVal,
        },
        { scale: labelFontSize },
      ],
      paddingHorizontal: 4,
      paddingVertical: 1,
    };

    return (
      <View testID="DefaultInput">
        <View
          testID={`${testID}-view`}
          style={[
            themedStyle.containerStyle,
            borderStyles,
            error && themedStyle.containerErrorStyle,
            style,
            !editable && themedStyle.inputTextDisabled,
          ]}
        >
          {leftSection && (
            <View
              style={[
                leftSectionStyle,
                themedStyle.leftSection,
                leftSectionStyles,
                { ...(readOnly && themedStyle.defaultLeftSection) },
              ]}
            >
              {leftSection}
            </View>
          )}

          <TextInput
            allowFontScaling={false}
            ref={ref}
            onTouchStart={onTouchStart}
            style={[
              themedStyle.textInputStyle,
              leftSection && themedStyle.leftSectionPadding,
              {
                color: inputColors && inputColors?.primary,
              },
              error ? themedStyle.inputTextError : themedStyle.inputTextColor,
              !editable && themedStyle.disabledInput,
            ]}
            testID={testID}
            placeholder={placeholderInput}
            secureTextEntry={secureInput}
            keyboardType={numericInput ? 'number-pad' : 'default'}
            value={value}
            maxLength={maxLength}
            onChangeText={(text: string) =>
              readOnly ? onChangeText(value) : onChangeText(text)
            }
            onBlur={onBlur}
            onFocus={onFocus}
            placeholderTextColor={placeholderColor}
            editable={editable}
            onSubmitEditing={onSubmitEditing}
            inputAccessoryViewID={
              hideInputAccessoryView ? undefined : inputAccessoryViewID
            }
            //HACK: without placeholderTextColor, placeholder is not visible on ios https://stackoverflow.com/questions/72954908/react-native-textinput-placeholder-not-showing-up-on-ios
            {...props}
          />
          {!hideInputAccessoryView ? (
            <DoneBtn
              inputAccessoryViewID={inputAccessoryViewID}
              title={inputAccessoryLabel}
              onPress={inputAccessoryAction}
            />
          ) : null}
          <Animated.View
            pointerEvents="none"
            testID={`${testID}-animated`}
            style={[themedStyle.animatedStyle, animStyle]}
          >
            <Text
              testID={`${testID}-label`}
              // ellipsizeMode={'tail'}
              numberOfLines={1}
              variant="label-default"
              style={[
                {
                  ...themedStyle.labelStyle,
                  ...(leftSection && {
                    marginLeft: 30,
                  }),
                  ...(readOnly && { marginLeft: 40 }),
                  ...labelStyle,
                  ...(inputColors?.secondary && {
                    color: inputColors.secondary,
                  }),
                },
                error ? themedStyle.errorLabel : '',
                !editable && themedStyle.disabledLabel,
              ]}
            >
              {label}
            </Text>
          </Animated.View>
          {rightSection && (
            <View
              style={{
                ...rightSectionStyles,
                ...themedStyle.rightSection,
                ...(rightSectionStyle
                  ? { rightSectionStyle }
                  : themedStyle.onFocusRightSection),
              }}
            >
              {rightSection}
            </View>
          )}
        </View>
        <View style={themedStyle.errorContainer}>
          {error ? (
            <View style={themedStyle.messageContainer}>
              <Icon
                iconTypographyStyle={themedStyle.alertIcon}
                name="icon-alert-error"
              />
              <Text
                variant="extra-small-body"
                style={themedStyle.bottomMessageError}
              >
                {error}
              </Text>
            </View>
          ) : bottomMessage ? (
            <View style={themedStyle.messageContainer}>
              <Text
                variant="extra-small-body"
                style={themedStyle.bottomMessage}
              >
                {bottomMessage}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  },
);

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    containerStyle: {
      position: 'relative',
      flexDirection: 'row',
      borderRadius: 12,
      height: 48,
      borderColor: theme.colors.content_tertiary,
      borderWidth: 1,
      backgroundColor: theme.colors.surface_primary,
      alignContent: 'center',
    },
    containerErrorStyle: {
      borderColor: theme.colors.ui_error,
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingLeft: 14,
      width: 38,
      paddingRight: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    defaultLeftSection: {
      borderRadius: 12,
    },
    onFocusLeftSection: {
      backgroundColor: theme.colors.surface_primary,
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingEnd: 16,
      marginVertical: 4,
    },
    defaultRightSection: {
      borderRadius: 15,
      zIndex: 1,
      paddingLeft: 16,
      backgroundColor: theme.colors.surface_primary,
    },
    onFocusRightSection: {
      backgroundColor: 'transparent',
    },
    borderFocusStyle: {
      borderColor: theme.colors.ui_active,
      color: theme.colors.ui_active,
      textShadowColor: 'transparent',
    },
    borderA11yMode: {
      zIndex: 1,
      shadowColor: theme.colors.ui_active,
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      elevation: 5,
    },
    borderBlurStyle: {
      borderColor: theme.colors.content_tertiary,
      color: theme.colors.content_tertiary,
    },
    textInputStyle: {
      paddingLeft: 16,
      height: 48,
      flex: 1,
    },
    inputTextError: {
      color: theme.colors.ui_error,
    },
    inputTextColor: {
      color: theme.colors.content_primary,
    },
    inputTextDisabled: {
      borderColor: theme.colors.inverse_stroke_primary,
    },
    disabledInput: {
      color: theme.colors.stroke_primary,
    },
    labelStyle: {
      color: theme.colors.inverse_content_secondary,
      paddingHorizontal: 4,
      zIndex: 1,
      backgroundColor: theme.colors.surface_primary,
      borderRadius: 4,
      overflow: 'hidden',
    },
    errorLabel: {
      color: theme.colors.ui_error,
    },
    defaultLabel: {
      color: theme.colors.content_tertiary,
    },
    onFocusLabel: {
      color: theme.colors.ui_active,
    },
    disabledLabel: {
      color: theme.colors.inverse_stroke_primary,
    },
    animatedStyle: {
      position: 'absolute',
    },
    onFocusPlaceholder: {
      color: theme.colors.NEUTRAL_DEFAULT,
    },
    onBlurPlaceholder: {
      color: 'transparent',
    },
    messageContainer: {
      flexDirection: 'row',
      paddingHorizontal: 8,
      marginVertical: 8,
    },
    bottomMessage: {
      color: theme.colors.content_tertiary,
    },
    bottomMessageError: {
      color: theme.colors.ui_error,
    },
    alertIcon: {
      marginRight: 8,
      color: theme.colors.ui_error,
    },
    leftSectionPadding: {
      paddingLeft: 8,
    },
    errorContainer: {
      paddingHorizontal: 8,
    },
  });

NewBaseTextInput.displayName = 'Theme-base-text-input';

export default NewBaseTextInput;
