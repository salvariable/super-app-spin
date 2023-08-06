// Brand colors
const BRAND_DEFAULT = '#8C3778';
const BRAND_DEFAULT_DARK_100 = '#5F2551'; // TODO review with Tenderos Designers
const BRAND_DEFAULT_DARK_200 = '#411937'; // TODO review with Tenderos Designers
const BRAND_DEFAULT_LIGHT_100 = '#FFEFFB'; // TODO review with Tenderos Designers
const BRAND_DEFAULT_LIGHT_200 = '#F8BBE9'; // TODO review with Tenderos Designers
const BRAND_DEFAULT_LIGHT_300 = '#E285CC'; // TODO review with Tenderos Designers

// Neutral colors // TODO review this section with Tenderos Designers
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
const brand_gradient_tenderos = ['#8C3778', '#C6556F']; // TODO should be brand_gradient

const brand_blue_primary = '#8C3778'; // TODO brand_grape_primary (Grape in DesignLibrary)
const brand_orange_secondary = '#EB8465';
const brand_pink_tertiary = '#BFA8FF'; // TODO brand_purple_tertiary (Purple in DesignLibrary)
const brand_black_neutral = '#3D2973'; // TODO brand_purple_neutral (Purple in DesignLibrary)

// UPDATE - DEFAULT COLOR ENVIROMENT
const content_primary = '#3D2973';
const content_secondary = '#282828';
const content_tertiary = '#696969';

const surface_primary = '#FFFFFF';
const surface_secondary = '#F5F5FC';
const surface_tertiary = '#E8E8F0';

const ui_active = '#8C3778';
const ui_info = '#3D2973';
const ui_success = '#149246';
const ui_warning = '#E96138';
const ui_error = '#C21A1A';

const stroke_primary = '#A9A9A9';
const stroke_secondary = '#696969';

// UPDATE - INVERSE COLOR ENVIROMENT
const inverse_content_primary = '#FFFFFF';
const inverse_content_secondary = '#D4D4D4';
const inverse_content_tertiary = '#A9A9A9';

const inverse_surface_primary = '#282828';
const inverse_surface_secondary = '#464646';
const inverse_surface_tertiary = '#696969';

const inverse_ui_active = '#E285CC';
const inverse_ui_success = '#6CDB98';
const inverse_ui_warning = '#F5977B';
const inverse_ui_error = '#F56464';

const inverse_stroke_primary = '#E6E6EC';
const inverse_stroke_secondary = '#BABAB9';

// UPDATE - CONTEXT PALETTE
// INFORMATIONAL BLUE
const surface_informational = '#FADFF3';
const decoration_informational = '#CE65B5';
const content_informational = '#8C3778';

// PAUSED YELLOW
const surface_paused = '#FFEAC9';
const decoration_paused = '#F5BD67';
const content_paused = '#A86706';

// ACTIVATED GREEN
const surface_activated = '#D6FFE7';
const decoration_activated = '#95F2BB';
const content_activated = '#2CAD5F';

// URGENT RED
const surface_urgent = '#FFBDBD';
const decoration_urgent = '#F56464';
const content_urgent = '#C21A1A';

// POINTS AQUA
const surface_points = '#E4DAFF';
const decoration_points = '#A689F4';
const content_points = '#593AAF';

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
  brand_gradient_tenderos: brand_gradient_tenderos,
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
