/* eslint-disable @typescript-eslint/no-explicit-any */
import useTheme from './useTheme';

/**
 * It takes a function that takes a theme and returns a styles object
 * @param {any} styles
 * @returns A function that takes a theme and returns the styles.
 */
const useThemedStyles = (styles: any) => {
  const theme = useTheme();
  return styles(theme);
};

export default useThemedStyles;
