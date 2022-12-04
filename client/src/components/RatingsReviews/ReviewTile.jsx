/* eslint-disable react/prop-types */
import React from 'react';
import * as styling from './Styling.js';

const ReviewTile = ({ review }) => {

  return (
    <styling.ReviewTileDiv>
      <styling.ReviewTileHeader>
        <span>{review.summary}</span>
        <span>{review.date}</span>
      </styling.ReviewTileHeader>
      <span>{review.rating}</span>
      <div>{review.body}</div>
      <span>
        {review.photos.map((photo) => {
          return <img key={photo.id} src={photo.url} alt="Clothing product" width="100" height="100" />;
        })}
      </span>
      {review.recommend ? <span>I recommend this product</span> : null}
      <span>{review.reviewer_name}</span>
      <div>{review.response}</div>
      <span>
        Helpful:
        {review.helpfulness}
        <button type="submit">Report?</button>
      </span>
    </styling.ReviewTileDiv>
  );
};

export default ReviewTile;
