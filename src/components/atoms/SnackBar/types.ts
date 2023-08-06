import { LightTheme } from '../../../styles/spinplus';
import type { IconName } from '../Icon/Icon';

const DEFAULT_SNACKBAR_STYLES = {
  iconColor: LightTheme.content_primary,
  backgroundColor: LightTheme.surface_primary,
  textColor: LightTheme.content_primary,
  closeColor: LightTheme.content_tertiary,
  actionLabelColor: LightTheme.content_secondary,
};

const INFO_SNACKBAR_STYLES = {
  backgroundColor: LightTheme.ui_info,
  textColor: LightTheme.surface_primary,
  closeColor: LightTheme.surface_primary,
  withIcon: true,
  iconColor: LightTheme.surface_primary,
  actionLabelColor: LightTheme.surface_primary,
  iconName: 'icon-alert-info',
};

const SUCCESS_SNACKBAR_STYLES = {
  backgroundColor: LightTheme.ui_success,
  textColor: LightTheme.surface_primary,
  closeColor: LightTheme.surface_primary,
  withIcon: true,
  iconColor: LightTheme.surface_primary,
  actionLabelColor: LightTheme.surface_primary,
  iconName: 'icon-check-circle',
};

const WARNING_SNACKBAR_STYLES = {
  backgroundColor: LightTheme.ui_warning,
  textColor: LightTheme.surface_primary,
  closeColor: LightTheme.surface_primary,
  withIcon: true,
  iconColor: LightTheme.surface_primary,
  actionLabelColor: LightTheme.surface_primary,
  iconName: 'icon-alert-warn',
};

const ERROR_SNACKBAR_STYLES = {
  backgroundColor: LightTheme.ui_error,
  textColor: LightTheme.surface_primary,
  closeColor: LightTheme.surface_primary,
  withIcon: true,
  iconColor: LightTheme.surface_primary,
  actionLabelColor: LightTheme.surface_primary,
  iconName: 'icon-alert-error',
};

type SnackBarProps = {
  text?: string;

  /**
   * By default is false
   * Whether 'true' is passed, then request an iconName.
   */
  withIcon?: boolean;

  iconName?: IconName;

  iconColor?: string;

  backgroundColor?: string;

  closeColor?: string;

  textColor?: string;

  /**
   * Duration in milliseconds
   */
  duration?: number;

  /**
   * When onClose function is passed, then the close icon appears
   * @returns void
   */
  onClose?: () => void;

  /**
   * Snackbar can display a single text button that lets users take action on a process performed by the app.
   * Snackbar shouldn’t be the only way to access a core use case, to make an app usable.
   */
  action?: ActionSnackBar;

  testID?: string;

  actionLabelColor?: string;

  /**
   * The position of the snackbar in the page, default is 'top'
   */
  position?: 'top' | 'bottom';
};

type ActionSnackBar = {
  label: string;
  color?: string;
  onAction?: () => void;
};

enum SnackBarVariant {
  'default',
  'info',
  'success',
  'warning',
  'error',
}

export {
  ActionSnackBar,
  SnackBarProps,
  SnackBarVariant,
  DEFAULT_SNACKBAR_STYLES,
  INFO_SNACKBAR_STYLES,
  SUCCESS_SNACKBAR_STYLES,
  WARNING_SNACKBAR_STYLES,
  ERROR_SNACKBAR_STYLES,
};
