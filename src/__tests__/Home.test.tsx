import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { Home } from '../screens/Home';

describe('<Home />', () => {
  it('should render layout', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home-text')).toBeTruthy();
  });
});
