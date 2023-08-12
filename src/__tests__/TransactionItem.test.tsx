import React from 'react';
import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';

import type { TTransaction } from '../types/data.types';

import TransactionItem from '../components/custom/TransactionItem';

import { TRANSACTION_DETAILS } from '../constants/screens';

import ThemeProvider from '../theme/ThemeProvider';

const mockedNavigation = jest.fn();

const transaction: TTransaction = {
  entity: 'Oxxo Gas',
  date: 'Sun Aug 06 2023',
  points: 100,
  operation: 'earned',
  transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
  id: 1,
};

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe('<TransactionItem />', () => {
  beforeEach(() => {
    mockedNavigation.mockClear();
  });

  const setup = () =>
    render(<TransactionItem transaction={transaction} />, {
      wrapper: ThemeProvider,
    });

  it('should navigate to transaction details when a item is pressed', () => {
    const { getByTestId } = setup();

    const historyCard = getByTestId('transaction-item');

    fireEvent.press(historyCard);

    expect(mockedNavigation).toHaveBeenCalledWith(TRANSACTION_DETAILS, {
      transaction,
    });
  });
});
