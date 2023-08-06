import React, { forwardRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import type { TextInput } from 'react-native';
import BaseTextInput from './BaseTextInput';
import type { BaseTextInputProps } from './types';
import Text from '../../Text/Text';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { ThemeContextType } from '../../../theme/types';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const EmailTextInput = forwardRef<TextInput, BaseTextInputProps>(
  (props, ref) => {
    const { domainList, value, onChangeText, onValidation, onDomainItemPress } =
      props;
    const themedStyles = useThemedStyles(styles);

    const [selectedDomain, setSelectedDomain] = useState('');

    const handleEmailValidation = (text: string) => {
      const condition = new RegExp(emailRegex, 'g');
      return [condition.test(text)];
    };

    const handlePress = (domain: string) => {
      const newValue = value.includes('@')
        ? value.slice(0, value.indexOf('@'))
        : value;
      let selected = false;

      if (domain === selectedDomain) {
        setSelectedDomain('');
        onChange(newValue);
      } else {
        selected = true;
        setSelectedDomain(domain);
        onChange(`${newValue}${domain}`);
      }

      onDomainItemPress && onDomainItemPress(domain, selected);
    };

    const onChange = (textValue: string) => {
      const isValid = handleEmailValidation(textValue);
      onChangeText && onChangeText(textValue);
      onValidation && onValidation(isValid);
    };

    return (
      <View testID="AutofillInput">
        <BaseTextInput
          ref={ref}
          {...props}
          onChangeText={onChange}
          autoCapitalize="none"
        />
        <ScrollView style={themedStyles.buttonsContainer} horizontal>
          {domainList?.map((domain, index) => (
            <TouchableOpacity
              key={index}
              style={[
                themedStyles.domainButton,
                domain === selectedDomain && themedStyles.active,
              ]}
              testID={`domain-button-${index}`}
              onPress={() => handlePress(domain)}
            >
              <Text variant="small-body-bold">{domain}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  },
);

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    buttonsContainer: {
      marginVertical: 8,
      flexDirection: 'row',
    },
    domainButton: {
      minWidth: 93,
      margin: 4,
      borderRadius: 8,
      padding: 8,
      alignItems: 'center',
      backgroundColor: theme.colors.surface_secondary,
    },
    active: {
      backgroundColor: '#B8B8B8',
    },
  });

EmailTextInput.displayName = 'Theme-email-text-input';

export default EmailTextInput;
