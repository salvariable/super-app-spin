import {
  describe,
  it,
  jest,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
} from '@jest/globals';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';

import { AppContext } from '../context/AppContext';
import ThemeProvider from '../theme/ThemeProvider';

import { InputBalance } from '../screens';
import { errorMaxLabel, errorMinLabel } from '../constants/inputs';
import { REDEEM_CONFIRMATION } from '../constants/screens';
import { TTransaction } from '../types/data.types';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

describe('<InputBalance />', () => {

  const transaction = {
    entity: 'Hola',
    operation: 'earned',
    points: 333,
    transactionNo: '123'
  } as TTransaction

  const props: any = {
    navigation: {
      navigate: jest.fn()
    },
    route: {
      params: {
        transaction
      }
    }
  }

  const DB_RESPONSE = [
    {
      entity: 'Oxxo Gas',
      date: 'Sun Aug 06 2023',
      expiryDate: "Fri Sep 01 2023",
      points: 100,
      operation: 'earned',
      transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
      giftCode: "42738499092812008",
      id: 1,
    },
  ];

  const server = setupServer(
    rest.get('http://localhost:3001/history/5', (req, res, ctx) => {
      return res(ctx.json(DB_RESPONSE));
    }),
  );

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  const setup = () =>
    render(<InputBalance {...props} />, {
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
    const { getByTestId, getByText, queryByText } = setup();

    const inputElement = getByTestId('input-amount');
    const input = '20';

    fireEvent.changeText(inputElement, input);

    expect(queryByText(errorMinLabel)).toBeNull();
    expect(inputElement.props.value).toBe(input);
  });

  it('should have button disabled when input has no value', () => {
    const { getByTestId } = setup();
    const button = getByTestId('button');
    expect(button).toBeDisabled();
  });

  it('should enable button when amount is selected', () => {
    const { getByTestId, getByText, queryByText } = setup();

    const inputElement = getByTestId('input-amount');
    const input = '20';

    fireEvent.changeText(inputElement, input);

    expect(queryByText(errorMinLabel)).toBeNull();
    expect(inputElement.props.value).toBe(input);
  });

  it('should enable button when input is true and call API successfully', async () => {
    const { getByTestId, queryByText } = setup();

    const inputElement = getByTestId('input-amount');
    const button = getByTestId('button');
    const input = '20';

    fireEvent.changeText(inputElement, input);

    expect(queryByText(errorMinLabel)).toBeNull();
    expect(inputElement.props.value).toBe(input);
    expect(button).not.toBeDisabled();

    fireEvent.press(button);

    await waitFor(() => {
      expect(props.navigation.navigate).toHaveBeenCalledWith(REDEEM_CONFIRMATION, { transaction: DB_RESPONSE })
    })
  });

  it('should enable button when input is true and fail when calling API', async () => {
    // const spyAlert = jest.spyOn(Alert, 'alert');
    const { getByTestId, findByTestId, queryByText } = setup();

    const inputElement = getByTestId('input-amount');
    const button = getByTestId('button');
    const input = '20';

    fireEvent.changeText(inputElement, input);

    expect(queryByText(errorMinLabel)).toBeNull();
    expect(inputElement.props.value).toBe(input);

    // fireEvent.press(button);
    // console.log("alert2 ===", spyAlert.mock)
    // expect(Alert.alert).toHaveBeenCalled();
  });

  it('should display min error when input is less than min required', () => {
    const { getByTestId, getByText } = setup();

    const inputElement = getByTestId('input-amount');
    const input = '2';

    fireEvent.changeText(inputElement, input);

    expect(inputElement.props.value).toBe(input);
    expect(getByText(errorMinLabel)).toBeOnTheScreen();
  });

  it('should display max error when input is above max permitted', () => {
    const { getByTestId, getByText } = setup();

    const inputElement = getByTestId('input-amount');
    const input = '1200';

    fireEvent.changeText(inputElement, input);

    expect(inputElement.props.value).toBe(input);
    expect(getByText(errorMaxLabel)).toBeOnTheScreen();
  });

  it('should render no-button layout according to provider points', async () => {
    const { getByTestId, queryAllByTestId } = render(
      <AppContext.Provider value={{ balancePoints: 500 }}>
        <InputBalance />
      </AppContext.Provider>,
      {
        wrapper: ThemeProvider,
      },
    );

    await waitFor(() => {
      const points = getByTestId('points');
      expect(points.children[0]).toBe('500');
    });

    const buttonsContainer = queryAllByTestId('amount-button');
    expect(buttonsContainer.length).toBe(0);
  });

  it('should render two-button layout according to provider points', async () => {
    const { getByTestId, getAllByTestId } = render(
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

    const buttonsContainer = getAllByTestId('amount-button');
    expect(buttonsContainer.length).toBe(2);
  });

  it('should render four-button layout according to provider points', async () => {
    const { getByTestId, getAllByTestId } = render(
      <AppContext.Provider value={{ balancePoints: 10000 }}>
        <InputBalance />
      </AppContext.Provider>,
      {
        wrapper: ThemeProvider,
      },
    );

    await waitFor(() => {
      const points = getByTestId('points');
      expect(points.children[0]).toBe('10000');
    });

    const buttonsContainer = getAllByTestId('amount-button');
    expect(buttonsContainer.length).toBe(4);
  });
});

// Test 9: If user has more than 1,000 points, amount is selected and button is enabled

// Test 12: If input value is higher than balance, error message is expected

