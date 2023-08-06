import {
  DarkTheme as SpinPlusDarkTheme,
  LightTheme as SpinPlusLightTheme,
} from './spinplus';
import {
  DarkTheme as TenderosDarkTheme,
  LightTheme as TenderosLightTheme,
} from './tenderos';
import * as SpinPlusTypography from './spinplus/Typography';
import * as TenderosTypography from './tenderos/Typography';
import { ThemeVariant } from '../theme/types';
import { ThemePaletteTypes } from './types';

export const getColors = (isLightTheme: boolean, variant: ThemeVariant) => {
  const themeMapping = {
    [ThemeVariant.SpinPlus]: {
      [ThemePaletteTypes.dark]: SpinPlusDarkTheme,
      [ThemePaletteTypes.light]: SpinPlusLightTheme,
    },
    [ThemeVariant.Tenderos]: {
      [ThemePaletteTypes.dark]: TenderosDarkTheme,
      [ThemePaletteTypes.light]: TenderosLightTheme,
    },
  };

  return themeMapping[variant][
    isLightTheme ? ThemePaletteTypes.light : ThemePaletteTypes.dark
  ];
};

export const getTypography = (variant: ThemeVariant) => {
  const typographyMapping = {
    [ThemeVariant.SpinPlus]: SpinPlusTypography,
    [ThemeVariant.Tenderos]: TenderosTypography,
  };

  return typographyMapping[variant];
};
