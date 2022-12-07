import * as React from 'react';
import { render } from '@testing-library/react';

import ProductBreakdown from '../ProductBreakdown.jsx';

describe('should render ProductBreakdown', () => {
  it('renders ProductBreakdown component', () => {
    render(<ProductBreakdown />);
  });
});

