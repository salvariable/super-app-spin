import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';

/**
 * useTheme is a custom hook that returns the ThemeContext object
 * @returns The themeContext is being returned.
 */
const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return themeContext;
};

export default useTheme;
