import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import RelatedItemsComparisons from '../RelatedItemsComparisons.jsx';

test('should render RelatedItemsComparisons', () => {
  render(<RelatedItemsComparisons />);
});
