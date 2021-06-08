import * as React from 'react';
import { render } from '@testing-library/react';

import { Home } from '..';

describe('<Home  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Home />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
