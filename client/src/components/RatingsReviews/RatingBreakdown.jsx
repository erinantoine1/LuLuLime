import React from 'react';
import * as styling from './Styling.js';
import ProductBreakdown from './ProductBreakdown.jsx';

const RatingBreakdown = () => {
  return (
    <styling.RatingBreakdownDiv>
      <span> Rating: Stars</span>
      <span> % Recommended</span>
      <ProductBreakdown />
    </styling.RatingBreakdownDiv>
  );
};

export default RatingBreakdown;
