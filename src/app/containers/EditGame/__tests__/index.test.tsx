import * as React from 'react';
import { render } from '@testing-library/react';

import { EditGame } from '..';

describe('<EditGame  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<EditGame />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
