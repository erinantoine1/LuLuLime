import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import ReviewTile from './ReviewTile.jsx';
import ReviewForm from './ReviewForm.jsx';

const ReviewList = ({ reviews, metaData, setReviews, sortOrder }) => {

  const [displayedReviews, setDisplayedReviews] = useState(2);

  const [displayReviewForm, setDisplayReviewForm] = useState(false);

  return (
    <styling.ReviewListDiv>
      <styling.ReviewTilesContainer>
        {reviews.slice(0, displayedReviews).map((review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
            setReviews={setReviews}
            sortOrder={sortOrder}
          />
        ))}
      </styling.ReviewTilesContainer>
      <styling.ReviewButtonContainer>
        {reviews.length > displayedReviews ? <button type="submit" onClick={() => setDisplayedReviews(displayedReviews + 2)}>More Reviews</button> : null}
        <button type="submit" onClick={() => displayReviewForm ? setDisplayReviewForm(false) : setDisplayReviewForm(true)}>Add Review</button>
      </styling.ReviewButtonContainer>
      {displayReviewForm
        ? (
          <ReviewForm
            metaData={metaData}
            setDisplayReviewForm={setDisplayReviewForm}
            setReviews={setReviews}
          />
        )
        : null}
    </styling.ReviewListDiv>
  );
};

export default ReviewList;
