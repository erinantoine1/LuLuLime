import React from 'react';
import * as styling from './Styling.js';
import ProductBreakdown from './ProductBreakdown.jsx';

const RatingBreakdown = () => {
  return (
    <styling.RatingBreakdownDiv>
      <span> Rating: Stars</span>
      <span> % Recommended</span>
      <div>
        Bar Graph
        <span>5 Stars</span>
        <span>4 Stars</span>
        <span>3 Stars</span>
        <span>2 Stars</span>
        <span>1 Star</span>
      </div>
      <ProductBreakdown />
    </styling.RatingBreakdownDiv>
  );
};

export default RatingBreakdown;
