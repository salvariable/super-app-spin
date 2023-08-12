import React from 'react';
import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';

import type { TEntity } from '../types/data.types';

import EntityItem from '../components/custom/EntityItem';

import { ENTITY_LIMIT, ENTITY_MIN } from '../constants/values';

import { INPUT_BALANCE } from '../constants/screens';

import ThemeProvider from '../theme/ThemeProvider';

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe('<EntityItem />', () => {
  beforeEach(() => {
    mockedNavigation.mockClear();
  });

  const setup = () => {
    const entity: TEntity = {
      id: 1,
      name: 'Oxxo Gas',
      category: 'fuel',
      avatar: '',
    };

    return render(<EntityItem entity={entity} />, {
      wrapper: ThemeProvider,
    });
  };

  it('should navigate to input balance when a entity card is pressed', () => {
    const { getAllByTestId } = setup();

    const entities = getAllByTestId('entity-item');

    fireEvent.press(entities[0]);

    expect(mockedNavigation).toHaveBeenCalledWith(INPUT_BALANCE, {
      entityLimit: ENTITY_LIMIT,
      entityMin: ENTITY_MIN,
    });
  });
});
