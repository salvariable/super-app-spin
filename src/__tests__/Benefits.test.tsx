import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import ThemeProvider from '../theme/ThemeProvider';

import { Benefits } from '../screens';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Benefits />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <NavigationContainer>
          <Benefits {...({} as any)} />
        </NavigationContainer>
      </ThemeProvider>,
    );
  });

  it('should render layout', () => {
    expect(screen.getByTestId('grid')).toBeTruthy();
  });

  it('should render sections', () => {
    const { getAllByTestId } = screen;

    expect(getAllByTestId('promo-text')).toHaveLength(3);
  });
});
