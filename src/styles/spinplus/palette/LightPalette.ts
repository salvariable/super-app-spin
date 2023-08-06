// Brand colors
const BRAND_DEFAULT = '#3A46EA';
const BRAND_DEFAULT_DARK_100 = '#0048AD';
const BRAND_DEFAULT_DARK_200 = '#00183A';
const BRAND_DEFAULT_LIGHT_100 = '#F8FBFF';
const BRAND_DEFAULT_LIGHT_200 = '#BDD8FF';
const BRAND_DEFAULT_LIGHT_300 = '#7AB2FF';

// Neutral colors
const NEUTRAL_DEFAULT = '#586577';
const NEUTRAL_DEFAULT_DARK_100 = '#3C424A';
const NEUTRAL_DEFAULT_DARK_200 = '#000000';
const NEUTRAL_DEFAULT_LIGHT_100 = '#FCFCFC';
const NEUTRAL_DEFAULT_LIGHT_200 = '#C5CCD5';
const NEUTRAL_DEFAULT_LIGHT_300 = '#9FAABA';

// States colors
// Success
const STATE_SUCCESS = '#18B139';
const STATE_SUCCESS_DARK_100 = '#117C28';
const STATE_SUCCESS_LIGHT_100 = '#E5F6E9';

// Warning
const STATE_WARNING = '#F6C30E';
const STATE_WARNING_DARK_100 = '#C99E07';
const STATE_WARNING_LIGHT_100 = '#FCEDB7';

// Danger
const STATE_DANGER = '#DB1042';
const STATE_DANGER_DARK_100 = '#AF0D35';
const STATE_DANGER_LIGHT_100 = '#FBCCD7';

// UPDATE - Global brand colors
const brand_gradient = ['#F05A25', '#ED126B', '#EC0A73', '#126AB8'];
const brand_gradient_loyalty = ['#0009A7', '#0081AA', '#0097C7'];
const brand_gradient_purple = ['#1723D3', '#8417A1'];

const brand_blue_primary = '#1723D3';
const brand_orange_secondary = '#F05C22';
const brand_pink_tertiary = '#EC0874';
const brand_black_neutral = '#05053D';

// UPDATE - DEFAULT COLOR ENVIROMENT
const content_primary = '#05053D';
const content_secondary = '#373764';
const content_tertiary = '#69698B';

const surface_primary = '#FFFFFF';
const surface_secondary = '#F5F5F7';
const surface_tertiary = '#E6E6EC';

const ui_active = '#1723D3';
const ui_info = '#05053D';
const ui_success = '#087D6F';
const ui_warning = '#D3480A';
const ui_error = '#BB005A';

const stroke_primary = '#82829E';
const stroke_secondary = '#E6E6EC';

// UPDATE - INVERSE COLOR ENVIROMENT
const inverse_content_primary = '#FFFFFF';
const inverse_content_secondary = '#B4B4C5';
const inverse_content_tertiary = '#82829E';

const inverse_surface_primary = '#05053D';
const inverse_surface_secondary = '#1E1E50';
const inverse_surface_tertiary = '#373764';

const inverse_ui_active = '#7A85FF';
const inverse_ui_success = '#40BCAD';
const inverse_ui_warning = '#FF8B63';
const inverse_ui_error = '#FF4B8C';

const inverse_stroke_primary = '#CDCDD8';
const inverse_stroke_secondary = '#373764';

// UPDATE - CONTEXT PALETTE
// INFORMATIONAL BLUE
const surface_informational = '#E0E0FF';
const decoration_informational = '#7A85FF';
const content_informational = '#1723D3';

// PAUSED YELLOW
const surface_paused = '#FFDFBC';
const decoration_paused = '#FFB55E';
const content_paused = '#955000';

// ACTIVATED GREEN
const surface_activated = '#D6F1ED';
const decoration_activated = '#80D2C8';
const content_activated = '#087D6F';

// URGENT RED
const surface_urgent = '#FAC1CF';
const decoration_urgent = '#F35F82';
const content_urgent = '#AD002A';

// POINTS AQUA
const surface_points = '#C9E9F3';
const decoration_points = '#66C0DD';
const content_points = '#006686';

/**
 * @deprecated
 */
