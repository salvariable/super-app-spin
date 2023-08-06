import { LightTheme } from '../../../styles/spinplus';

const DEFAULT_ALERT_STYLES = {
  iconBackgroundColor: 'transparent',
  iconColor: LightTheme.brand_black_neutral,
};

const INFO_ALERT_STYLES = {
  iconBackgroundColor: LightTheme.ui_info,
  iconName: 'icon-alert-info',
};

const SUCCESS_ALERT_STYLES = {
  iconBackgroundColor: LightTheme.ui_success,
  iconName: 'icon-check-circle',
};

const WARNING_ALERT_STYLES = {
  iconBackgroundColor: LightTheme.ui_warning,
  iconName: 'icon-alert-warn',
};

const ERROR_ALERT_STYLES = {
  iconBackgroundColor: LightTheme.ui_error,
  iconName: 'icon-alert-error',
};

export {
  DEFAULT_ALERT_STYLES,
  INFO_ALERT_STYLES,
  SUCCESS_ALERT_STYLES,
  WARNING_ALERT_STYLES,
  ERROR_ALERT_STYLES,
};
