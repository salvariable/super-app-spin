import React, { useState, useRef, useEffect, ReactElement } from 'react';
import { View, StyleSheet, TextInput, Text, Animated } from 'react-native';
import useThemedStyles from '../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../theme/types';
import DoneBtn from '../atoms/DoneBtn';
import Cursor from './Cursor';

export interface IBaseOtpProps {
  /**
   * The initial value of the OTP input.
   */
  initOtp?: string;
  /**
   * The length of the OTP.
   *
   * @default 4
   * @info The `otpLength` should be a positive integer greater than zero.
   */
  otpLength?: 4 | 6 | 8;
  /**
   * A callback function called when the OTP value changes.
   */
  onOtpChange?: (otp: string) => void;
  /**
   * A boolean value indicating whether the OTP input should be auto-focused.
   */
  autoFocus?: boolean;
  /**
   * An error message to display.
   */
  error?: string;
  /**
   * TestID .
   */
  testID?: string;
}

const BaseOtp: React.FC<IBaseOtpProps> = ({
  initOtp = '',
  otpLength = 4,
  error,
  onOtpChange = () => null,
  autoFocus = false,
  testID,
}) => {
  const inputRef = useRef<TextInput | null>(null);
  const [otp, setOtp] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);
  const styles = useThemedStyles(themedStyle);

  useEffect(() => {
    setOtp(initOtp);
  }, [initOtp]);

  useEffect(() => {
    onOtpChange(otp);
  }, [otp, onOtpChange]);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
    inputRef.current?.blur();
  }, [autoFocus]);

  const handleOtpChange = (text: string) => {
    const onlyNumbers = /^\d+$/;
    if (onlyNumbers.test(text) || text === '') {
      setOtp(text);
    }
  };

  const handleOnFocus = () => {
    setIsFocus(true);
  };
  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const inputs: ReactElement[] = [];

  const getInputStyles = (i: number) => {
    const activeField = otp.length + 1 === i && isFocus;
    return [
      styles.input,
      otp.length >= i && styles.inputActive,
      activeField && styles.inputActive,
      error && styles.invalidInput,
    ];
  };

  for (let i = 0; i < otpLength; i++) {
    inputs.push(
      <Animated.View style={getInputStyles(i + 1)} key={i}>
        <Cursor isActive={otp.length === i && isFocus} />
        <Text style={styles.inputTxt}>{otp.split('')[i]}</Text>
      </Animated.View>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>{inputs}</View>
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <TextInput
        ref={inputRef}
        value={otp}
        style={styles.otp}
        onKeyPress={(e) => e.preventDefault()}
        keyboardType="number-pad"
        onChangeText={handleOtpChange}
        textContentType="oneTimeCode"
        pointerEvents="box-only"
        maxLength={otpLength}
        selectionColor="transparent"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        testID={testID}
        inputAccessoryViewID="otpDone"
      />
      <DoneBtn inputAccessoryViewID="otpDone" />
    </View>
  );
};

const themedStyle = (theme: ThemeContextType) => ({
  ...theme,
  ...StyleSheet.create({
    container: {
      flex: 1,
    },
    inputsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    otp: {
      textAlign: 'center',
      color: theme.colors.BRAND_DEFAULT_DARK_200,
      fontSize: theme.typography.size.XXXL,
      fontFamily: theme.typography.fontFamily.REGULAR,
      fontWeight: '500',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
    },
    inputRowsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 68,
      height: 86,
      borderRadius: 7,
      borderWidth: 1,
      marginRight: 6,
      marginBottom: 6,
      backgroundColor: 'white',
      borderColor: theme.colors.stroke_primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputActive: {
      borderColor: theme.colors.ui_active,
    },
    inputTxt: {
      textAlign: 'center',
      color: theme.colors.BRAND_DEFAULT_DARK_200,
      fontSize: theme.typography.size.XXXL,
      fontFamily: theme.typography.fontFamily.REGULAR,
      fontWeight: '500',
    },
    cursor: {
      width: 2,
      height: 50,
      position: 'absolute',
      backgroundColor: theme.colors.ui_active,
      opacity: 0,
    },
    errorMessage: {
      alignSelf: 'center',
      color: '#EB0000',
    },
    invalidInput: {
      borderColor: '#F52121',
    },
  }),
});

export default BaseOtp;
