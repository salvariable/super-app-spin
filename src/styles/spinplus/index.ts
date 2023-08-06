import {
  BASE_COLORS as DARK_BASE_COLORS,
  BRAND_DEFAULT_COLORS as DARK_BRAND_DEFAULT_COLORS,
  brand_colors as dark_brand_colors,
} from './palette/DarkPalette';
import {
  BASE_COLORS as LIGHT_BASE_COLORS,
  BRAND_DEFAULT_COLORS as LIGHT_BRAND_DEFAULT_COLORS,
  brand_colors as light_brand_colors,
} from './palette/LightPalette';
import type { ColorType } from '../types';

export const DarkTheme: ColorType = {
  IS_DARK: true,
  ...DARK_BASE_COLORS,
  ...DARK_BRAND_DEFAULT_COLORS,
  ...dark_brand_colors,
};

export const LightTheme: ColorType = {
  IS_DARK: false,
  ...LIGHT_BASE_COLORS,
  ...LIGHT_BRAND_DEFAULT_COLORS,
  ...light_brand_colors,
};
