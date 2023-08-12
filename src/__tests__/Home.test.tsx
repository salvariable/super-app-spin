import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { Home } from '../screens';

import ThemeProvider from '../theme/ThemeProvider';

describe('<Home />', () => {
  it('should render layout', () => {
    const { getByTestId } = render(<Home />, {
      wrapper: ThemeProvider,
    });

    expect(getByTestId('home-text')).toBeTruthy();
  });
});
