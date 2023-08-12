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
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Transactions } from '../screens';

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
  {
    entity: 'Smart Fit',
    date: 'Tue Aug 08 2023',
    expiryDate: 'Fri Sep 01 2023',
    points: 500,
    operation: 'redeemed',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a50',
    giftCode: '42738499092812008',
    id: 5,
  },
];

const server = setupServer(
  rest.get('http://localhost:3001/history', (req, res, ctx) => {
    return res(ctx.json(DB_HISTORY));
  }),
);

describe('<Transactions />', () => {
  beforeEach(() => {
    render(<Transactions />, {
      wrapper: ThemeProvider,
    });
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should render layout', () => {
    const { getByTestId } = screen;

    const container = getByTestId('transactions-container');
    expect(container).toBeVisible();
  });

  it('should not render a loader', async () => {
    const { getByTestId } = screen;

    await waitForElementToBeRemoved(() => getByTestId('loader'));
  });

  // ERROR: https://github.com/satya164/react-native-tab-view/issues/1025
  // it('should render data', async () => {
  //   const { getByTestId } = screen;

  //   screen.debug();

  //   await waitFor(() => {
  //     const allItemsContainer = getByTestId('tabs');
  //     expect(allItemsContainer).toBeVisible();
  //   });
  // });
});
