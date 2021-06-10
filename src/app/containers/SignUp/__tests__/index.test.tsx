import * as React from 'react';
import { render } from '@testing-library/react';

import { SignUp } from '..';

describe('<SignUp  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SignUp />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
