import type {
  ColorType,
  SizesType,
  LineHeightType,
  FontFamilyType,
} from '../styles/types';

export enum ThemeVariant {
  SpinPlus = 'SpinPlus',
  Tenderos = 'Tenderos',
}

interface ThemeContextType {
  variant: ThemeVariant;
  colors: ColorType;
  typography: Typography;
  isLightTheme: boolean;
  toggleTheme: () => void;
}

interface ThemeType {
  colors: ColorType;
  typography: Typography;
}

interface Typography {
  size: SizesType;
  lineHeight: LineHeightType;
  fontFamily: FontFamilyType;
}

export { ThemeContextType, Typography, ThemeType };
