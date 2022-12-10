import * as React from 'react';
import axios from 'axios';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { reviewsTestData, metadataTestData } from './TestData.js';

import RatingsReviews from '../RatingsReviews.jsx';

jest.mock('axios');

axios.get.mockImplementation((url) => {
  switch (url) {
    case '/reviews':
      return Promise.resolve({ data: reviewsTestData });
    case '/reviews/meta':
      return Promise.resolve({ data: metadataTestData });
    default:
      return Promise.reject(new Error('not found'));
  }
});

afterEach(cleanup);

describe('RatingsReviews', () => {
  it('renders RatingsReviews', async () => {

    render(<RatingsReviews />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    expect(await screen.findByLabelText(/Sort/)).toBeInTheDocument();

  });
});
