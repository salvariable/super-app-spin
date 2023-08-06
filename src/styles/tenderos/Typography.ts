import { LightTheme } from '../tenderos';
import type { SizesType, LineHeightType, FontFamilyType } from '../types';

/**
 * There are several deprecated properties on this method refer to the information below
 *
 * @property {string} XXS WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XS WARNING - DEPRECATED PROPERTY
 *
 * @property {string} M WARNING - DEPRECATED PROPERTY
 *
 * @property {string} L WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XL WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XXL WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XXXL WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XXXXL WARNING - DEPRECATED PROPERTY
 *
 */
const size: SizesType = {
  XXS: 10,
  XS: 12,
  S: 14,
  M: 16,
  L: 20,
  XL: 24,
  XXL: 28,
  XXXL: 32,
  XXXXL: 48,

  // UPDATE - USE THIS FONT SIZE
  extra_small: 12,
  small: 14,
  medium: 14,
  regular: 16,
  headline_small: 18,
  headline_medium: 20,
  headline_large: 24,
  headline_extra_large: 40,
};

/**
 * There are several deprecated properties on this method refer to the information below
 *
 * @property {string} XXS WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XS WARNING - DEPRECATED PROPERTY
 *
 * @property {string} M WARNING - DEPRECATED PROPERTY
 *
 * @property {string} L WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XL WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XXL WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XXXL WARNING - DEPRECATED PROPERTY
 *
 * @property {string} XXXXL WARNING - DEPRECATED PROPERTY
 *
 */
const lineHeight: LineHeightType = {
  XXXS: 18,
  XXS: 20,
  XS: 22,
  S: 24,
  M: 28,
  L: 32,
  XL: 36,
  XXL: 40,
  XXXL: 52,
  XXXXL: 56,

  // UPDATE - USE THIS FONT LINE HEIGHT
  default: 20,
  large: 24,
  extra_small: 16,
  headline_small: 24,
  headline_medium: 24,
  headline_large: 32,
  headline_extra_large: 52,
};

const fontFamily: FontFamilyType = {
  REGULAR: 'Inter-Regular',
  BOLD: 'Inter-Bold',
  SEMIBOLD: 'Inter-SemiBold',
  MEDIUM: 'Inter-Medium',
  ITALIC: 'Inter-Italic',
  LIGHT: 'Inter-Light',
  HEADLINE_BOLD: 'Poppins-Bold',
  HEADLINE_MEDIUM: 'Poppins-Medium',
  ICON: 'spinplus-icons',
};

const fontConfig = {
  default: {
    fontFamily: fontFamily.REGULAR,
  },
  'title-one-regular': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.XXL,
    lineHeight: lineHeight.XL,
  },
  'title-one-medium': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.XXL,
    lineHeight: lineHeight.XL,
  },
  'title-two-regular': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.XL,
    lineHeight: lineHeight.L,
  },
  'title-two-medium': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.XL,
    lineHeight: lineHeight.L,
  },
  subtitle: {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.L,
    lineHeight: lineHeight.M,
  },
  'subtitle-medium': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.L,
    lineHeight: lineHeight.M,
  },
  'content-one-regular': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.M,
    lineHeight: lineHeight.S,
  },
  'content-one-medium': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.M,
    lineHeight: lineHeight.S,
  },
  'content-one-semibold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.M,
    lineHeight: lineHeight.S,
  },
  'content-two-regular': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.S,
    lineHeight: lineHeight.XS,
  },
  'content-two-medium': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.M,
    lineHeight: lineHeight.XS,
  },
  'content-three-regular': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.S,
    lineHeight: lineHeight.XS,
  },
  'content-three-medium': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.S,
    lineHeight: lineHeight.XS,
  },
  caption: {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.XXS,
    lineHeight: lineHeight.XXS,
  },
  'caption-regular': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.XS,
    lineHeight: lineHeight.XXS,
  },
  'caption-medium': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.XS,
    lineHeight: lineHeight.XXS,
  },
  overline: {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.XXS,
    lineHeight: lineHeight.XXXS,
  },
  'text-link-one': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.M,
    color: LightTheme.BRAND_DEFAULT,
    lineHeight: lineHeight.S,
  },
  'text-link-two': {
    fontFamily: fontFamily.MEDIUM,
    fontSize: size.S,
    color: LightTheme.BRAND_DEFAULT,
    lineHeight: lineHeight.XS,
  },
  'jumbo-one': {
    fontFamily: fontFamily.BOLD,
    fontSize: size.XXXXL,
    lineHeight: lineHeight.XXXXL,
  },
  'jumbo-two': {
    fontFamily: fontFamily.BOLD,
    fontSize: size.XXXL,
    lineHeight: lineHeight.XXL,
  },
  'title-one-semibold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.XXL,
    lineHeight: lineHeight.XL,
  },
  'title-two-semibold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.XL,
    lineHeight: lineHeight.L,
  },
  'subtitle-semibold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.L,
    lineHeight: lineHeight.M,
  },

  // UPDATE - PLEASE USE THIS FONT CONFIGURATION
  'headline-extra-large': {
    fontFamily: fontFamily.HEADLINE_MEDIUM,
    fontSize: size.headline_extra_large,
    lineHeight: lineHeight.headline_extra_large,
  },
  'headline-large': {
    fontFamily: fontFamily.HEADLINE_BOLD,
    fontSize: size.headline_large,
    lineHeight: lineHeight.headline_large,
  },
  'headline-medium': {
    fontFamily: fontFamily.HEADLINE_MEDIUM,
    fontSize: size.headline_medium,
    lineHeight: lineHeight.headline_medium,
  },
  'headline-small': {
    fontFamily: fontFamily.HEADLINE_MEDIUM,
    fontSize: size.headline_small,
    lineHeight: lineHeight.default,
  },
  'default-body': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.regular,
    lineHeight: lineHeight.default,
  },
  'small-body': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.small,
    lineHeight: lineHeight.default,
  },
  'extra-small-body': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.extra_small,
    lineHeight: lineHeight.extra_small,
  },
  'default-body-bold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.regular,
    lineHeight: lineHeight.default,
  },
  'small-body-bold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.small,
    lineHeight: lineHeight.default,
  },
  'extra-small-body-bold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.extra_small,
    lineHeight: lineHeight.extra_small,
  },
  'text-link-default': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.regular,
    lineHeight: lineHeight.default,
    color: '#1723D3',
    textDecorationLine: 'underline',
  },
  'text-link-small': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.small,
    lineHeight: lineHeight.default,
    color: '#1723D3',
    textDecorationLine: 'underline',
  },
  'text-link-extra-small': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.extra_small,
    lineHeight: lineHeight.extra_small,
    color: '#1723D3',
    textDecorationLine: 'underline',
  },
  'label-default': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.regular,
    lineHeight: lineHeight.extra_small,
  },
  'label-default-bold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.regular,
    lineHeight: lineHeight.extra_small,
  },
  'label-small': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.small,
    lineHeight: lineHeight.extra_small,
  },
  'label-small-bold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.small,
    lineHeight: lineHeight.extra_small,
  },
  'label-extra-small': {
    fontFamily: fontFamily.REGULAR,
    fontSize: size.extra_small,
    lineHeight: lineHeight.extra_small,
  },
  'label-extra-small-bold': {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: size.extra_small,
    lineHeight: lineHeight.extra_small,
  },
  'icon-font': {
    fontFamily: fontFamily.ICON,
  },
};

export { fontFamily, lineHeight, size, fontConfig };
