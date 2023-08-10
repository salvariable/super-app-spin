import React from 'react';
import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';

import TransactionsPoints from '../components/custom/TransactionsPoints';

import { SELECT_ENTITY, TRANSACTIONS } from '../constants/screens';

import ThemeProvider from '../theme/ThemeProvider';

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe('<TransactionPoints />', () => {
  beforeEach(() => {
    mockedNavigation.mockClear();
  });

  const setup = () =>
    render(<TransactionsPoints />, {
      wrapper: ThemeProvider,
    });

  it('should navigate to transactions when "consulta tu historial" is pressed', () => {
    const { getByText } = setup();

    const historyCard = getByText(/consulta tu historial/i);

    fireEvent.press(historyCard);

    expect(mockedNavigation).toHaveBeenCalledWith(TRANSACTIONS);
  });

  it('should navigate to select entity when "cambia tus puntos" is pressed', () => {
    const { getByText } = setup();

    const pointsCard = getByText(/cambia tus puntos/i);

    fireEvent.press(pointsCard);

    expect(mockedNavigation).toHaveBeenCalledWith(SELECT_ENTITY);
  });
});
