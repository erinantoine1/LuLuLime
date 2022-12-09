import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';

const ReviewStarRating = ({ reviewForm, setReviewForm }) => {
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setReviewForm({ ...reviewForm, rating: starRating + 1 });
  }, [starRating]);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <styling.StarButton
            type="button"
            key={index}
            clicked={index <= (hover || starRating)}
            onClick={() => setStarRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(starRating)}
          >
            <styling.StarButtonInside>&#9733;</styling.StarButtonInside>
          </styling.StarButton>
        );
      })}
    </div>
  );
};

export default ReviewStarRating;
