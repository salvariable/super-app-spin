import React from 'react';
import type { ThemeContextType } from './types';

/* Creating a context object. */
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const ThemeContext = React.createContext<ThemeContextType>(null!);

export default ThemeContext;
