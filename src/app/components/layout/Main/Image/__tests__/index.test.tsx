import * as React from 'react';
import { render } from '@testing-library/react';

import { Image } from '..';

describe('<Image  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Image />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
