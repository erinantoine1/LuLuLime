import React, { useState, useEffect } from 'react';
import * as styling from './Styling.js';
import CharSection from './CharSection.jsx';

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

  const [photoView, setPhotoView] = useState(false);

  const handleRecommend = (value) => {
    value === "true" ? setReviewForm({...reviewForm, recommend: true}) : setReviewForm({...reviewForm, recommend: false})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reviewForm);
  };

  return (
    <styling.ReviewFormContainer>
      <h2>Review Form</h2>
      <styling.styledForm>
        <label htmlFor="rating">
          Rating:
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={reviewForm.rating}
            onChange={(event) => setReviewForm({ ...reviewForm, rating: event.target.value })}
          />
        </label>
        <styling.recommendDiv>
          <span>I recommend this product: </span>
          <label htmlFor="recommend">
            Yes
            <input type="radio" id="yes" name="recommend" value="true" onChange={(event) => handleRecommend(event.target.value)} />
          </label>
          <label htmlFor="recommend">
            No
            <input type="radio" id="no" name="recommend" value="false" onChange={(event) => handleRecommend(event.target.value)} />
          </label>
        </styling.recommendDiv>
        {Object.entries(metaData.characteristics).map((characteristic) => (
          <CharSection
            key={characteristic[1].id}
            characteristic={characteristic}
            reviewForm={reviewForm}
            setReviewForm={setReviewForm}
          />
        ))}
        <styling.textAreaDiv>
          <label htmlFor="summary">
            Summary
            <textarea
              id="summary"
              name="summary"
              maxLength="60"
              placeholder="Best Purchase Ever!"
              value={reviewForm.summary}
              onChange={(event) => setReviewForm({ ...reviewForm, summary: event.target.value })}
            />
          </label>
          <label htmlFor="body">
            Review
            <textarea
              cols="48"
              rows="8"
              id="body"
              name="body"
              minLength="50"
              maxLength="1000"
              placeholder="Best Purchase Ever!"
              value={reviewForm.body}
              onChange={(event) => setReviewForm({ ...reviewForm, body: event.target.value })}
            />
            {reviewForm.body.length < 50 ? `Minimum Required Characters Left: ${50 - reviewForm.body.length}` : 'Minimum Reached'}
          </label>
        </styling.textAreaDiv>
        <styling.photoButton
          type="submit"
        >
          Upload Photos
        </styling.photoButton>
        <label htmlFor="nicname">
          Nickname
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="Example: jackson11!"
            value={reviewForm.name}
            onChange={(event) => setReviewForm({ ...reviewForm, name: event.target.value })}
          />
        </label>
        <span>For privacy reasons, do not use your full name or email address</span>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example: jackson11@email.com"
            value={reviewForm.email}
            onChange={(event) => setReviewForm({ ...reviewForm, email: event.target.value })}
          />
        </label>
        <span>For authentication reasons, you will not be emailed</span>
        <styling.submitButton type="submit" value="Submit Review" onClick={(event) => handleSubmit(event)} />
      </styling.styledForm>
    </styling.ReviewFormContainer>
  );
};

export default ReviewForm;
