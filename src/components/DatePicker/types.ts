/**
 * These properties are used to process or pass it to the
 * React native Date Picker component
 */
export type DatePickerProps = {
  /**
   * The date to show when the calendar is opened for the first time
   */
  date?: Date;
  /**
   * Displays the component
   * @default false
   */
  visible?: boolean;
  /**
   * Method executed when the component is in modal mode and the Confirm button is pressed
   * @param date the selected date when the user press in the confirm button
   * @returns void
   */
  onConfirm?: (date: Date) => void;
  /**
   * When it's not a modal, this function gets trigger, sending the selected date.
   * @param date The selected date by the user
   * @returns void
   */
  onDateChange?: (date: Date) => void;
  /**
   * In modal mode, callback function that ca be used to propagate an effect when the user press on Cancel
   * @returns void
   */
  onCancel?: () => void;
  /**
   * Determines wether the calendar opens in a native modal or not.
   * @default false
   */
  modal?: boolean;
  /**
   * Text to display to the confirmation button
   * @default "Confirmar"
   */
  confirmText?: string;
  /**
   * Text to display to the cancel button
   * @default "Cancelar"
   */
  cancelText?: string;
  /**
   * This text is used as title in modal mode (modal=true)
   * @default "Selecciona la fecha"
   */
  title?: string;
  /**
   * The maximum selectable date
   */
  maximumDate?: Date;
  /**
   * The minimum selectable date
   */
  minimumDate?: Date;
};
