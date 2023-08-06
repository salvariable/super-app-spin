import React from 'react';
import RNDatePicker from 'react-native-date-picker';
import type { DatePickerProps } from './types';

const DatePicker = ({
  visible = false,
  date,
  onConfirm,
  modal = false,
  onCancel,
  onDateChange,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  title = 'Selecciona la fecha',
  maximumDate,
  minimumDate,
}: DatePickerProps) => {
  const now = new Date();
  const dateProp = date ?? now;

  return visible ? (
    <RNDatePicker
      testID="Date-Picker"
      mode="date"
      modal={modal}
      open={visible}
      date={dateProp}
      onDateChange={onDateChange}
      onConfirm={onConfirm}
      onCancel={onCancel}
      confirmText={confirmText}
      cancelText={cancelText}
      title={title}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      androidVariant="nativeAndroid"
      locale="es-MX"
    />
  ) : null;
};

export default DatePicker;
