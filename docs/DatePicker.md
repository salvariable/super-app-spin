# DatePicker

Este componente sirve como un wrapper del componente de la libreria `react-native-date-picker`

## API

### Propiedades

```js
  date?: Date;
  visible?: boolean;
  onConfirm?: (date: Date) => void;
  onDateChange?: (date: Date) => void;
  onCancel?: () => void;
  modal?: boolean;
  confirmText?: string;
  cancelText?: string;
  title?: string;
  maximumDate?: Date;
  minimumDate?: Date;
```

## Ejemplo de uso

### En App

```js
import React, { useState } from 'react';
import { View } from 'react-native';
import {
  DatePicker,
  Text,
  Button,
  ThemeProvider,
} from '@digitaltitransversal/tr_superapp_theme';

import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const DatePickerScreen = () => {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const onConfirm = (pickedDate: Date) => {
    setVisible(false);
    setDate(pickedDate);
  };

  const onDateChange = (pickedDate: Date) => {
    setDate(pickedDate);
    setLastAction('Date changed');
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.sampleContainer}>
            <DatePicker
              modal
              onConfirm={onConfirm}
              date={date}
              visible={visible}
              onCancel={onCancel}
              cancelText="CCancel"
              confirmText="CConfirm"
              title="This is a custom title"
              maximumDate={new Date()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};
```
## Diseño

![DatePicker default iOs](/docs/images/date-picker-inline-ios.png)
![DatePicker default Android](/docs/images/date-picker-inline-android.png)
![DatePicker modal iOs](/docs/images/date-picker-modal-ios.png)
![DatePicker modal Android](/docs/images/date-picker-modal-android.png)
