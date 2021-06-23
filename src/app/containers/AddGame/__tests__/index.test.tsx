import * as React from 'react';
import { render } from '@testing-library/react';

import { AddGame } from '..';

describe('<AddGame  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddGame />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
