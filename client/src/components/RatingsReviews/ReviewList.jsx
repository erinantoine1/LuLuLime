import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import ReviewTile from './ReviewTile.jsx';
import ReviewForm from './ReviewForm.jsx';

const ReviewList = ({ reviews, metaData }) => {

  const [displayedReviews, setDisplayedReviews] = useState(2);

  return (
    <styling.ReviewListDiv>
      <styling.ReviewTilesContainer>
        {reviews.slice(0, displayedReviews).map((review) => (
          <ReviewTile key={review.review_id} review={review} />
        ))}
      </styling.ReviewTilesContainer>
      <styling.ReviewButtonContainer>
        {reviews.length > displayedReviews ? <button type="submit" onClick={() => setDisplayedReviews(displayedReviews + 2)}>More Reviews</button> : null}
        <button type="submit">Add Review</button>
      </styling.ReviewButtonContainer>
      <ReviewForm metaData={metaData} />
    </styling.ReviewListDiv>
  );
};

export default ReviewList;
