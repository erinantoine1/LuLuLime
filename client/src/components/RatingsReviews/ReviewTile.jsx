import React from 'react';
import * as styling from './Styling.js';

const ReviewTile = () => {
  return (
    <styling.ReviewTileDiv>
      <styling.ReviewTileHeader> Review Summary : Date</styling.ReviewTileHeader>
      <span>Star Rating</span>
      <div>Review Body</div>
      <span>Images</span>
      <span>I Recommend</span>
      <span>Reviewer Name</span>
      <div>Response From Seller</div>
      <span>Helpful? : Report</span>
    </styling.ReviewTileDiv>
  );
};

export default ReviewTile;
