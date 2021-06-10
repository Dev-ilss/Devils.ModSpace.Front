import * as React from 'react';
import { render } from '@testing-library/react';

import { MainLayout } from '..';

describe('<MainLayout  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MainLayout children={<h1>Hola</h1>} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
