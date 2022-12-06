import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import CharacteristicInput from './CharacteristicInput.jsx';

const ReviewForm = ({ metaData }) => {

  const [reviewForm, setReviewForm] = useState({
    product_id: metaData.product_id,
    rating: 1,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  });

  return (
    <styling.ReviewFormContainer>
      <h2>Review Form</h2>
      <styling.styledForm>
        <label htmlFor="rating">
          Rating:
          <input type="number" id="rating" name="rating" min="1" max="5" />
        </label>
        <styling.recommendDiv>
          <span>I recommend this product: </span>
          <label htmlFor="recommend">
            Yes
            <input type="radio" name="recommend" />
          </label>
          <label htmlFor="recommend">
            No
            <input type="radio" name="recommend" />
          </label>
        </styling.recommendDiv>
        {Object.entries(metaData.characteristics).map((characteristic) => (
          <CharacteristicInput
            key={characteristic[1].id}
            characteristic={characteristic}
            reviewForm={reviewForm}
            setReviewForm={setReviewForm}
          />
        ))}
      </styling.styledForm>
    </styling.ReviewFormContainer>
  );
};

export default ReviewForm;
