import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
  jest,
} from '@jest/globals';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { SelectEntity } from '../screens';

import ThemeProvider from '../theme/ThemeProvider';
import AppProvider from '../context/AppContext';
import { NavigationContainer } from '@react-navigation/native';

const DB_ENTITY = [
  {
    id: 1,
    name: 'Oxxo Gas',
    category: 'fuel',
    avatar: './../src/assets/Images/volaris.png.png',
  },
  {
    id: 2,
    name: 'Volaris',
    category: 'flight',
    avatar: './../src/assets/Images/volaris.png.png',
  },
];

const server = setupServer(
  rest.get('http://localhost:3001/history', (req, res, ctx) => {
    return res(ctx.json([]));
  }),
  rest.get('http://localhost:3001/entity', (req, res, ctx) => {
    return res(ctx.json(DB_ENTITY));
  }),
);

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe('<SelectEntity />', () => {
  beforeEach(() => {
    mockedNavigation.mockClear();

    render(
      <AppProvider>
        <SelectEntity />
      </AppProvider>,
      {
        wrapper: ThemeProvider,
      },
    );
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
