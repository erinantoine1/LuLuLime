import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import QuestionsAnswers from '../QuestionsAnswers.jsx';

test('should render QuestionsAnswers.jsx', () => {
  render(<QuestionsAnswers />);
});
