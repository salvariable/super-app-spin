import React, { FC, useEffect, useState } from 'react';
import { useOtpVerify } from 'react-native-otp-verify';
import BaseOtp, { IBaseOtpProps } from './BaseOtp';

interface IProps extends IBaseOtpProps {
  androidHash?: (hash: string | undefined) => void;
}

const OtpAndroid: FC<IProps> = ({
  initOtp = '',
  otpLength = 4,
  error,
  onOtpChange = () => null,
  autoFocus = false,
  androidHash = () => null,
  testID,
}) => {
  const [currentOtp, setCurrentOtp] = useState('');
  const { hash, otp, message } = useOtpVerify({ numberOfDigits: otpLength });

  useEffect(() => {
    setCurrentOtp(initOtp);
  }, [initOtp]);

  useEffect(() => {
    if (hash) {
      androidHash(hash[0]);
    }
  }, [hash, androidHash]);

  useEffect(() => {
    if (message && otp) {
      setCurrentOtp(otp);
    }
  }, [message, otp]);

  return (
    <BaseOtp
      initOtp={currentOtp}
      otpLength={otpLength}
      error={error}
      autoFocus={autoFocus}
      onOtpChange={onOtpChange}
      testID={testID}
    />
  );
};

export default OtpAndroid;
