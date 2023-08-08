import { describe, expect, it } from '@jest/globals';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { AppContext } from '../context/AppContext';
import ThemeProvider from '../theme/ThemeProvider';

import { InputBalance } from '../screens';

describe('<InputBalance />', () => {
  const setup = () =>
    render(<InputBalance />, {
      wrapper: ThemeProvider,
    });

  it('should render layout', () => {
    const { getByTestId } = setup();

    const layoutContainer = getByTestId('input-balance');
    const headerContainer = getByTestId('header-points');
    const instructionLabel = getByTestId('ínstruction-label');
    const inputAmount = getByTestId('input-amount');
    const button = getByTestId('button');

    expect(layoutContainer).toBeOnTheScreen();
    expect(headerContainer).toBeOnTheScreen();
    expect(instructionLabel).toBeOnTheScreen();
    expect(inputAmount).toBeOnTheScreen();
    expect(button).toBeOnTheScreen();
  });

  it('should render provider points', async () => {
    const { getByTestId } = render(
      <AppContext.Provider value={{ balancePoints: 1000 }}>
        <InputBalance />
      </AppContext.Provider>,
      {
        wrapper: ThemeProvider,
      },
    );

    await waitFor(() => {
      const points = getByTestId('points');

      expect(points.children[0]).toBe('1000');
    });
  });

  it('should update input value when text change', () => {
    const { getByTestId } = setup();

    const inputElement = getByTestId('input-amount');
    const input = '20';

    fireEvent.changeText(inputElement, input);

    expect(inputElement.props.value).toBe(input);
  });
});

// Test 2: If button is enabled and called, API mock is called with success and navigates to 'Redeem Confirmation'

// Test 3: If button is enabled and called, API mock is called with error, alert text is same is error message, alert button is pressed

// Test 4: If user has less than 1,000 points, input changes from empty to a value higher than required and button is enabled

// Test 5: If user has less than 1,000 points, input changes from empty to a value less than required, error container is true and button is disabled

// Test 6: If user has less than 1,000 points, amount button id is null or does not exist

// Test 7: If user has more than 1,000 points, amount button id is true and length is two.

// Test 8: If user has more than 1,000 points, input changes from empty to a value higher than required and button is enabled

// Test 9: If user has more than 1,000 points, amount is selected and button is enabled

// Test 10: If user has more than 10,000 points, amount button id is true and length is four.

// Test 11: If input value is higher than limit allowed, error message is expected

// Test 12: If input value is higher than balance, error message is expected

// Test 13: If input value is zero, error message is expected
