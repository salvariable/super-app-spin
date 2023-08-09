import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import ThemeProvider from '../theme/ThemeProvider';

import { Benefits } from '../screens/Benefits';
import Navigation from '../../Navigation';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Benefits />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Benefits {...({} as any)} />
      </ThemeProvider>,
    );
  });

  it('should render layout', () => {
    expect(screen.getByTestId('grid')).toBeTruthy();
  });

  it('should render sections', () => {
    expect(screen.getByTestId('promo-1-text')).toBeTruthy();
    expect(screen.getByTestId('promo-2-text')).toBeTruthy();
    expect(screen.getByTestId('promo-3-text')).toBeTruthy();
  });

  it('should navigate to transactions', () => {
    const component = <Navigation />;

    const { getAllByTestId, getByTestId } = render(component);

    const grid = getByTestId('grid');

    // fireEvent.press(firstGridItem);

    // const transactionsText = getByTestId('transactions-text');

    // expect(transactionsText).toBeOnTheScreen();
  });
});
