// // Test 1: Transactions Render
// Render TopTab navigator with "All", "Earned" and "Redeemed" titles
// Renders list with transactions
// Renders date label separation

// Test 2: Navigates to transaction details on transaction press

import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
} from '@jest/globals';
import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { SelectEntity } from '../screens';

import ThemeProvider from '../theme/ThemeProvider';

const DB_HISTORY = [
  {
    entity: 'Oxxo Gas',
    date: 'Sun Aug 06 2023',
    points: 100,
    operation: 'earned',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
    id: 1,
  },
  {
    entity: 'Volaris',
    date: 'Sun Aug 01 2023',
    points: 1000,
    operation: 'earned',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
    id: 2,
  },
];

const server = setupServer(
  rest.get('http://localhost:3001/history', (req, res, ctx) => {
    return res(ctx.json(DB_HISTORY));
  }),
);

describe('<SelectEntity />', () => {
  beforeEach(() => {
    render(<SelectEntity />, {
      wrapper: ThemeProvider,
    });
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should render all entities', async () => {
    const { getByTestId } = screen;

    await waitFor(() => {
      const entitiesList = getByTestId('entities-list');

      expect(entitiesList).toBeVisible();
    });
  });

  it('should not render a loader', async () => {
    const { getByTestId } = screen;

    await waitForElementToBeRemoved(() => getByTestId('loader'));
  });
});
