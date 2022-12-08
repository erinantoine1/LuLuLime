/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import * as styling from './Styling.js';
import StaticStars from './StaticStars.jsx';

const ReviewTile = ({ review, setReviews, sortOrder }) => {

  const handleUpdate = (route, review_id) => {
    axios({
      url: `/reviews/${route}`,
      method: 'put',
      params: {
        review_id
      }
    })
      .then(() => {
        return axios.get('/reviews', {
          params: {
            product_id: 40344,
            sort: sortOrder,
            count: 1000
          }
        });
      })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <styling.ReviewTileDiv>
      <styling.ReviewTileHeader>
        <span>{review.summary}</span>
        <span>{review.date}</span>
      </styling.ReviewTileHeader>
      <span>
        Rating:
        <StaticStars rating={review.rating} size={14} />
      </span>
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
        {`Helpful: ${review.helpfulness}`}
        <button type="submit" onClick={() => handleUpdate('helpful', review.review_id)}>Yes</button>
        <button type="submit" onClick={() => handleUpdate('report', review.review_id)}>Report?</button>
      </span>
    </styling.ReviewTileDiv>
  );
};

export default ReviewTile;
