# OTP (One Time Password)

Component that can used for OTPs and Pins as secure pin input.


## API

### Props

```js
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

```

## Example

```js
import React, { useState } from 'react';
import { Otp, Text } from '@digitaltitransversal/tr_superapp_theme';

const OtpScreen = () => {
  const [otpText, setOtpText] = useState('');
  const [, setAndroidHash] = useState<string | undefined>('');
  return (
          <Text style={styles.text} key={'otp-text-with-error'}>
            OTP
          </Text>
          <Otp
            autoFocus={true}
            androidHash={setAndroidHash}
            onOtpChange={setOtpText}
          />

          <Text style={styles.text} key={'otp-text-with-error'}>
            OTP with error
          </Text>
          <Otp
            androidHash={setAndroidHash}
            onOtpChange={setOtpText}
            error="With error"
          />

  );
};

```
