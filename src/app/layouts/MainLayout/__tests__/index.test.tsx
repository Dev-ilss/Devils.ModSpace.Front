import * as React from 'react';
import { render } from '@testing-library/react';

import { MainLayout } from '..';

describe('<MainLayout  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MainLayout />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
