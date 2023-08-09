import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import AppProvider from './AppContext';

describe('App Provider', () => {
  it('should be render children', () => {
    const { getByTestId } = render(
      <AppProvider>
        <Text testID="test-provider">Hello world!</Text>
      </AppProvider>,
    );

    const childrenElement = getByTestId('test-provider');

    expect(childrenElement).toBeTruthy();
  });
});
