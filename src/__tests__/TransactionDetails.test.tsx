// // Test 1: Transaction Details Render
// Renders layout with received props / type

import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { TransactionDetails } from '../screens/TransactionDetails';

describe('<TransactionDetails />', () => {
  const setup = () => render(<TransactionDetails {...({} as any)} />);

  it('should render layout', () => {
    const { getByTestId } = setup();

    const detailsLayout = getByTestId('transaction-details');

    expect(detailsLayout).toBeOnTheScreen();
  });

  // it('should render', () => {
  //   const {getByTestId} = setup();

  //   const entityLabel = getByTestId('entity');

  //   expect(entityLabel).toHaveTextContent()
  // });
});
