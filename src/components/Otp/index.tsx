import React from 'react';
import { Platform } from 'react-native';
import OtpAndroid from './OtpAndroid';
import BaseOtp from './BaseOtp';

export type IOtpProps = {
  /**
   * The initial value of the OTP input.
   */
  initOtp?: string;
  /**
   * The length of the OTP.
   * @info Allowed values: 4, 6, 8.
   */
  otpLength?: 4 | 6 | 8;
  /**
   * Callback function called when the OTP value changes.
   * @param otp The new OTP value.
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
   * Callback function specific to the Android platform that receives the OTP hash value.
   * @param hash The OTP hash value.
   */
  androidHash?: (hash: string | undefined) => void;
  /**
   * TestID .
   */
  testID?: string;
};

const Otp: React.FC<IOtpProps> = (props) => {
  if (Platform.OS === 'android') {
    return <OtpAndroid {...props} />;
  }
  return <BaseOtp {...props} />;
};

export default Otp;
