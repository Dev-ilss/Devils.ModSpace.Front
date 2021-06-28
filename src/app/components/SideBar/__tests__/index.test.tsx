import * as React from 'react';
import { render } from '@testing-library/react';

import { SideBar } from '..';

describe('<SideBar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SideBar />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
