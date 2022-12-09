import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import ReviewTile from './ReviewTile.jsx';
import ReviewForm from './ReviewForm.jsx';

const ReviewList = ({ reviews, metaData, setReviews, sortOrder, displayReviewForm, setDisplayReviewForm }) => {

  const [displayedReviews, setDisplayedReviews] = useState(2);

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
        {reviews.length > displayedReviews ? <styling.Buttons type="button" onClick={() => setDisplayedReviews(displayedReviews + 2)}>More Reviews</styling.Buttons> : null}
        <styling.Buttons type="button" onClick={() => displayReviewForm ? setDisplayReviewForm(false) : setDisplayReviewForm(true)}>Add Review</styling.Buttons>
      </styling.ReviewButtonContainer>
      {displayReviewForm
        ? (
          <ReviewForm
            metaData={metaData}
            displayReviewForm={displayReviewForm}
            setDisplayReviewForm={setDisplayReviewForm}
            setReviews={setReviews}
          />
        )
        : null}
    </styling.ReviewListDiv>
  );
};

export default ReviewList;