export const BASE_COLORS = {
  SUCCESS: STATE_SUCCESS,
  SUCCESS_LIGHT: STATE_SUCCESS_LIGHT_100,
  SUCCESS_DARK: STATE_SUCCESS_DARK_100,
  WARNING: STATE_WARNING,
  WARNING_LIGHT: STATE_WARNING_LIGHT_100,
  WARNING_DARK: STATE_WARNING_DARK_100,
  DANGER: STATE_DANGER,
  DANGER_LIGHT: STATE_DANGER_LIGHT_100,
  DANGER_DARK: STATE_DANGER_DARK_100,
};

/**
 * @deprecated
 */
export const BRAND_DEFAULT_COLORS = {
  BRAND_DEFAULT: BRAND_DEFAULT,
  BRAND_DEFAULT_DARK_100: BRAND_DEFAULT_DARK_100,
  BRAND_DEFAULT_DARK_200: BRAND_DEFAULT_DARK_200,
  BRAND_DEFAULT_LIGHT_100: BRAND_DEFAULT_LIGHT_100,
  BRAND_DEFAULT_LIGHT_200: BRAND_DEFAULT_LIGHT_200,
  BRAND_DEFAULT_LIGHT_300: BRAND_DEFAULT_LIGHT_300,
  NEUTRAL_DEFAULT: NEUTRAL_DEFAULT,
  NEUTRAL_DEFAULT_DARK_100: NEUTRAL_DEFAULT_DARK_100,
  NEUTRAL_DEFAULT_DARK_200: NEUTRAL_DEFAULT_DARK_200,
  NEUTRAL_DEFAULT_LIGHT_100: NEUTRAL_DEFAULT_LIGHT_100,
  NEUTRAL_DEFAULT_LIGHT_200: NEUTRAL_DEFAULT_LIGHT_200,
  NEUTRAL_DEFAULT_LIGHT_300: NEUTRAL_DEFAULT_LIGHT_300,
};

export const brand_colors = {
  // UPDATE - GLOBAL BRAND COLORS
  brand_gradient: brand_gradient,
  brand_gradient_loyalty: brand_gradient_loyalty,
  brand_gradient_purple: brand_gradient_purple,
  brand_blue_primary: brand_blue_primary,
  brand_orange_secondary: brand_orange_secondary,
  brand_pink_tertiary: brand_pink_tertiary,
  brand_black_neutral: brand_black_neutral,
  // UPDATE - DEFAULT COLOR ENVIROMENT
  content_primary: content_primary,
  content_secondary: content_secondary,
  content_tertiary: content_tertiary,
  surface_primary: surface_primary,
  surface_secondary: surface_secondary,
  surface_tertiary: surface_tertiary,
  ui_active: ui_active,
  ui_info: ui_info,
  ui_success: ui_success,
  ui_warning: ui_warning,
  ui_error: ui_error,
  stroke_primary: stroke_primary,
  stroke_secondary: stroke_secondary,
  // UPDATE - INVERSE COLOR ENVIROMENT
  inverse_content_primary: inverse_content_primary,
  inverse_content_secondary: inverse_content_secondary,
  inverse_content_tertiary: inverse_content_tertiary,
  inverse_surface_primary: inverse_surface_primary,
  inverse_surface_secondary: inverse_surface_secondary,
  inverse_surface_tertiary: inverse_surface_tertiary,
  inverse_ui_active: inverse_ui_active,
  inverse_ui_success: inverse_ui_success,
  inverse_ui_warning: inverse_ui_warning,
  inverse_ui_error: inverse_ui_error,
  inverse_stroke_primary: inverse_stroke_primary,
  inverse_stroke_secondary: inverse_stroke_secondary,
  // UPDATE - CONTEXT PALETTE
  // INFORMATIONAL BLUE
  surface_informational: surface_informational,
  decoration_informational: decoration_informational,
  content_informational: content_informational,

  // PAUSED YELLOW
  surface_paused: surface_paused,
  decoration_paused: decoration_paused,
  content_paused: content_paused,

  // ACTIVATED GREEN
  surface_activated: surface_activated,
  decoration_activated: decoration_activated,
  content_activated: content_activated,

  // URGENT RED
  surface_urgent: surface_urgent,
  decoration_urgent: decoration_urgent,
  content_urgent: content_urgent,

  // POINTS AQUA
  surface_points: surface_points,
  decoration_points: decoration_points,
  content_points: content_points,
};
