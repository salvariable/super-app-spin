import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react-native';

import type { TTransaction } from '../types/data.types';

import TransactionDetails from '../screens/TransactionDetails';

import ThemeProvider from '../theme/ThemeProvider';

describe('<TransactionDetails />', () => {
  const props: any = {
    route: {
      params: {
        transaction: {
          entity: 'Hola',
          operation: 'earned',
          points: 333,
          transactionNo: '123',
        } as TTransaction,
      },
    },
  };
  const setup = () =>
    render(<TransactionDetails {...props} />, {
      wrapper: ThemeProvider,
    });

  it('should render layout', () => {
    const { getByTestId } = setup();

    const entity = getByTestId('entity');
    const points = getByTestId('points');
    const amount = getByTestId('amount');
    const date = getByTestId('date');
    const expiryDate = getByTestId('expiry-date');
    const transactionNumber = getByTestId('transaction-number');
    const operationPoints = `${points.children[0]}${points.children[1]}`;

    expect(entity).toBeOnTheScreen();
    expect(operationPoints).toBe('+333');
    expect(amount.children[0]).toBe('$33.30');
    expect(transactionNumber).toBeOnTheScreen();
    expect(date).toBeOnTheScreen();
    expect(expiryDate).toBeOnTheScreen();
  });
});
