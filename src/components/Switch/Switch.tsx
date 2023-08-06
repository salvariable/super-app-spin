import React, { useState } from 'react';
import { Switch as RNSwitch } from 'react-native';

function Switch({ toggleSwitch }: { toggleSwitch?: (value: boolean) => void }) {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <RNSwitch
      testID="payment-card-switch-id"
      trackColor={{ false: '#565E6A', true: '#227EFF' }}
      thumbColor={'#fff'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={(value) => {
        toggleSwitch && toggleSwitch(value);
        setIsEnabled(!isEnabled);
      }}
      value={isEnabled}
    />
  );
}

export default Switch;
