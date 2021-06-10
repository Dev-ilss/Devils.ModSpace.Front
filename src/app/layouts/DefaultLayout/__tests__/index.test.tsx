import * as React from 'react';
import { render } from '@testing-library/react';

import { DefaultLayout } from '..';

describe('<DefaultLayout  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DefaultLayout children={<h1>Hola</h1>} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
