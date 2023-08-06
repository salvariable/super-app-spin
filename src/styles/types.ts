export enum ThemePaletteTypes {
  dark,
  light,
}

export type SizesType = {
  XXS: number;
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
  XXXL: number;
  XXXXL: number;

  // Please use this updated version of fonts
  headline_small: number;
  headline_medium: number;
  headline_large: number;
  headline_extra_large: number;
  regular: number;
  medium: number;
  small: number;
  extra_small: number;
};

export type UpdatedSizeType = {
  S: number;
  M: number;
  L: number;
  HEADLINE_S: number;
  HEADLINE_M: number;
  HEADLINE_L: number;
};

export type UpdatedLineHeight = {
  S_M: number;
  L: number;
  headline_small: number;
  HEADLINE_M: number;
  HEADLINE_L: number;
};

export type LineHeightType = {
  XXXS: number;
  XXS: number;
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
  XXXL: number;
  XXXXL: number;

  // Updated font line height
  large: number;
  extra_small: number;
  headline_small: number;
  headline_medium: number;
  headline_large: number;
  headline_extra_large: number;
  default: number;
};

export type FontFamilyType = {
  REGULAR: string;
  BOLD: string;
  SEMIBOLD: string;
  MEDIUM: string;
  ITALIC: string;
  LIGHT: string;
  HEADLINE_MEDIUM: string;
  HEADLINE_BOLD: string;
  ICON: string;
};

export type ColorType = {
  IS_DARK: boolean;
  SUCCESS: string;
  SUCCESS_LIGHT: string;
  SUCCESS_DARK: string;
  WARNING: string;
  WARNING_LIGHT: string;
  WARNING_DARK: string;
  DANGER: string;
  DANGER_LIGHT: string;
  DANGER_DARK: string;
  BRAND_DEFAULT: string;
  BRAND_DEFAULT_DARK_100: string;
  BRAND_DEFAULT_DARK_200: string;
  BRAND_DEFAULT_LIGHT_100: string;
  BRAND_DEFAULT_LIGHT_200: string;
  BRAND_DEFAULT_LIGHT_300: string;
  NEUTRAL_DEFAULT: string;
  NEUTRAL_DEFAULT_DARK_100: string;
  NEUTRAL_DEFAULT_DARK_200: string;
  NEUTRAL_DEFAULT_LIGHT_100: string;
  NEUTRAL_DEFAULT_LIGHT_200: string;
  NEUTRAL_DEFAULT_LIGHT_300: string;
  // UPDATE - GLOBAL BRAND COLORS
  brand_gradient: string[];
  brand_gradient_loyalty: string[];
  brand_gradient_purple: string[];
  brand_blue_primary: string;
  brand_orange_secondary: string;
  brand_pink_tertiary: string;
  brand_black_neutral: string;
  content_primary: string;
  content_secondary: string;
  content_tertiary: string;
  surface_primary: string;
  surface_secondary: string;
  surface_tertiary: string;
  ui_active: string;
  ui_info: string;
  ui_success: string;
  ui_warning: string;
  ui_error: string;
  stroke_primary: string;
  stroke_secondary: string;
  // UPDATE - INVERSE COLOR ENVIROMENT
  inverse_content_primary: string;
  inverse_content_secondary: string;
  inverse_content_tertiary: string;
  inverse_surface_primary: string;
  inverse_surface_secondary: string;
  inverse_surface_tertiary: string;
  inverse_ui_active: string;
  inverse_ui_success: string;
  inverse_ui_warning: string;
  inverse_ui_error: string;
  inverse_stroke_primary: string;
  inverse_stroke_secondary: string;
  // UPDATE - CONTEXT PALETTE
  // INFORMATIONAL BLUE
  surface_informational: string;
  decoration_informational: string;
  content_informational: string;

  // PAUSED YELLOW
  surface_paused: string;
  decoration_paused: string;
  content_paused: string;

  // ACTIVATED GREEN
  surface_activated: string;
  decoration_activated: string;
  content_activated: string;

  // URGENT RED
  surface_urgent: string;
  decoration_urgent: string;
  content_urgent: string;

  // POINTS AQUA
  surface_points: string;
  decoration_points: string;
  content_points: string;
};
