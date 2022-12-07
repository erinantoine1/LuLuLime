import * as React from 'react';
import { render } from '@testing-library/react';

import Overview from '../Overview.jsx';

describe('should render Overview', () => {
  it('renders Overview component', () => {
    render(<Overview />);
  });
});

